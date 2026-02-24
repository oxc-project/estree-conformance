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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
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
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 105
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 108
          }
        ],
        "start": 93,
        "end": 109
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
              },
              "typeArguments": null,
              "start": 113,
              "end": 114
            },
            "start": 111,
            "end": 114
          },
          "start": 110,
          "end": 114
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
          "start": 116,
          "end": 120
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 132,
                  "end": 133
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 136,
                    "end": 140
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "start": 136,
                  "end": 148
                },
                "definite": false,
                "start": 132,
                "end": 148
              }
            ],
            "declare": false,
            "start": 128,
            "end": 149
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
                  "start": 158,
                  "end": 159
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 162,
                    "end": 166
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 174
                  },
                  "start": 162,
                  "end": 174
                },
                "definite": false,
                "start": 158,
                "end": 174
              }
            ],
            "declare": false,
            "start": 154,
            "end": 175
          }
        ],
        "start": 122,
        "end": 177
      },
      "expression": false,
      "start": 82,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 203
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
              "start": 204,
              "end": 205
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "typeArguments": null,
              "start": 214,
              "end": 215
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 204,
            "end": 215
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 228
              },
              "typeArguments": null,
              "start": 227,
              "end": 228
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 217,
            "end": 228
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 231
          }
        ],
        "start": 203,
        "end": 232
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "typeArguments": null,
              "start": 236,
              "end": 237
            },
            "start": 234,
            "end": 237
          },
          "start": 233,
          "end": 237
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
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 243
          },
          "start": 239,
          "end": 243
        },
        {
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
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 249
              },
              "typeArguments": null,
              "start": 248,
              "end": 249
            },
            "start": 246,
            "end": 249
          },
          "start": 245,
          "end": 249
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 261,
                  "end": 262
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 265,
                    "end": 269
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "start": 265,
                  "end": 277
                },
                "definite": false,
                "start": 261,
                "end": 277
              }
            ],
            "declare": false,
            "start": 257,
            "end": 278
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
                  "start": 287,
                  "end": 288
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 291,
                    "end": 295
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 299
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "start": 291,
                  "end": 303
                },
                "definite": false,
                "start": 287,
                "end": 303
              }
            ],
            "declare": false,
            "start": 283,
            "end": 304
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
                  "start": 324,
                  "end": 326
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 329,
                    "end": 333
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "start": 329,
                  "end": 341
                },
                "definite": false,
                "start": 324,
                "end": 341
              }
            ],
            "declare": false,
            "start": 320,
            "end": 342
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
                  "start": 351,
                  "end": 353
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 356,
                    "end": 360
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 364
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 368
                  },
                  "start": 356,
                  "end": 368
                },
                "definite": false,
                "start": 351,
                "end": 368
              }
            ],
            "declare": false,
            "start": 347,
            "end": 369
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
                  "name": "r2a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 392
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 395,
                    "end": 399
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 403
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 407
                  },
                  "start": 395,
                  "end": 407
                },
                "definite": false,
                "start": 389,
                "end": 407
              }
            ],
            "declare": false,
            "start": 385,
            "end": 408
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
                  "name": "r2b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 420
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 423,
                    "end": 427
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 435
                  },
                  "start": 423,
                  "end": 435
                },
                "definite": false,
                "start": 417,
                "end": 435
              }
            ],
            "declare": false,
            "start": 413,
            "end": 436
          }
        ],
        "start": 251,
        "end": 438
      },
      "expression": false,
      "start": 192,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 467
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
              "start": 468,
              "end": 469
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 479
              },
              "typeArguments": null,
              "start": 478,
              "end": 479
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 479
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 482
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 495
              },
              "typeArguments": null,
              "start": 491,
              "end": 495
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 481,
            "end": 495
          }
        ],
        "start": 467,
        "end": 496
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "typeArguments": null,
              "start": 500,
              "end": 501
            },
            "start": 498,
            "end": 501
          },
          "start": 497,
          "end": 501
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
                "start": 506,
                "end": 507
              },
              "typeArguments": null,
              "start": 506,
              "end": 507
            },
            "start": 504,
            "end": 507
          },
          "start": 503,
          "end": 507
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 519,
                  "end": 520
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 523,
                    "end": 527
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 535
                  },
                  "start": 523,
                  "end": 535
                },
                "definite": false,
                "start": 519,
                "end": 535
              }
            ],
            "declare": false,
            "start": 515,
            "end": 536
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
                  "start": 545,
                  "end": 546
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 549,
                    "end": 553
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 557
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 560,
                    "end": 561
                  },
                  "start": 549,
                  "end": 561
                },
                "definite": false,
                "start": 545,
                "end": 561
              }
            ],
            "declare": false,
            "start": 541,
            "end": 562
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
                  "start": 582,
                  "end": 584
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 587,
                    "end": 591
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 606
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 598,
                    "end": 608
                  },
                  "start": 587,
                  "end": 608
                },
                "definite": false,
                "start": 582,
                "end": 608
              }
            ],
            "declare": false,
            "start": 578,
            "end": 609
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
                  "start": 619,
                  "end": 621
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 624,
                    "end": 628
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 635,
                      "end": 639
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 631,
                    "end": 641
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 645
                  },
                  "start": 624,
                  "end": 645
                },
                "definite": false,
                "start": 619,
                "end": 645
              }
            ],
            "declare": false,
            "start": 615,
            "end": 646
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
                  "start": 666,
                  "end": 668
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 671,
                    "end": 675
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 686,
                      "end": 690
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 682,
                    "end": 692
                  },
                  "start": 671,
                  "end": 692
                },
                "definite": false,
                "start": 666,
                "end": 692
              }
            ],
            "declare": false,
            "start": 662,
            "end": 693
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
                  "start": 703,
                  "end": 705
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 708,
                    "end": 712
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 723
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 715,
                    "end": 725
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 729
                  },
                  "start": 708,
                  "end": 729
                },
                "definite": false,
                "start": 703,
                "end": 729
              }
            ],
            "declare": false,
            "start": 699,
            "end": 730
          }
        ],
        "start": 509,
        "end": 732
      },
      "expression": false,
      "start": 456,
      "end": 732
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 745,
        "end": 747
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 755,
                "end": 761
              },
              "start": 753,
              "end": 761
            },
            "accessibility": null,
            "static": false,
            "start": 750,
            "end": 762
          }
        ],
        "start": 748,
        "end": 764
      },
      "declare": false,
      "start": 735,
      "end": 764
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 773
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 779
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 781,
                "end": 787
              },
              "start": 779,
              "end": 787
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
            "start": 776,
            "end": 788
          }
        ],
        "start": 774,
        "end": 790
      },
      "abstract": false,
      "declare": false,
      "start": 765,
      "end": 790
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
        "start": 797,
        "end": 799
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
              "start": 800,
              "end": 801
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 800,
            "end": 801
          }
        ],
        "start": 799,
        "end": 802
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 808
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
                  "start": 810,
                  "end": 811
                },
                "typeArguments": null,
                "start": 810,
                "end": 811
              },
              "start": 808,
              "end": 811
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
            "start": 805,
            "end": 812
          }
        ],
        "start": 803,
        "end": 814
      },
      "abstract": false,
      "declare": false,
      "start": 791,
      "end": 814
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 821
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 825
            },
            "initializer": null,
            "computed": false,
            "start": 824,
            "end": 825
          }
        ],
        "start": 822,
        "end": 827
      },
      "const": false,
      "declare": false,
      "start": 815,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 838
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 841,
        "end": 844
      },
      "expression": false,
      "start": 828,
      "end": 844
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 856
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 877
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 880,
                    "end": 881
                  },
                  "definite": false,
                  "start": 874,
                  "end": 881
                }
              ],
              "declare": false,
              "start": 870,
              "end": 882
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 863,
            "end": 882
          }
        ],
        "start": 857,
        "end": 884
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 845,
      "end": 884
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 892
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 898
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 900,
                "end": 906
              },
              "start": 898,
              "end": 906
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
            "start": 895,
            "end": 906
          }
        ],
        "start": 893,
        "end": 908
      },
      "abstract": false,
      "declare": false,
      "start": 885,
      "end": 908
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 919,
        "end": 920
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 938,
                    "end": 941
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 944,
                    "end": 945
                  },
                  "definite": false,
                  "start": 938,
                  "end": 945
                }
              ],
              "declare": false,
              "start": 934,
              "end": 946
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 927,
            "end": 946
          }
        ],
        "start": 921,
        "end": 948
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 909,
      "end": 948
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 961
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
              "start": 962,
              "end": 963
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 978
              },
              "typeArguments": null,
              "start": 972,
              "end": 978
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 962,
            "end": 978
          }
        ],
        "start": 961,
        "end": 979
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 984
              },
              "typeArguments": null,
              "start": 983,
              "end": 984
            },
            "start": 981,
            "end": 984
          },
          "start": 980,
          "end": 984
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 998
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1001,
                    "end": 1005
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1009
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1012,
                    "end": 1016
                  },
                  "start": 1001,
                  "end": 1016
                },
                "definite": false,
                "start": 996,
                "end": 1016
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1017
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
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1032,
                  "end": 1034
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1037,
                    "end": 1041
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1044,
                    "end": 1048
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1052
                  },
                  "start": 1037,
                  "end": 1052
                },
                "definite": false,
                "start": 1032,
                "end": 1052
              }
            ],
            "declare": false,
            "start": 1028,
            "end": 1053
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
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1088
                      },
                      "typeArguments": null,
                      "start": 1072,
                      "end": 1088
                    },
                    "start": 1070,
                    "end": 1088
                  },
                  "start": 1069,
                  "end": 1088
                },
                "init": null,
                "definite": false,
                "start": 1069,
                "end": 1088
              }
            ],
            "declare": false,
            "start": 1065,
            "end": 1089
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
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1101
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1104,
                    "end": 1108
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1112
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1116
                  },
                  "start": 1104,
                  "end": 1116
                },
                "definite": false,
                "start": 1098,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1094,
            "end": 1117
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
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1135
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1138,
                    "end": 1142
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1146
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1150
                  },
                  "start": 1138,
                  "end": 1150
                },
                "definite": false,
                "start": 1132,
                "end": 1150
              }
            ],
            "declare": false,
            "start": 1128,
            "end": 1151
          }
        ],
        "start": 986,
        "end": 1159
      },
      "expression": false,
      "start": 950,
      "end": 1159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1170,
        "end": 1172
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
              "start": 1173,
              "end": 1174
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1183,
                "end": 1189
              },
              "typeArguments": null,
              "start": 1183,
              "end": 1189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1173,
            "end": 1189
          }
        ],
        "start": 1172,
        "end": 1190
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1194,
                "end": 1195
              },
              "typeArguments": null,
              "start": 1194,
              "end": 1195
            },
            "start": 1192,
            "end": 1195
          },
          "start": 1191,
          "end": 1195
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1209
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1212,
                    "end": 1216
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1219,
                    "end": 1220
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1223,
                    "end": 1224
                  },
                  "start": 1212,
                  "end": 1224
                },
                "definite": false,
                "start": 1207,
                "end": 1224
              }
            ],
            "declare": false,
            "start": 1203,
            "end": 1225
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1240,
                  "end": 1242
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1245,
                    "end": 1249
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1256,
                    "end": 1257
                  },
                  "start": 1245,
                  "end": 1257
                },
                "definite": false,
                "start": 1240,
                "end": 1257
              }
            ],
            "declare": false,
            "start": 1236,
            "end": 1258
          }
        ],
        "start": 1197,
        "end": 1266
      },
      "expression": false,
      "start": 1161,
      "end": 1266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1279
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
              "start": 1280,
              "end": 1281
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1296
              },
              "typeArguments": null,
              "start": 1290,
              "end": 1296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1280,
            "end": 1296
          }
        ],
        "start": 1279,
        "end": 1297
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1302
              },
              "typeArguments": null,
              "start": 1301,
              "end": 1302
            },
            "start": 1299,
            "end": 1302
          },
          "start": 1298,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 1314,
                  "end": 1316
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1319,
                    "end": 1323
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1326,
                    "end": 1328
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1331,
                    "end": 1332
                  },
                  "start": 1319,
                  "end": 1332
                },
                "definite": false,
                "start": 1314,
                "end": 1332
              }
            ],
            "declare": false,
            "start": 1310,
            "end": 1333
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
                  "start": 1348,
                  "end": 1350
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1353,
                    "end": 1357
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1361
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1364,
                    "end": 1366
                  },
                  "start": 1353,
                  "end": 1366
                },
                "definite": false,
                "start": 1348,
                "end": 1366
              }
            ],
            "declare": false,
            "start": 1344,
            "end": 1367
          }
        ],
        "start": 1304,
        "end": 1375
      },
      "expression": false,
      "start": 1268,
      "end": 1375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1388
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
              "start": 1389,
              "end": 1390
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boolean",
                "optional": false,
                "typeAnnotation": null,
                "start": 1399,
                "end": 1406
              },
              "typeArguments": null,
              "start": 1399,
              "end": 1406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1389,
            "end": 1406
          }
        ],
        "start": 1388,
        "end": 1407
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "typeArguments": null,
              "start": 1411,
              "end": 1412
            },
            "start": 1409,
            "end": 1412
          },
          "start": 1408,
          "end": 1412
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 1424,
                  "end": 1426
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1429,
                    "end": 1433
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1436,
                    "end": 1440
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1444
                  },
                  "start": 1429,
                  "end": 1444
                },
                "definite": false,
                "start": 1424,
                "end": 1444
              }
            ],
            "declare": false,
            "start": 1420,
            "end": 1445
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
                  "start": 1460,
                  "end": 1462
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1465,
                    "end": 1469
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1472,
                    "end": 1473
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1476,
                    "end": 1480
                  },
                  "start": 1465,
                  "end": 1480
                },
                "definite": false,
                "start": 1460,
                "end": 1480
              }
            ],
            "declare": false,
            "start": 1456,
            "end": 1481
          }
        ],
        "start": 1414,
        "end": 1489
      },
      "expression": false,
      "start": 1377,
      "end": 1489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1500,
        "end": 1502
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
              "start": 1503,
              "end": 1504
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1513,
                "end": 1517
              },
              "typeArguments": null,
              "start": 1513,
              "end": 1517
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1503,
            "end": 1517
          }
        ],
        "start": 1502,
        "end": 1518
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1522,
                "end": 1523
              },
              "typeArguments": null,
              "start": 1522,
              "end": 1523
            },
            "start": 1520,
            "end": 1523
          },
          "start": 1519,
          "end": 1523
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1535,
                  "end": 1537
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1540,
                    "end": 1544
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1551,
                      "end": 1555
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1547,
                    "end": 1557
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1561
                  },
                  "start": 1540,
                  "end": 1561
                },
                "definite": false,
                "start": 1535,
                "end": 1561
              }
            ],
            "declare": false,
            "start": 1531,
            "end": 1562
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1577,
                  "end": 1579
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1582,
                    "end": 1586
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1589,
                    "end": 1590
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1597,
                      "end": 1601
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1593,
                    "end": 1603
                  },
                  "start": 1582,
                  "end": 1603
                },
                "definite": false,
                "start": 1577,
                "end": 1603
              }
            ],
            "declare": false,
            "start": 1573,
            "end": 1604
          }
        ],
        "start": 1525,
        "end": 1612
      },
      "expression": false,
      "start": 1491,
      "end": 1612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1625
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
              "start": 1626,
              "end": 1627
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1642
              },
              "typeArguments": null,
              "start": 1636,
              "end": 1642
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1626,
            "end": 1642
          }
        ],
        "start": 1625,
        "end": 1643
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1648
              },
              "typeArguments": null,
              "start": 1647,
              "end": 1648
            },
            "start": 1645,
            "end": 1648
          },
          "start": 1644,
          "end": 1648
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1660,
                  "end": 1662
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1665,
                    "end": 1669
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "pattern": "1",
                      "flags": ""
                    },
                    "start": 1672,
                    "end": 1675
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1678,
                    "end": 1679
                  },
                  "start": 1665,
                  "end": 1679
                },
                "definite": false,
                "start": 1660,
                "end": 1679
              }
            ],
            "declare": false,
            "start": 1656,
            "end": 1680
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1695,
                  "end": 1697
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1700,
                    "end": 1704
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "pattern": "1",
                      "flags": ""
                    },
                    "start": 1711,
                    "end": 1714
                  },
                  "start": 1700,
                  "end": 1714
                },
                "definite": false,
                "start": 1695,
                "end": 1714
              }
            ],
            "declare": false,
            "start": 1691,
            "end": 1715
          }
        ],
        "start": 1650,
        "end": 1723
      },
      "expression": false,
      "start": 1614,
      "end": 1723
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1734,
        "end": 1737
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
              "start": 1738,
              "end": 1739
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1753
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1755,
                      "end": 1761
                    },
                    "start": 1753,
                    "end": 1761
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1750,
                  "end": 1761
                }
              ],
              "start": 1748,
              "end": 1763
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1738,
            "end": 1763
          }
        ],
        "start": 1737,
        "end": 1764
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1769
              },
              "typeArguments": null,
              "start": 1768,
              "end": 1769
            },
            "start": 1766,
            "end": 1769
          },
          "start": 1765,
          "end": 1769
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1781,
                  "end": 1783
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1786,
                    "end": 1790
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1795,
                          "end": 1798
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1800,
                          "end": 1801
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1795,
                        "end": 1801
                      }
                    ],
                    "start": 1793,
                    "end": 1803
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1806,
                    "end": 1807
                  },
                  "start": 1786,
                  "end": 1807
                },
                "definite": false,
                "start": 1781,
                "end": 1807
              }
            ],
            "declare": false,
            "start": 1777,
            "end": 1808
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1823,
                  "end": 1825
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1828,
                    "end": 1832
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1835,
                    "end": 1836
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1841,
                          "end": 1844
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1846,
                          "end": 1847
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1841,
                        "end": 1847
                      }
                    ],
                    "start": 1839,
                    "end": 1849
                  },
                  "start": 1828,
                  "end": 1849
                },
                "definite": false,
                "start": 1823,
                "end": 1849
              }
            ],
            "declare": false,
            "start": 1819,
            "end": 1850
          }
        ],
        "start": 1771,
        "end": 1858
      },
      "expression": false,
      "start": 1725,
      "end": 1858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1869,
        "end": 1872
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
              "start": 1873,
              "end": 1874
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1889,
                  "end": 1893
                },
                "start": 1886,
                "end": 1893
              },
              "start": 1883,
              "end": 1893
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1873,
            "end": 1893
          }
        ],
        "start": 1872,
        "end": 1894
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1898,
                "end": 1899
              },
              "typeArguments": null,
              "start": 1898,
              "end": 1899
            },
            "start": 1896,
            "end": 1899
          },
          "start": 1895,
          "end": 1899
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1913
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1916,
                    "end": 1920
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1929,
                      "end": 1932
                    },
                    "id": null,
                    "generator": false,
                    "start": 1923,
                    "end": 1932
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1935,
                    "end": 1936
                  },
                  "start": 1916,
                  "end": 1936
                },
                "definite": false,
                "start": 1911,
                "end": 1936
              }
            ],
            "declare": false,
            "start": 1907,
            "end": 1937
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1952,
                  "end": 1954
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1957,
                    "end": 1961
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1965
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1974,
                      "end": 1977
                    },
                    "id": null,
                    "generator": false,
                    "start": 1968,
                    "end": 1977
                  },
                  "start": 1957,
                  "end": 1977
                },
                "definite": false,
                "start": 1952,
                "end": 1977
              }
            ],
            "declare": false,
            "start": 1948,
            "end": 1978
          }
        ],
        "start": 1901,
        "end": 1986
      },
      "expression": false,
      "start": 1860,
      "end": 1986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1997,
        "end": 2000
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
              "start": 2001,
              "end": 2002
            },
            "constraint": {
              "type": "TSFunctionType",
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
                      "start": 2012,
                      "end": 2013
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2012,
                    "end": 2013
                  }
                ],
                "start": 2011,
                "end": 2014
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2018,
                        "end": 2019
                      },
                      "typeArguments": null,
                      "start": 2018,
                      "end": 2019
                    },
                    "start": 2016,
                    "end": 2019
                  },
                  "start": 2015,
                  "end": 2019
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
                    "start": 2024,
                    "end": 2025
                  },
                  "typeArguments": null,
                  "start": 2024,
                  "end": 2025
                },
                "start": 2021,
                "end": 2025
              },
              "start": 2011,
              "end": 2025
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2001,
            "end": 2025
          }
        ],
        "start": 2000,
        "end": 2026
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2031
              },
              "typeArguments": null,
              "start": 2030,
              "end": 2031
            },
            "start": 2028,
            "end": 2031
          },
          "start": 2027,
          "end": 2031
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2043,
                  "end": 2045
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2048,
                    "end": 2052
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "start": 2056,
                            "end": 2057
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2056,
                          "end": 2057
                        }
                      ],
                      "start": 2055,
                      "end": 2058
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2062,
                              "end": 2063
                            },
                            "typeArguments": null,
                            "start": 2062,
                            "end": 2063
                          },
                          "start": 2060,
                          "end": 2063
                        },
                        "start": 2059,
                        "end": 2063
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2077,
                            "end": 2078
                          },
                          "start": 2070,
                          "end": 2078
                        }
                      ],
                      "start": 2068,
                      "end": 2080
                    },
                    "id": null,
                    "generator": false,
                    "start": 2055,
                    "end": 2080
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2083,
                    "end": 2084
                  },
                  "start": 2048,
                  "end": 2084
                },
                "definite": false,
                "start": 2043,
                "end": 2084
              }
            ],
            "declare": false,
            "start": 2039,
            "end": 2085
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
                  "name": "r8b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2100,
                  "end": 2103
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2106,
                    "end": 2110
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2114
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "start": 2118,
                            "end": 2119
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2118,
                          "end": 2119
                        }
                      ],
                      "start": 2117,
                      "end": 2120
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2124,
                              "end": 2125
                            },
                            "typeArguments": null,
                            "start": 2124,
                            "end": 2125
                          },
                          "start": 2122,
                          "end": 2125
                        },
                        "start": 2121,
                        "end": 2125
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2139,
                            "end": 2140
                          },
                          "start": 2132,
                          "end": 2140
                        }
                      ],
                      "start": 2130,
                      "end": 2142
                    },
                    "id": null,
                    "generator": false,
                    "start": 2117,
                    "end": 2142
                  },
                  "start": 2106,
                  "end": 2142
                },
                "definite": false,
                "start": 2100,
                "end": 2142
              }
            ],
            "declare": false,
            "start": 2096,
            "end": 2143
          }
        ],
        "start": 2033,
        "end": 2202
      },
      "expression": false,
      "start": 1988,
      "end": 2202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2213,
        "end": 2216
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
              "start": 2217,
              "end": 2218
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2229
              },
              "typeArguments": null,
              "start": 2227,
              "end": 2229
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2217,
            "end": 2229
          }
        ],
        "start": 2216,
        "end": 2230
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2235
              },
              "typeArguments": null,
              "start": 2234,
              "end": 2235
            },
            "start": 2232,
            "end": 2235
          },
          "start": 2231,
          "end": 2235
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2251,
                        "end": 2253
                      },
                      "typeArguments": null,
                      "start": 2251,
                      "end": 2253
                    },
                    "start": 2249,
                    "end": 2253
                  },
                  "start": 2247,
                  "end": 2253
                },
                "init": null,
                "definite": false,
                "start": 2247,
                "end": 2253
              }
            ],
            "declare": false,
            "start": 2243,
            "end": 2254
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2265
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2268,
                    "end": 2272
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2275,
                    "end": 2277
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2280,
                    "end": 2281
                  },
                  "start": 2268,
                  "end": 2281
                },
                "definite": false,
                "start": 2263,
                "end": 2281
              }
            ],
            "declare": false,
            "start": 2259,
            "end": 2282
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2297,
                  "end": 2299
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2302,
                    "end": 2306
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2309,
                    "end": 2310
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2315
                  },
                  "start": 2302,
                  "end": 2315
                },
                "definite": false,
                "start": 2297,
                "end": 2315
              }
            ],
            "declare": false,
            "start": 2293,
            "end": 2316
          }
        ],
        "start": 2237,
        "end": 2324
      },
      "expression": false,
      "start": 2204,
      "end": 2324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2338
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
              "start": 2339,
              "end": 2340
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2349,
                "end": 2351
              },
              "typeArguments": null,
              "start": 2349,
              "end": 2351
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2339,
            "end": 2351
          }
        ],
        "start": 2338,
        "end": 2352
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2356,
                "end": 2357
              },
              "typeArguments": null,
              "start": 2356,
              "end": 2357
            },
            "start": 2354,
            "end": 2357
          },
          "start": 2353,
          "end": 2357
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2373,
                        "end": 2375
                      },
                      "typeArguments": null,
                      "start": 2373,
                      "end": 2375
                    },
                    "start": 2371,
                    "end": 2375
                  },
                  "start": 2369,
                  "end": 2375
                },
                "init": null,
                "definite": false,
                "start": 2369,
                "end": 2375
              }
            ],
            "declare": false,
            "start": 2365,
            "end": 2376
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
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2385,
                  "end": 2388
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2391,
                    "end": 2395
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2398,
                    "end": 2400
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2404
                  },
                  "start": 2391,
                  "end": 2404
                },
                "definite": false,
                "start": 2385,
                "end": 2404
              }
            ],
            "declare": false,
            "start": 2381,
            "end": 2405
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
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2420,
                  "end": 2423
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2426,
                    "end": 2430
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2433,
                    "end": 2434
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2437,
                    "end": 2439
                  },
                  "start": 2426,
                  "end": 2439
                },
                "definite": false,
                "start": 2420,
                "end": 2439
              }
            ],
            "declare": false,
            "start": 2416,
            "end": 2440
          }
        ],
        "start": 2359,
        "end": 2448
      },
      "expression": false,
      "start": 2326,
      "end": 2448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2462
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
              "start": 2463,
              "end": 2464
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2473,
                "end": 2475
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2476,
                    "end": 2482
                  }
                ],
                "start": 2475,
                "end": 2483
              },
              "start": 2473,
              "end": 2483
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2463,
            "end": 2483
          }
        ],
        "start": 2462,
        "end": 2484
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2488,
                "end": 2489
              },
              "typeArguments": null,
              "start": 2488,
              "end": 2489
            },
            "start": 2486,
            "end": 2489
          },
          "start": 2485,
          "end": 2489
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2505,
                        "end": 2507
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2508,
                            "end": 2514
                          }
                        ],
                        "start": 2507,
                        "end": 2515
                      },
                      "start": 2505,
                      "end": 2515
                    },
                    "start": 2503,
                    "end": 2515
                  },
                  "start": 2501,
                  "end": 2515
                },
                "init": null,
                "definite": false,
                "start": 2501,
                "end": 2515
              }
            ],
            "declare": false,
            "start": 2497,
            "end": 2516
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
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2525,
                  "end": 2528
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2531,
                    "end": 2535
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2540
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2543,
                    "end": 2544
                  },
                  "start": 2531,
                  "end": 2544
                },
                "definite": false,
                "start": 2525,
                "end": 2544
              }
            ],
            "declare": false,
            "start": 2521,
            "end": 2545
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
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2560,
                  "end": 2563
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2566,
                    "end": 2570
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2573,
                    "end": 2574
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2577,
                    "end": 2579
                  },
                  "start": 2566,
                  "end": 2579
                },
                "definite": false,
                "start": 2560,
                "end": 2579
              }
            ],
            "declare": false,
            "start": 2556,
            "end": 2580
          }
        ],
        "start": 2491,
        "end": 2588
      },
      "expression": false,
      "start": 2450,
      "end": 2588
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2599,
        "end": 2602
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
              "start": 2603,
              "end": 2604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2613,
                "end": 2614
              },
              "typeArguments": null,
              "start": 2613,
              "end": 2614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2603,
            "end": 2614
          }
        ],
        "start": 2602,
        "end": 2615
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2619,
                "end": 2620
              },
              "typeArguments": null,
              "start": 2619,
              "end": 2620
            },
            "start": 2617,
            "end": 2620
          },
          "start": 2616,
          "end": 2620
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2632,
                  "end": 2635
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2638,
                    "end": 2642
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2645,
                    "end": 2646
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2649,
                    "end": 2650
                  },
                  "start": 2638,
                  "end": 2650
                },
                "definite": false,
                "start": 2632,
                "end": 2650
              }
            ],
            "declare": false,
            "start": 2628,
            "end": 2651
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
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2666,
                  "end": 2669
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2672,
                    "end": 2676
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2679,
                    "end": 2680
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2683,
                    "end": 2684
                  },
                  "start": 2672,
                  "end": 2684
                },
                "definite": false,
                "start": 2666,
                "end": 2684
              }
            ],
            "declare": false,
            "start": 2662,
            "end": 2685
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
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2701,
                  "end": 2704
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2707,
                    "end": 2711
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2714,
                      "end": 2715
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2716,
                      "end": 2717
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2714,
                    "end": 2717
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2720,
                    "end": 2721
                  },
                  "start": 2707,
                  "end": 2721
                },
                "definite": false,
                "start": 2701,
                "end": 2721
              }
            ],
            "declare": false,
            "start": 2697,
            "end": 2722
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
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2737,
                  "end": 2740
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2743,
                    "end": 2747
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2750,
                    "end": 2751
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2754,
                      "end": 2755
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2756,
                      "end": 2757
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2754,
                    "end": 2757
                  },
                  "start": 2743,
                  "end": 2757
                },
                "definite": false,
                "start": 2737,
                "end": 2757
              }
            ],
            "declare": false,
            "start": 2733,
            "end": 2758
          }
        ],
        "start": 2622,
        "end": 2766
      },
      "expression": false,
      "start": 2590,
      "end": 2766
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2777,
        "end": 2780
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
              "start": 2781,
              "end": 2782
            },
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 2798,
                "end": 2799
              },
              "typeArguments": null,
              "start": 2791,
              "end": 2799
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2781,
            "end": 2799
          }
        ],
        "start": 2780,
        "end": 2800
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2804,
                "end": 2805
              },
              "typeArguments": null,
              "start": 2804,
              "end": 2805
            },
            "start": 2802,
            "end": 2805
          },
          "start": 2801,
          "end": 2805
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "af",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2828,
                        "end": 2829
                      },
                      "typeArguments": null,
                      "start": 2821,
                      "end": 2829
                    },
                    "start": 2819,
                    "end": 2829
                  },
                  "start": 2817,
                  "end": 2829
                },
                "init": null,
                "definite": false,
                "start": 2817,
                "end": 2829
              }
            ],
            "declare": false,
            "start": 2813,
            "end": 2830
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
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2842
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2845,
                    "end": 2849
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2854
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2857,
                    "end": 2858
                  },
                  "start": 2845,
                  "end": 2858
                },
                "definite": false,
                "start": 2839,
                "end": 2858
              }
            ],
            "declare": false,
            "start": 2835,
            "end": 2859
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
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2874,
                  "end": 2877
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2880,
                    "end": 2884
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2887,
                    "end": 2888
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2891,
                    "end": 2893
                  },
                  "start": 2880,
                  "end": 2893
                },
                "definite": false,
                "start": 2874,
                "end": 2893
              }
            ],
            "declare": false,
            "start": 2870,
            "end": 2894
          }
        ],
        "start": 2807,
        "end": 2902
      },
      "expression": false,
      "start": 2768,
      "end": 2902
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2913,
        "end": 2916
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
              "start": 2917,
              "end": 2918
            },
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2934,
                "end": 2935
              },
              "typeArguments": null,
              "start": 2927,
              "end": 2935
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2917,
            "end": 2935
          }
        ],
        "start": 2916,
        "end": 2936
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2940,
                "end": 2941
              },
              "typeArguments": null,
              "start": 2940,
              "end": 2941
            },
            "start": 2938,
            "end": 2941
          },
          "start": 2937,
          "end": 2941
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2964,
                        "end": 2965
                      },
                      "typeArguments": null,
                      "start": 2957,
                      "end": 2965
                    },
                    "start": 2955,
                    "end": 2965
                  },
                  "start": 2953,
                  "end": 2965
                },
                "init": null,
                "definite": false,
                "start": 2953,
                "end": 2965
              }
            ],
            "declare": false,
            "start": 2949,
            "end": 2966
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
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2975,
                  "end": 2978
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2981,
                    "end": 2985
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2988,
                    "end": 2990
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2993,
                    "end": 2994
                  },
                  "start": 2981,
                  "end": 2994
                },
                "definite": false,
                "start": 2975,
                "end": 2994
              }
            ],
            "declare": false,
            "start": 2971,
            "end": 2995
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
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3010,
                  "end": 3013
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3016,
                    "end": 3020
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3023,
                    "end": 3024
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3027,
                    "end": 3029
                  },
                  "start": 3016,
                  "end": 3029
                },
                "definite": false,
                "start": 3010,
                "end": 3029
              }
            ],
            "declare": false,
            "start": 3006,
            "end": 3030
          }
        ],
        "start": 2943,
        "end": 3038
      },
      "expression": false,
      "start": 2904,
      "end": 3038
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f19",
        "optional": false,
        "typeAnnotation": null,
        "start": 3049,
        "end": 3052
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
              "start": 3053,
              "end": 3054
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3053,
            "end": 3054
          }
        ],
        "start": 3052,
        "end": 3055
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3059,
                "end": 3060
              },
              "typeArguments": null,
              "start": 3059,
              "end": 3060
            },
            "start": 3057,
            "end": 3060
          },
          "start": 3056,
          "end": 3060
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3077,
              "end": 3080
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3081,
                    "end": 3082
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3091,
                      "end": 3092
                    },
                    "typeArguments": null,
                    "start": 3091,
                    "end": 3092
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3081,
                  "end": 3092
                }
              ],
              "start": 3080,
              "end": 3093
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 3097,
                      "end": 3098
                    },
                    "typeArguments": null,
                    "start": 3097,
                    "end": 3098
                  },
                  "start": 3095,
                  "end": 3098
                },
                "start": 3094,
                "end": 3098
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3114,
                        "end": 3117
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3120,
                          "end": 3124
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3127,
                          "end": 3128
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3131,
                          "end": 3132
                        },
                        "start": 3120,
                        "end": 3132
                      },
                      "definite": false,
                      "start": 3114,
                      "end": 3132
                    }
                  ],
                  "declare": false,
                  "start": 3110,
                  "end": 3133
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
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3152,
                        "end": 3155
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3158,
                          "end": 3162
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3165,
                          "end": 3166
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3169,
                          "end": 3170
                        },
                        "start": 3158,
                        "end": 3170
                      },
                      "definite": false,
                      "start": 3152,
                      "end": 3170
                    }
                  ],
                  "declare": false,
                  "start": 3148,
                  "end": 3171
                }
              ],
              "start": 3100,
              "end": 3183
            },
            "expression": false,
            "start": 3068,
            "end": 3183
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3198,
              "end": 3201
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
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3202,
                    "end": 3203
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3212,
                      "end": 3213
                    },
                    "typeArguments": null,
                    "start": 3212,
                    "end": 3213
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3202,
                  "end": 3213
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3215,
                    "end": 3216
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3225,
                      "end": 3226
                    },
                    "typeArguments": null,
                    "start": 3225,
                    "end": 3226
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3215,
                  "end": 3226
                }
              ],
              "start": 3201,
              "end": 3227
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3231,
                      "end": 3232
                    },
                    "typeArguments": null,
                    "start": 3231,
                    "end": 3232
                  },
                  "start": 3229,
                  "end": 3232
                },
                "start": 3228,
                "end": 3232
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3248,
                        "end": 3251
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3254,
                          "end": 3258
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3261,
                          "end": 3262
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3265,
                          "end": 3266
                        },
                        "start": 3254,
                        "end": 3266
                      },
                      "definite": false,
                      "start": 3248,
                      "end": 3266
                    }
                  ],
                  "declare": false,
                  "start": 3244,
                  "end": 3267
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
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3286,
                        "end": 3289
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3292,
                          "end": 3296
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3299,
                          "end": 3300
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3303,
                          "end": 3304
                        },
                        "start": 3292,
                        "end": 3304
                      },
                      "definite": false,
                      "start": 3286,
                      "end": 3304
                    }
                  ],
                  "declare": false,
                  "start": 3282,
                  "end": 3305
                }
              ],
              "start": 3234,
              "end": 3317
            },
            "expression": false,
            "start": 3189,
            "end": 3317
          }
        ],
        "start": 3062,
        "end": 3319
      },
      "expression": false,
      "start": 3040,
      "end": 3319
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 3330,
        "end": 3333
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
              "start": 3334,
              "end": 3335
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3344,
                "end": 3350
              },
              "typeArguments": null,
              "start": 3344,
              "end": 3350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3334,
            "end": 3350
          }
        ],
        "start": 3333,
        "end": 3351
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3355,
                "end": 3356
              },
              "typeArguments": null,
              "start": 3355,
              "end": 3356
            },
            "start": 3353,
            "end": 3356
          },
          "start": 3352,
          "end": 3356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3368,
                  "end": 3371
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3374,
                    "end": 3378
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3385,
                      "end": 3391
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3381,
                    "end": 3393
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3396,
                    "end": 3397
                  },
                  "start": 3374,
                  "end": 3397
                },
                "definite": false,
                "start": 3368,
                "end": 3397
              }
            ],
            "declare": false,
            "start": 3364,
            "end": 3398
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
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3413,
                  "end": 3416
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3419,
                    "end": 3423
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3426,
                    "end": 3427
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3440
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3430,
                    "end": 3442
                  },
                  "start": 3419,
                  "end": 3442
                },
                "definite": false,
                "start": 3413,
                "end": 3442
              }
            ],
            "declare": false,
            "start": 3409,
            "end": 3443
          }
        ],
        "start": 3358,
        "end": 3451
      },
      "expression": false,
      "start": 3321,
      "end": 3451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 3462,
        "end": 3465
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
              "start": 3466,
              "end": 3467
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3476,
                "end": 3482
              },
              "typeArguments": null,
              "start": 3476,
              "end": 3482
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3466,
            "end": 3482
          }
        ],
        "start": 3465,
        "end": 3483
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3487,
                "end": 3488
              },
              "typeArguments": null,
              "start": 3487,
              "end": 3488
            },
            "start": 3485,
            "end": 3488
          },
          "start": 3484,
          "end": 3488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3500,
                  "end": 3503
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3506,
                    "end": 3510
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3513,
                    "end": 3515
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3518,
                    "end": 3519
                  },
                  "start": 3506,
                  "end": 3519
                },
                "definite": false,
                "start": 3500,
                "end": 3519
              }
            ],
            "declare": false,
            "start": 3496,
            "end": 3520
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
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3535,
                  "end": 3538
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3541,
                    "end": 3545
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3548,
                    "end": 3549
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3552,
                    "end": 3554
                  },
                  "start": 3541,
                  "end": 3554
                },
                "definite": false,
                "start": 3535,
                "end": 3554
              }
            ],
            "declare": false,
            "start": 3531,
            "end": 3555
          }
        ],
        "start": 3490,
        "end": 3563
      },
      "expression": false,
      "start": 3453,
      "end": 3563
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 3563
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
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
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 192,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 206,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 219,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 239,
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
    "value": "U",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 270,
    "end": 271
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
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 291,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 470,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 483,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 578,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 582,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 715,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 735,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 765,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 776,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 791,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 815,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
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
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 828,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 845,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 863,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 870,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 874,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
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
    "value": "class",
    "start": 885,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 895,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 900,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 909,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 927,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 934,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 938,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 950,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 964,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 972,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 992,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "r0",
    "start": 996,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "r0",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1037,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1072,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1079,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "r0b",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "r0b",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1138,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1161,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1170,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1175,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1183,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1212,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1282,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1290,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1314,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1319,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "String",
    "value": "''",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1353,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "String",
    "value": "''",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1377,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1391,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 1399,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1420,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1429,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1456,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1465,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1476,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1491,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1500,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1505,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1513,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1535,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1540,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1551,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1577,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1582,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1593,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1597,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1614,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1628,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1636,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1660,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "RegularExpression",
    "value": "/1/",
    "regex": {
      "flags": "",
      "pattern": "1"
    },
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1691,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1700,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "RegularExpression",
    "value": "/1/",
    "regex": {
      "flags": "",
      "pattern": "1"
    },
    "start": 1711,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1725,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1734,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1740,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1755,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1781,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1786,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1823,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1828,
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
    "value": "x",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1860,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1875,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1886,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1889,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1911,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1926,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1948,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1952,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1957,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1971,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1988,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1997,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2003,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2021,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2039,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 2043,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2048,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2065,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2070,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 2100,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2106,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2132,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2204,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 2213,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2219,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2227,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2243,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2247,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2251,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2259,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 2263,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2268,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2275,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2293,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 2297,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2302,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2313,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2326,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 2335,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2341,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 2349,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2365,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2369,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 2373,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2381,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 2385,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2391,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2398,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2416,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 2420,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2426,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2450,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 2459,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2465,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2476,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2497,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2501,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2505,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2508,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2521,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 2525,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2531,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2538,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2556,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 2560,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2566,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2577,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2590,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 2599,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2605,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2628,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 2632,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2638,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2662,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 2666,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2672,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2697,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 2701,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2707,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2733,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 2737,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2743,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2768,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 2777,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2783,
    "end": 2790
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2813,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "af",
    "start": 2817,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2821,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2835,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 2839,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2845,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "af",
    "start": 2852,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2870,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 2874,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2880,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "af",
    "start": 2891,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2904,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "f18",
    "start": 2913,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2919,
    "end": 2926
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2927,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2949,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 2953,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2957,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2971,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 2975,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2981,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 2988,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3006,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 3010,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3016,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 3027,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3040,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "f19",
    "start": 3049,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3068,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 3077,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3083,
    "end": 3090
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3110,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 3114,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3120,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3148,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 3152,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3158,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3189,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "f18",
    "start": 3198,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3204,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3217,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3244,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 3248,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3254,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3282,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 3286,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3292,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3321,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3330,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3336,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 3344,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3364,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 3368,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3374,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3381,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3385,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3409,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 3413,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3419,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3430,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3434,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3453,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3462,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3468,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 3476,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3496,
    "end": 3499
  },
  {
    "type": "Identifier",
    "value": "r20",
    "start": 3500,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3506,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3531,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "r20",
    "start": 3535,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3541,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3562,
    "end": 3563
  }
]
```

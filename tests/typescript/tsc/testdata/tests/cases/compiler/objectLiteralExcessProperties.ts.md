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
        "name": "Book",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "foreword",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 38
          }
        ],
        "start": 15,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cover",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 79
          }
        ],
        "start": 58,
        "end": 81
      },
      "declare": false,
      "start": 42,
      "end": 81
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Book",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 95
                },
                "typeArguments": null,
                "start": 91,
                "end": 95
              },
              "start": 89,
              "end": 95
            },
            "start": 87,
            "end": 95
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
                  "name": "forword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": "oops",
                  "raw": "\"oops\"",
                  "start": 109,
                  "end": 115
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 115
              }
            ],
            "start": 98,
            "end": 117
          },
          "definite": false,
          "start": 87,
          "end": 117
        }
      ],
      "declare": false,
      "start": 83,
      "end": 118
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
            "name": "b2",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 128,
                    "end": 132
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                ],
                "start": 128,
                "end": 141
              },
              "start": 126,
              "end": 141
            },
            "start": 124,
            "end": 141
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
                  "name": "foreward",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 154
                },
                "value": {
                  "type": "Literal",
                  "value": "nope",
                  "raw": "\"nope\"",
                  "start": 156,
                  "end": 162
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 146,
                "end": 162
              }
            ],
            "start": 144,
            "end": 164
          },
          "definite": false,
          "start": 124,
          "end": 164
        }
      ],
      "declare": false,
      "start": 120,
      "end": 165
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
            "name": "b3",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 179
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 179
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Book",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 187
                      },
                      "typeArguments": null,
                      "start": 183,
                      "end": 187
                    },
                    "start": 183,
                    "end": 189
                  }
                ],
                "start": 175,
                "end": 190
              },
              "start": 173,
              "end": 190
            },
            "start": 171,
            "end": 190
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foreword",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 204
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 206,
                      "end": 213
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 196,
                    "end": 213
                  }
                ],
                "start": 194,
                "end": 215
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
                      "name": "forwards",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 227
                    },
                    "value": {
                      "type": "Literal",
                      "value": "back",
                      "raw": "\"back\"",
                      "start": 229,
                      "end": 235
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 219,
                    "end": 235
                  }
                ],
                "start": 217,
                "end": 237
              }
            ],
            "start": 193,
            "end": 238
          },
          "definite": false,
          "start": 171,
          "end": 238
        }
      ],
      "declare": false,
      "start": 167,
      "end": 239
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 249,
                    "end": 253
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 261
                    },
                    "typeArguments": null,
                    "start": 256,
                    "end": 261
                  }
                ],
                "start": 249,
                "end": 261
              },
              "start": 247,
              "end": 261
            },
            "start": 245,
            "end": 261
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
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 274
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 276,
                  "end": 280
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 266,
                "end": 280
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "colour",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 288
                },
                "value": {
                  "type": "Literal",
                  "value": "blue",
                  "raw": "\"blue\"",
                  "start": 290,
                  "end": 296
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 282,
                "end": 296
              }
            ],
            "start": 264,
            "end": 298
          },
          "definite": false,
          "start": 245,
          "end": 298
        }
      ],
      "declare": false,
      "start": 241,
      "end": 299
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 313
                    },
                    "typeArguments": null,
                    "start": 309,
                    "end": 313
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 316,
                    "end": 321
                  }
                ],
                "start": 309,
                "end": 321
              },
              "start": 307,
              "end": 321
            },
            "start": 305,
            "end": 321
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
                  "name": "foreward",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 334
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 336,
                  "end": 340
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 340
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 347
                },
                "value": {
                  "type": "Literal",
                  "value": "blue",
                  "raw": "\"blue\"",
                  "start": 349,
                  "end": 355
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 342,
                "end": 355
              }
            ],
            "start": 324,
            "end": 357
          },
          "definite": false,
          "start": 305,
          "end": 357
        }
      ],
      "declare": false,
      "start": 301,
      "end": 358
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 372
                    },
                    "typeArguments": null,
                    "start": 368,
                    "end": 372
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 380
                    },
                    "typeArguments": null,
                    "start": 375,
                    "end": 380
                  }
                ],
                "start": 368,
                "end": 380
              },
              "start": 366,
              "end": 380
            },
            "start": 364,
            "end": 380
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
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 393
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 395,
                  "end": 399
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 385,
                "end": 399
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 406
                },
                "value": {
                  "type": "Literal",
                  "value": "blue",
                  "raw": "\"blue\"",
                  "start": 408,
                  "end": 414
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 401,
                "end": 414
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "price",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 421
                },
                "value": {
                  "type": "Literal",
                  "value": 10.99,
                  "raw": "10.99",
                  "start": 423,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 416,
                "end": 428
              }
            ],
            "start": 383,
            "end": 430
          },
          "definite": false,
          "start": 364,
          "end": 430
        }
      ],
      "declare": false,
      "start": 360,
      "end": 431
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 445
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 445
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 448,
                    "end": 454
                  }
                ],
                "start": 441,
                "end": 454
              },
              "start": 439,
              "end": 454
            },
            "start": 437,
            "end": 454
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
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 467
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 469,
                  "end": 473
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 459,
                "end": 473
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "price",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 480
                },
                "value": {
                  "type": "Literal",
                  "value": 10.99,
                  "raw": "10.99",
                  "start": 482,
                  "end": 487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 475,
                "end": 487
              }
            ],
            "start": 457,
            "end": 489
          },
          "definite": false,
          "start": 437,
          "end": 489
        }
      ],
      "declare": false,
      "start": 433,
      "end": 490
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
            "name": "b8",
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
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 505
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 505
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cover",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 513
                      },
                      "typeArguments": null,
                      "start": 508,
                      "end": 513
                    },
                    "start": 508,
                    "end": 515
                  }
                ],
                "start": 500,
                "end": 515
              },
              "start": 498,
              "end": 515
            },
            "start": 496,
            "end": 515
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
                  "name": "couleur",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 527
                },
                "value": {
                  "type": "Literal",
                  "value": "non",
                  "raw": "\"non\"",
                  "start": 530,
                  "end": 535
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 520,
                "end": 535
              }
            ],
            "start": 518,
            "end": 537
          },
          "definite": false,
          "start": 496,
          "end": 537
        }
      ],
      "declare": false,
      "start": 492,
      "end": 538
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
            "name": "b9",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 552
                    },
                    "typeArguments": null,
                    "start": 548,
                    "end": 552
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Book",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 559
                      },
                      "typeArguments": null,
                      "start": 555,
                      "end": 559
                    },
                    "start": 555,
                    "end": 561
                  }
                ],
                "start": 548,
                "end": 561
              },
              "start": 546,
              "end": 561
            },
            "start": 544,
            "end": 561
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
                  "name": "forewarned",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 576
                },
                "value": {
                  "type": "Literal",
                  "value": "still no",
                  "raw": "\"still no\"",
                  "start": 578,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 566,
                "end": 588
              }
            ],
            "start": 564,
            "end": 590
          },
          "definite": false,
          "start": 544,
          "end": 590
        }
      ],
      "declare": false,
      "start": 540,
      "end": 591
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Indexed",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 610
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  },
                  "start": 619,
                  "end": 627
                },
                "start": 618,
                "end": 627
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cover",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 635
                },
                "typeArguments": null,
                "start": 630,
                "end": 635
              },
              "start": 628,
              "end": 635
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 617,
            "end": 636
          }
        ],
        "start": 611,
        "end": 638
      },
      "declare": false,
      "start": 593,
      "end": 638
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
            "name": "b10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Indexed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 656
                },
                "typeArguments": null,
                "start": 649,
                "end": 656
              },
              "start": 647,
              "end": 656
            },
            "start": 644,
            "end": 656
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 661,
                  "end": 662
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 664,
                  "end": 667
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 661,
                "end": 667
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 669,
                  "end": 672
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 674,
                  "end": 677
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 669,
                "end": 677
              }
            ],
            "start": 659,
            "end": 679
          },
          "definite": false,
          "start": 644,
          "end": 679
        }
      ],
      "declare": false,
      "start": 640,
      "end": 680
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
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Indexed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 704
                },
                "typeArguments": null,
                "start": 697,
                "end": 704
              },
              "start": 695,
              "end": 704
            },
            "start": 692,
            "end": 704
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 709,
                  "end": 710
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "colour",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 720
                      },
                      "value": {
                        "type": "Literal",
                        "value": "blue",
                        "raw": "\"blue\"",
                        "start": 722,
                        "end": 728
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 714,
                      "end": 728
                    }
                  ],
                  "start": 712,
                  "end": 730
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 709,
                "end": 730
              }
            ],
            "start": 707,
            "end": 732
          },
          "definite": false,
          "start": 692,
          "end": 732
        }
      ],
      "declare": false,
      "start": 688,
      "end": 733
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 816
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
              "start": 817,
              "end": 818
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 831
              },
              "typeArguments": null,
              "start": 827,
              "end": 831
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 817,
            "end": 831
          }
        ],
        "start": 816,
        "end": 832
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj1",
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
                        "start": 903,
                        "end": 904
                      },
                      "typeArguments": null,
                      "start": 903,
                      "end": 904
                    },
                    "start": 901,
                    "end": 904
                  },
                  "start": 897,
                  "end": 904
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 909,
                        "end": 913
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 915,
                        "end": 921
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 909,
                      "end": 921
                    }
                  ],
                  "start": 907,
                  "end": 923
                },
                "definite": false,
                "start": 897,
                "end": 923
              }
            ],
            "declare": false,
            "start": 891,
            "end": 924
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
                  "name": "obj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1010,
                            "end": 1011
                          },
                          "typeArguments": null,
                          "start": 1010,
                          "end": 1011
                        },
                        {
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
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1016,
                                "end": 1020
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1022,
                                  "end": 1029
                                },
                                "start": 1020,
                                "end": 1029
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1016,
                              "end": 1029
                            }
                          ],
                          "start": 1014,
                          "end": 1031
                        }
                      ],
                      "start": 1010,
                      "end": 1031
                    },
                    "start": 1008,
                    "end": 1031
                  },
                  "start": 1004,
                  "end": 1031
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1036,
                        "end": 1040
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 1042,
                        "end": 1048
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1036,
                      "end": 1048
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1054
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1056,
                        "end": 1060
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1050,
                      "end": 1060
                    }
                  ],
                  "start": 1034,
                  "end": 1062
                },
                "definite": false,
                "start": 1004,
                "end": 1062
              }
            ],
            "declare": false,
            "start": 998,
            "end": 1063
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
                  "name": "obj3",
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "typeArguments": null,
                          "start": 1146,
                          "end": 1147
                        },
                        {
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
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1152,
                                "end": 1156
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1158,
                                  "end": 1165
                                },
                                "start": 1156,
                                "end": 1165
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1152,
                              "end": 1165
                            }
                          ],
                          "start": 1150,
                          "end": 1167
                        }
                      ],
                      "start": 1146,
                      "end": 1167
                    },
                    "start": 1144,
                    "end": 1167
                  },
                  "start": 1140,
                  "end": 1167
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1172,
                        "end": 1176
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 1178,
                        "end": 1184
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1172,
                      "end": 1184
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1190
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1192,
                        "end": 1196
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1186,
                      "end": 1196
                    }
                  ],
                  "start": 1170,
                  "end": 1198
                },
                "definite": false,
                "start": 1140,
                "end": 1198
              }
            ],
            "declare": false,
            "start": 1134,
            "end": 1199
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
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1283
                              },
                              "typeArguments": null,
                              "start": 1282,
                              "end": 1283
                            },
                            {
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1288,
                                    "end": 1292
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1294,
                                      "end": 1301
                                    },
                                    "start": 1292,
                                    "end": 1301
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1288,
                                  "end": 1301
                                }
                              ],
                              "start": 1286,
                              "end": 1303
                            }
                          ],
                          "start": 1282,
                          "end": 1303
                        },
                        {
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
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1308,
                                "end": 1312
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1314,
                                  "end": 1320
                                },
                                "start": 1312,
                                "end": 1320
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1308,
                              "end": 1320
                            }
                          ],
                          "start": 1306,
                          "end": 1322
                        }
                      ],
                      "start": 1282,
                      "end": 1322
                    },
                    "start": 1280,
                    "end": 1322
                  },
                  "start": 1276,
                  "end": 1322
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1327,
                        "end": 1331
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 1333,
                        "end": 1339
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1327,
                      "end": 1339
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1341,
                        "end": 1345
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1347,
                        "end": 1351
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1341,
                      "end": 1351
                    }
                  ],
                  "start": 1325,
                  "end": 1353
                },
                "definite": false,
                "start": 1276,
                "end": 1353
              }
            ],
            "declare": false,
            "start": 1270,
            "end": 1354
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
                  "name": "obj5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1438,
                          "end": 1444
                        },
                        {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1449,
                                "end": 1450
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1452,
                                  "end": 1458
                                },
                                "start": 1450,
                                "end": 1458
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1449,
                              "end": 1458
                            }
                          ],
                          "start": 1447,
                          "end": 1460
                        }
                      ],
                      "start": 1438,
                      "end": 1460
                    },
                    "start": 1436,
                    "end": 1460
                  },
                  "start": 1432,
                  "end": 1460
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1465,
                        "end": 1466
                      },
                      "value": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "'abc'",
                        "start": 1468,
                        "end": 1473
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1465,
                      "end": 1473
                    }
                  ],
                  "start": 1463,
                  "end": 1475
                },
                "definite": false,
                "start": 1432,
                "end": 1475
              }
            ],
            "declare": false,
            "start": 1426,
            "end": 1475
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
                  "name": "obj6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1548,
                          "end": 1554
                        },
                        {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1559,
                                "end": 1560
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1562,
                                  "end": 1568
                                },
                                "start": 1560,
                                "end": 1568
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1559,
                              "end": 1568
                            }
                          ],
                          "start": 1557,
                          "end": 1570
                        }
                      ],
                      "start": 1548,
                      "end": 1570
                    },
                    "start": 1546,
                    "end": 1570
                  },
                  "start": 1542,
                  "end": 1570
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1575,
                        "end": 1576
                      },
                      "value": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "'abc'",
                        "start": 1578,
                        "end": 1583
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1575,
                      "end": 1583
                    }
                  ],
                  "start": 1573,
                  "end": 1585
                },
                "definite": false,
                "start": 1542,
                "end": 1585
              }
            ],
            "declare": false,
            "start": 1536,
            "end": 1585
          }
        ],
        "start": 835,
        "end": 1587
      },
      "expression": false,
      "start": 803,
      "end": 1587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1587
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "foreword",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Cover",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "forword",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"oops\"",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "foreward",
    "start": 146,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "String",
    "value": "\"nope\"",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "foreword",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "forwards",
    "start": 219,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"back\"",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Cover",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foreword",
    "start": 266,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "colour",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "String",
    "value": "\"blue\"",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Cover",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "foreward",
    "start": 326,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 336,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "String",
    "value": "\"blue\"",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Cover",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "foreword",
    "start": 385,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"blue\"",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "price",
    "start": 416,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Numeric",
    "value": "10.99",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 437,
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
    "value": "Book",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "foreword",
    "start": 459,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "price",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Numeric",
    "value": "10.99",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 496,
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
    "value": "Cover",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Cover",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "couleur",
    "start": 520,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"non\"",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 540,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "Book",
    "start": 555,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "forewarned",
    "start": 566,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "String",
    "value": "\"still no\"",
    "start": 578,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "interface",
    "start": 593,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "Indexed",
    "start": 603,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Cover",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 640,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "Indexed",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 688,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "Indexed",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "colour",
    "start": 714,
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
    "value": "\"blue\"",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 803,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 819,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 909,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 998,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1016,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1022,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1056,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1134,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 1140,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1152,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1158,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1192,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1270,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 1276,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1294,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1308,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1327,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 1333,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1347,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1426,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1432,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1468,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1536,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1542,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1548,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1578,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  }
]
```

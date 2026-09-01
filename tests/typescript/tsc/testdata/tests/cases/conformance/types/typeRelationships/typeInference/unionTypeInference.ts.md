__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 17,
                "end": 24
              },
              "start": 15,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "start": 40,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 49
        }
      ],
      "declare": true,
      "start": 26,
      "end": 50
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
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  }
                ],
                "start": 69,
                "end": 84
              },
              "start": 67,
              "end": 84
            },
            "start": 65,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 65,
          "end": 84
        }
      ],
      "declare": true,
      "start": 51,
      "end": 85
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 106
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
        "start": 106,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "typeArguments": null,
                  "start": 128,
                  "end": 129
                }
              ],
              "start": 119,
              "end": 129
            },
            "start": 117,
            "end": 129
          },
          "start": 116,
          "end": 129
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
            "start": 132,
            "end": 133
          },
          "typeArguments": null,
          "start": 132,
          "end": 133
        },
        "start": 130,
        "end": 133
      },
      "body": null,
      "expression": false,
      "start": 87,
      "end": 134
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 144
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 150,
                "end": 151
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 153,
                "end": 154
              }
            ],
            "optional": false,
            "start": 147,
            "end": 155
          },
          "definite": false,
          "start": 142,
          "end": 155
        }
      ],
      "declare": false,
      "start": 136,
      "end": 156
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 181,
                "end": 182
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 184,
                "end": 191
              }
            ],
            "optional": false,
            "start": 178,
            "end": 192
          },
          "definite": false,
          "start": 173,
          "end": 192
        }
      ],
      "declare": false,
      "start": 167,
      "end": 193
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 213
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 214,
                "end": 215
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 219
              }
            ],
            "optional": false,
            "start": 211,
            "end": 220
          },
          "definite": false,
          "start": 206,
          "end": 220
        }
      ],
      "declare": false,
      "start": 200,
      "end": 221
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 241
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 256
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 258,
                "end": 263
              }
            ],
            "optional": false,
            "start": 244,
            "end": 264
          },
          "definite": false,
          "start": 239,
          "end": 264
        }
      ],
      "declare": false,
      "start": 233,
      "end": 265
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 294,
                "end": 299
              },
              {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 301,
                "end": 306
              }
            ],
            "optional": false,
            "start": 291,
            "end": 307
          },
          "definite": false,
          "start": 286,
          "end": 307
        }
      ],
      "declare": false,
      "start": 280,
      "end": 308
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 333,
                "end": 337
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 339,
                "end": 344
              }
            ],
            "optional": false,
            "start": 330,
            "end": 345
          },
          "definite": false,
          "start": 325,
          "end": 345
        }
      ],
      "declare": false,
      "start": 319,
      "end": 346
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 367
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 372
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 373,
                "end": 380
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 382,
                "end": 383
              }
            ],
            "optional": false,
            "start": 370,
            "end": 384
          },
          "definite": false,
          "start": 365,
          "end": 384
        }
      ],
      "declare": false,
      "start": 359,
      "end": 385
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 416
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
              "start": 417,
              "end": 418
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 417,
            "end": 418
          }
        ],
        "start": 416,
        "end": 419
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 428,
                  "end": 434
                },
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
              "start": 427,
              "end": 438
            },
            "start": 425,
            "end": 438
          },
          "start": 420,
          "end": 438
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
      "body": null,
      "expression": false,
      "start": 397,
      "end": 443
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
            "typeAnnotation": null,
            "start": 449,
            "end": 451
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 458,
                    "end": 466
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 468,
                    "end": 472
                  }
                ],
                "start": 457,
                "end": 473
              }
            ],
            "optional": false,
            "start": 454,
            "end": 474
          },
          "definite": false,
          "start": 449,
          "end": 474
        }
      ],
      "declare": false,
      "start": 445,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 508
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
              "start": 509,
              "end": 510
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 509,
            "end": 510
          }
        ],
        "start": 508,
        "end": 511
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 515,
                  "end": 521
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 524,
                    "end": 529
                  },
                  "start": 524,
                  "end": 529
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 533
                  },
                  "typeArguments": null,
                  "start": 532,
                  "end": 533
                }
              ],
              "start": 515,
              "end": 533
            },
            "start": 513,
            "end": 533
          },
          "start": 512,
          "end": 533
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
            "start": 536,
            "end": 537
          },
          "typeArguments": null,
          "start": 536,
          "end": 537
        },
        "start": 534,
        "end": 537
      },
      "body": null,
      "expression": false,
      "start": 489,
      "end": 538
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 554,
                "end": 555
              }
            ],
            "optional": false,
            "start": 551,
            "end": 556
          },
          "definite": false,
          "start": 546,
          "end": 556
        }
      ],
      "declare": false,
      "start": 540,
      "end": 557
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 572
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 577
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              }
            ],
            "optional": false,
            "start": 575,
            "end": 581
          },
          "definite": false,
          "start": 570,
          "end": 581
        }
      ],
      "declare": false,
      "start": 564,
      "end": 582
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 602
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 607
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 608,
                "end": 612
              }
            ],
            "optional": false,
            "start": 605,
            "end": 613
          },
          "definite": false,
          "start": 600,
          "end": 613
        }
      ],
      "declare": false,
      "start": 594,
      "end": 614
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 632
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 637
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 639
              }
            ],
            "optional": false,
            "start": 635,
            "end": 640
          },
          "definite": false,
          "start": 630,
          "end": 640
        }
      ],
      "declare": false,
      "start": 624,
      "end": 641
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 659
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 664
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 665,
                "end": 670
              }
            ],
            "optional": false,
            "start": 662,
            "end": 671
          },
          "definite": false,
          "start": 657,
          "end": 671
        }
      ],
      "declare": false,
      "start": 651,
      "end": 672
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 703
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
              "start": 704,
              "end": 705
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 704,
            "end": 705
          }
        ],
        "start": 703,
        "end": 706
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 710,
                  "end": 716
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 720
                  },
                  "typeArguments": null,
                  "start": 719,
                  "end": 720
                }
              ],
              "start": 710,
              "end": 720
            },
            "start": 708,
            "end": 720
          },
          "start": 707,
          "end": 720
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
            "start": 723,
            "end": 724
          },
          "typeArguments": null,
          "start": 723,
          "end": 724
        },
        "start": 721,
        "end": 724
      },
      "body": null,
      "expression": false,
      "start": 684,
      "end": 725
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 735
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 740
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 741,
                "end": 746
              }
            ],
            "optional": false,
            "start": 738,
            "end": 747
          },
          "definite": false,
          "start": 733,
          "end": 747
        }
      ],
      "declare": false,
      "start": 727,
      "end": 748
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 762
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 764
              }
            ],
            "optional": false,
            "start": 760,
            "end": 765
          },
          "definite": false,
          "start": 755,
          "end": 765
        }
      ],
      "declare": false,
      "start": 749,
      "end": 766
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 775
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 780
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 781,
                "end": 783
              }
            ],
            "optional": false,
            "start": 778,
            "end": 784
          },
          "definite": false,
          "start": 773,
          "end": 784
        }
      ],
      "declare": false,
      "start": 767,
      "end": 785
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 817
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
                "start": 818,
                "end": 819
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 818,
              "end": 819
            }
          ],
          "start": 817,
          "end": 820
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
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 831
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 832,
                      "end": 833
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 832,
                    "end": 833
                  }
                ],
                "start": 831,
                "end": 834
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "start": 842,
                                "end": 843
                              },
                              "typeArguments": null,
                              "start": 842,
                              "end": 843
                            },
                            "start": 840,
                            "end": 843
                          },
                          "start": 839,
                          "end": 843
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 848,
                                "end": 849
                              },
                              "typeArguments": null,
                              "start": 848,
                              "end": 849
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 852,
                                "end": 855
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 856,
                                      "end": 857
                                    },
                                    "typeArguments": null,
                                    "start": 856,
                                    "end": 857
                                  }
                                ],
                                "start": 855,
                                "end": 858
                              },
                              "start": 852,
                              "end": 858
                            }
                          ],
                          "start": 848,
                          "end": 858
                        },
                        "start": 845,
                        "end": 858
                      },
                      "start": 838,
                      "end": 858
                    },
                    "start": 836,
                    "end": 858
                  },
                  "start": 835,
                  "end": 858
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
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
                        "start": 863,
                        "end": 864
                      },
                      "typeArguments": null,
                      "start": 863,
                      "end": 864
                    },
                    "start": 861,
                    "end": 864
                  },
                  "start": 860,
                  "end": 864
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 870
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 872
                        },
                        "typeArguments": null,
                        "start": 871,
                        "end": 872
                      }
                    ],
                    "start": 870,
                    "end": 873
                  },
                  "start": 867,
                  "end": 873
                },
                "start": 865,
                "end": 873
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 827,
              "end": 874
            }
          ],
          "start": 821,
          "end": 876
        },
        "declare": false,
        "start": 804,
        "end": 876
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 797,
      "end": 876
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 897
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
                "start": 898,
                "end": 899
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 898,
              "end": 899
            }
          ],
          "start": 897,
          "end": 900
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
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 911
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 912,
                      "end": 913
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 912,
                    "end": 913
                  }
                ],
                "start": 911,
                "end": 914
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "start": 922,
                                "end": 923
                              },
                              "typeArguments": null,
                              "start": 922,
                              "end": 923
                            },
                            "start": 920,
                            "end": 923
                          },
                          "start": 919,
                          "end": 923
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
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 928,
                                "end": 929
                              },
                              "typeArguments": null,
                              "start": 928,
                              "end": 929
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 932,
                                "end": 935
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "S",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 936,
                                      "end": 937
                                    },
                                    "typeArguments": null,
                                    "start": 936,
                                    "end": 937
                                  }
                                ],
                                "start": 935,
                                "end": 938
                              },
                              "start": 932,
                              "end": 938
                            }
                          ],
                          "start": 928,
                          "end": 938
                        },
                        "start": 925,
                        "end": 938
                      },
                      "start": 918,
                      "end": 938
                    },
                    "start": 916,
                    "end": 938
                  },
                  "start": 915,
                  "end": 938
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 943,
                        "end": 944
                      },
                      "typeArguments": null,
                      "start": 943,
                      "end": 944
                    },
                    "start": 941,
                    "end": 944
                  },
                  "start": 940,
                  "end": 944
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 950
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 951,
                          "end": 952
                        },
                        "typeArguments": null,
                        "start": 951,
                        "end": 952
                      }
                    ],
                    "start": 950,
                    "end": 953
                  },
                  "start": 947,
                  "end": 953
                },
                "start": 945,
                "end": 953
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 907,
              "end": 954
            }
          ],
          "start": 901,
          "end": 956
        },
        "declare": false,
        "start": 884,
        "end": 956
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 877,
      "end": 956
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "qux",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 970
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                "start": 975,
                "end": 978
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSVoidKeyword",
                    "start": 979,
                    "end": 983
                  }
                ],
                "start": 978,
                "end": 984
              },
              "start": 975,
              "end": 984
            },
            "start": 973,
            "end": 984
          },
          "start": 971,
          "end": 984
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 993
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSVoidKeyword",
                    "start": 994,
                    "end": 998
                  }
                ],
                "start": 993,
                "end": 999
              },
              "start": 990,
              "end": 999
            },
            "start": 988,
            "end": 999
          },
          "start": 986,
          "end": 999
        }
      ],
      "returnType": null,
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
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1009
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1014
              },
              "start": 1007,
              "end": 1014
            },
            "directive": null,
            "start": 1007,
            "end": 1015
          }
        ],
        "start": 1001,
        "end": 1017
      },
      "expression": false,
      "start": 958,
      "end": 1017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1062
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
              "start": 1063,
              "end": 1064
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1063,
            "end": 1064
          }
        ],
        "start": 1062,
        "end": 1065
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
                    "start": 1069,
                    "end": 1070
                  },
                  "typeArguments": null,
                  "start": 1069,
                  "end": 1070
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1073,
                    "end": 1080
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
                          "start": 1081,
                          "end": 1082
                        },
                        "typeArguments": null,
                        "start": 1081,
                        "end": 1082
                      }
                    ],
                    "start": 1080,
                    "end": 1083
                  },
                  "start": 1073,
                  "end": 1083
                }
              ],
              "start": 1069,
              "end": 1083
            },
            "start": 1067,
            "end": 1083
          },
          "start": 1066,
          "end": 1083
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1086,
          "end": 1090
        },
        "start": 1084,
        "end": 1090
      },
      "body": null,
      "expression": false,
      "start": 1042,
      "end": 1091
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
            "name": "x",
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
                      "value": false,
                      "raw": "false",
                      "start": 1107,
                      "end": 1112
                    },
                    "start": 1107,
                    "end": 1112
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1122
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1123,
                            "end": 1127
                          },
                          "start": 1123,
                          "end": 1127
                        }
                      ],
                      "start": 1122,
                      "end": 1128
                    },
                    "start": 1115,
                    "end": 1128
                  }
                ],
                "start": 1107,
                "end": 1128
              },
              "start": 1105,
              "end": 1128
            },
            "start": 1104,
            "end": 1128
          },
          "init": null,
          "definite": false,
          "start": 1104,
          "end": 1128
        }
      ],
      "declare": true,
      "start": 1092,
      "end": 1129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1130,
          "end": 1133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1134,
            "end": 1135
          }
        ],
        "optional": false,
        "start": 1130,
        "end": 1136
      },
      "directive": null,
      "start": 1130,
      "end": 1137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1159
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
              "start": 1160,
              "end": 1161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1160,
            "end": 1161
          }
        ],
        "start": 1159,
        "end": 1162
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
                "start": 1166,
                "end": 1167
              },
              "typeArguments": null,
              "start": 1166,
              "end": 1167
            },
            "start": 1164,
            "end": 1167
          },
          "start": 1163,
          "end": 1167
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1172,
                  "end": 1178
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1181,
                    "end": 1182
                  },
                  "typeArguments": null,
                  "start": 1181,
                  "end": 1182
                }
              ],
              "start": 1172,
              "end": 1182
            },
            "start": 1170,
            "end": 1182
          },
          "start": 1169,
          "end": 1182
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
            "start": 1185,
            "end": 1186
          },
          "typeArguments": null,
          "start": 1185,
          "end": 1186
        },
        "start": 1183,
        "end": 1186
      },
      "body": null,
      "expression": false,
      "start": 1139,
      "end": 1187
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1194,
            "end": 1195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1201
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1202,
                "end": 1203
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1205,
                "end": 1206
              }
            ],
            "optional": false,
            "start": 1198,
            "end": 1207
          },
          "definite": false,
          "start": 1194,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1188,
      "end": 1208
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
            "name": "containsPromises",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1263,
                  "end": 1269
                },
                "start": 1256,
                "end": 1269
              },
              "start": 1254,
              "end": 1269
            },
            "start": 1238,
            "end": 1269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1278
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1272,
            "end": 1280
          },
          "definite": false,
          "start": 1238,
          "end": 1280
        }
      ],
      "declare": false,
      "start": 1232,
      "end": 1281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepPromised",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1300
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
              "start": 1301,
              "end": 1302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1301,
            "end": 1302
          }
        ],
        "start": 1300,
        "end": 1303
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": true,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "containsPromises",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1329
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1333,
                      "end": 1337
                    },
                    "start": 1333,
                    "end": 1337
                  },
                  "start": 1331,
                  "end": 1337
                },
                "accessibility": null,
                "static": false,
                "start": 1312,
                "end": 1337
              }
            ],
            "start": 1310,
            "end": 1339
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1353
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
                  "start": 1363,
                  "end": 1364
                },
                "typeArguments": null,
                "start": 1363,
                "end": 1364
              },
              "start": 1357,
              "end": 1364
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                      "start": 1367,
                      "end": 1368
                    },
                    "typeArguments": null,
                    "start": 1367,
                    "end": 1368
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1369,
                      "end": 1373
                    },
                    "typeArguments": null,
                    "start": 1369,
                    "end": 1373
                  },
                  "start": 1367,
                  "end": 1374
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeepPromised",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1389
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
                            "start": 1390,
                            "end": 1391
                          },
                          "typeArguments": null,
                          "start": 1390,
                          "end": 1391
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1392,
                            "end": 1396
                          },
                          "typeArguments": null,
                          "start": 1392,
                          "end": 1396
                        },
                        "start": 1390,
                        "end": 1397
                      }
                    ],
                    "start": 1389,
                    "end": 1398
                  },
                  "start": 1377,
                  "end": 1398
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1401,
                    "end": 1408
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DeepPromised",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1409,
                          "end": 1421
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
                                  "start": 1422,
                                  "end": 1423
                                },
                                "typeArguments": null,
                                "start": 1422,
                                "end": 1423
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TKey",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1424,
                                  "end": 1428
                                },
                                "typeArguments": null,
                                "start": 1424,
                                "end": 1428
                              },
                              "start": 1422,
                              "end": 1429
                            }
                          ],
                          "start": 1421,
                          "end": 1430
                        },
                        "start": 1409,
                        "end": 1430
                      }
                    ],
                    "start": 1408,
                    "end": 1431
                  },
                  "start": 1401,
                  "end": 1431
                }
              ],
              "start": 1367,
              "end": 1431
            },
            "optional": false,
            "readonly": null,
            "start": 1346,
            "end": 1433
          }
        ],
        "start": 1310,
        "end": 1433
      },
      "declare": false,
      "start": 1283,
      "end": 1434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1454
      },
      "generator": false,
      "async": true,
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
              "start": 1455,
              "end": 1456
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1455,
            "end": 1456
          }
        ],
        "start": 1454,
        "end": 1457
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deepPromised",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepPromised",
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1484
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
                      "start": 1485,
                      "end": 1486
                    },
                    "typeArguments": null,
                    "start": 1485,
                    "end": 1486
                  }
                ],
                "start": 1484,
                "end": 1487
              },
              "start": 1472,
              "end": 1487
            },
            "start": 1470,
            "end": 1487
          },
          "start": 1458,
          "end": 1487
        }
      ],
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
                  "name": "deepPromisedWithIndexer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DeepPromised",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1526,
                        "end": 1538
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1548,
                                        "end": 1554
                                      },
                                      "start": 1546,
                                      "end": 1554
                                    },
                                    "start": 1542,
                                    "end": 1554
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeLiteral",
                                        "members": [],
                                        "start": 1557,
                                        "end": 1559
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 1562,
                                        "end": 1566
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1569,
                                        "end": 1578
                                      }
                                    ],
                                    "start": 1557,
                                    "end": 1578
                                  },
                                  "start": 1555,
                                  "end": 1578
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 1541,
                                "end": 1578
                              }
                            ],
                            "start": 1539,
                            "end": 1580
                          }
                        ],
                        "start": 1538,
                        "end": 1581
                      },
                      "start": 1526,
                      "end": 1581
                    },
                    "start": 1524,
                    "end": 1581
                  },
                  "start": 1501,
                  "end": 1581
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deepPromised",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1584,
                  "end": 1596
                },
                "definite": false,
                "start": 1501,
                "end": 1596
              }
            ],
            "declare": false,
            "start": 1495,
            "end": 1597
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1613,
                    "end": 1618
                  },
                  "init": null,
                  "definite": false,
                  "start": 1613,
                  "end": 1618
                }
              ],
              "declare": false,
              "start": 1607,
              "end": 1618
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1622,
                  "end": 1628
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1629,
                  "end": 1635
                },
                "optional": false,
                "computed": false,
                "start": 1622,
                "end": 1635
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deepPromisedWithIndexer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1636,
                  "end": 1659
                }
              ],
              "optional": false,
              "start": 1622,
              "end": 1660
            },
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
                        "name": "awaitedValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1678,
                        "end": 1690
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1699,
                          "end": 1704
                        },
                        "start": 1693,
                        "end": 1704
                      },
                      "definite": false,
                      "start": 1678,
                      "end": 1704
                    }
                  ],
                  "declare": false,
                  "start": 1672,
                  "end": 1705
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "awaitedValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1718,
                    "end": 1730
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fun",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1750,
                          "end": 1753
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "awaitedValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1754,
                            "end": 1766
                          }
                        ],
                        "optional": false,
                        "start": 1750,
                        "end": 1767
                      },
                      "start": 1744,
                      "end": 1767
                    },
                    "directive": null,
                    "start": 1744,
                    "end": 1768
                  },
                  "alternate": null,
                  "start": 1714,
                  "end": 1768
                }
              ],
              "start": 1662,
              "end": 1774
            },
            "start": 1602,
            "end": 1774
          }
        ],
        "start": 1489,
        "end": 1776
      },
      "expression": false,
      "start": 1436,
      "end": 1776
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Deep",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1809
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
              "start": 1810,
              "end": 1811
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1810,
            "end": 1811
          }
        ],
        "start": 1809,
        "end": 1812
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1818,
          "end": 1819
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
              "start": 1829,
              "end": 1830
            },
            "typeArguments": null,
            "start": 1829,
            "end": 1830
          },
          "start": 1823,
          "end": 1830
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
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
                  "start": 1833,
                  "end": 1834
                },
                "typeArguments": null,
                "start": 1833,
                "end": 1834
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1835,
                  "end": 1836
                },
                "typeArguments": null,
                "start": 1835,
                "end": 1836
              },
              "start": 1833,
              "end": 1837
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null,
                "start": 1840,
                "end": 1844
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
                        "start": 1845,
                        "end": 1846
                      },
                      "typeArguments": null,
                      "start": 1845,
                      "end": 1846
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1847,
                        "end": 1848
                      },
                      "typeArguments": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "start": 1845,
                    "end": 1849
                  }
                ],
                "start": 1844,
                "end": 1850
              },
              "start": 1840,
              "end": 1850
            }
          ],
          "start": 1833,
          "end": 1850
        },
        "optional": false,
        "readonly": null,
        "start": 1815,
        "end": 1852
      },
      "declare": false,
      "start": 1800,
      "end": 1853
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1872,
        "end": 1875
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
              "start": 1876,
              "end": 1877
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1876,
            "end": 1877
          }
        ],
        "start": 1875,
        "end": 1878
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1887
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
                      "start": 1888,
                      "end": 1889
                    },
                    "typeArguments": null,
                    "start": 1888,
                    "end": 1889
                  }
                ],
                "start": 1887,
                "end": 1890
              },
              "start": 1883,
              "end": 1890
            },
            "start": 1881,
            "end": 1890
          },
          "start": 1879,
          "end": 1890
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
            "start": 1893,
            "end": 1894
          },
          "typeArguments": null,
          "start": 1893,
          "end": 1894
        },
        "start": 1891,
        "end": 1894
      },
      "body": null,
      "expression": false,
      "start": 1855,
      "end": 1895
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1914,
                      "end": 1915
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1917,
                            "end": 1923
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1926,
                            "end": 1935
                          }
                        ],
                        "start": 1917,
                        "end": 1935
                      },
                      "start": 1915,
                      "end": 1935
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1914,
                    "end": 1935
                  }
                ],
                "start": 1912,
                "end": 1937
              },
              "start": 1910,
              "end": 1937
            },
            "start": 1908,
            "end": 1937
          },
          "init": null,
          "definite": false,
          "start": 1908,
          "end": 1937
        }
      ],
      "declare": true,
      "start": 1896,
      "end": 1938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 1940,
          "end": 1943
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 1944,
            "end": 1946
          }
        ],
        "optional": false,
        "start": 1940,
        "end": 1947
      },
      "directive": null,
      "start": 1940,
      "end": 1948
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1948
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 26,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 51,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "f1",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "T",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 167,
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
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "sn",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 301,
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
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 373,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 397,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 405,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
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
    "type": "Keyword",
    "value": "var",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 489,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 497,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 522,
    "end": 523
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "const",
    "start": 540,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 564,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 578,
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
    "value": "const",
    "start": 594,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 651,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 684,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 692,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 701,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 727,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 741,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 749,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 760,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 797,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 804,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 845,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 867,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 877,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 884,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 925,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 932,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 958,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 971,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 979,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1012,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1050,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1092,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1107,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1139,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1147,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1188,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1232,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "containsPromises",
    "start": 1238,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1256,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1263,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1283,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "DeepPromised",
    "start": 1288,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "containsPromises",
    "start": 1313,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1349,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1354,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1369,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "DeepPromised",
    "start": 1377,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1392,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1401,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "DeepPromised",
    "start": 1409,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1436,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1442,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "deepPromised",
    "start": 1458,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "DeepPromised",
    "start": 1472,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1495,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "deepPromisedWithIndexer",
    "start": 1501,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "DeepPromised",
    "start": 1526,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "name",
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
    "value": "string",
    "start": 1548,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1562,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1569,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "deepPromised",
    "start": 1584,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1602,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1607,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1613,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1619,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1622,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1629,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "deepPromisedWithIndexer",
    "start": 1636,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1672,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "awaitedValue",
    "start": 1678,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1693,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1699,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "awaitedValue",
    "start": 1718,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1744,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "awaitedValue",
    "start": 1754,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1800,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 1805,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1820,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1823,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 1840,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1855,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1863,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "dp",
    "start": 1879,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 1883,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1896,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1904,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 1908,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1926,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1940,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 1944,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  }
]
```

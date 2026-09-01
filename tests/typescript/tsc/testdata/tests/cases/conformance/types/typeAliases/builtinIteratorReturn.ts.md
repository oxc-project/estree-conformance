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
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 21,
                  "end": 27
                },
                "start": 21,
                "end": 29
              },
              "start": 19,
              "end": 29
            },
            "start": 14,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 29
        }
      ],
      "declare": true,
      "start": 0,
      "end": 30
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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 53
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  ],
                  "start": 53,
                  "end": 69
                },
                "start": 50,
                "end": 69
              },
              "start": 48,
              "end": 69
            },
            "start": 45,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 69
        }
      ],
      "declare": true,
      "start": 31,
      "end": 70
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
            "name": "set",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 93
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 94,
                      "end": 100
                    }
                  ],
                  "start": 93,
                  "end": 101
                },
                "start": 90,
                "end": 101
              },
              "start": 88,
              "end": 101
            },
            "start": 85,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 101
        }
      ],
      "declare": true,
      "start": 71,
      "end": 102
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
            "name": "i0",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 112
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 120
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 136
                },
                "optional": false,
                "computed": false,
                "start": 121,
                "end": 136
              },
              "optional": false,
              "computed": true,
              "start": 115,
              "end": 137
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 115,
            "end": 139
          },
          "definite": false,
          "start": 110,
          "end": 139
        }
      ],
      "declare": false,
      "start": 104,
      "end": 140
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 157
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 164
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 164
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 152,
            "end": 166
          },
          "definite": false,
          "start": 147,
          "end": 166
        }
      ],
      "declare": false,
      "start": 141,
      "end": 167
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 176
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 189
              },
              "optional": false,
              "computed": false,
              "start": 179,
              "end": 189
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 179,
            "end": 191
          },
          "definite": false,
          "start": 174,
          "end": 191
        }
      ],
      "declare": false,
      "start": 168,
      "end": 192
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
            "name": "i3",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 217
              },
              "optional": false,
              "computed": false,
              "start": 204,
              "end": 217
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 204,
            "end": 219
          },
          "definite": false,
          "start": 199,
          "end": 219
        }
      ],
      "declare": false,
      "start": 193,
      "end": 220
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "init": null,
            "definite": false,
            "start": 232,
            "end": 233
          }
        ],
        "declare": false,
        "start": 226,
        "end": 233
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 242
      },
      "body": {
        "type": "EmptyStatement",
        "start": 243,
        "end": 244
      },
      "start": 221,
      "end": 244
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
            "name": "i4",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 254
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 260
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 267
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 276
                },
                "optional": false,
                "computed": false,
                "start": 261,
                "end": 276
              },
              "optional": false,
              "computed": true,
              "start": 257,
              "end": 277
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 257,
            "end": 279
          },
          "definite": false,
          "start": 252,
          "end": 279
        }
      ],
      "declare": false,
      "start": 246,
      "end": 280
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
            "name": "i5",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 289
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 295
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 302
              },
              "optional": false,
              "computed": false,
              "start": 292,
              "end": 302
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 292,
            "end": 304
          },
          "definite": false,
          "start": 287,
          "end": 304
        }
      ],
      "declare": false,
      "start": 281,
      "end": 305
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
            "name": "i6",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 314
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 320
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 325
              },
              "optional": false,
              "computed": false,
              "start": 317,
              "end": 325
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 317,
            "end": 327
          },
          "definite": false,
          "start": 312,
          "end": 327
        }
      ],
      "declare": false,
      "start": 306,
      "end": 328
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
            "name": "i7",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 337
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 343
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 351
              },
              "optional": false,
              "computed": false,
              "start": 340,
              "end": 351
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 340,
            "end": 353
          },
          "definite": false,
          "start": 335,
          "end": 353
        }
      ],
      "declare": false,
      "start": 329,
      "end": 354
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "init": null,
            "definite": false,
            "start": 366,
            "end": 367
          }
        ],
        "declare": false,
        "start": 360,
        "end": 367
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 374
      },
      "body": {
        "type": "EmptyStatement",
        "start": 375,
        "end": 376
      },
      "start": 355,
      "end": 376
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
            "name": "i8",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 386
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 392
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 399
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 408
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 408
              },
              "optional": false,
              "computed": true,
              "start": 389,
              "end": 409
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 389,
            "end": 411
          },
          "definite": false,
          "start": 384,
          "end": 411
        }
      ],
      "declare": false,
      "start": 378,
      "end": 412
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
            "name": "i9",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 421
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 427
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 424,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 424,
            "end": 436
          },
          "definite": false,
          "start": 419,
          "end": 436
        }
      ],
      "declare": false,
      "start": 413,
      "end": 437
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
            "name": "i10",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 447
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 458
              },
              "optional": false,
              "computed": false,
              "start": 450,
              "end": 458
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 450,
            "end": 460
          },
          "definite": false,
          "start": 444,
          "end": 460
        }
      ],
      "declare": false,
      "start": 438,
      "end": 461
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
            "name": "i11",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 471
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 485
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 485
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 474,
            "end": 487
          },
          "definite": false,
          "start": 468,
          "end": 487
        }
      ],
      "declare": false,
      "start": 462,
      "end": 488
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 501
            },
            "init": null,
            "definite": false,
            "start": 500,
            "end": 501
          }
        ],
        "declare": false,
        "start": 494,
        "end": 501
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 508
      },
      "body": {
        "type": "EmptyStatement",
        "start": 509,
        "end": 510
      },
      "start": 489,
      "end": 510
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
            "name": "i12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 547
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 556,
                      "end": 565
                    }
                  ],
                  "start": 547,
                  "end": 566
                },
                "start": 531,
                "end": 566
              },
              "start": 529,
              "end": 566
            },
            "start": 526,
            "end": 566
          },
          "init": null,
          "definite": false,
          "start": 526,
          "end": 566
        }
      ],
      "declare": true,
      "start": 512,
      "end": 567
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
            "name": "i13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 603
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 604,
                      "end": 610
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 612,
                      "end": 615
                    }
                  ],
                  "start": 603,
                  "end": 616
                },
                "start": 587,
                "end": 616
              },
              "start": 585,
              "end": 616
            },
            "start": 582,
            "end": 616
          },
          "init": null,
          "definite": false,
          "start": 582,
          "end": 616
        }
      ],
      "declare": true,
      "start": 568,
      "end": 617
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
            "name": "i14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 653
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 662,
                      "end": 669
                    }
                  ],
                  "start": 653,
                  "end": 670
                },
                "start": 637,
                "end": 670
              },
              "start": 635,
              "end": 670
            },
            "start": 632,
            "end": 670
          },
          "init": null,
          "definite": false,
          "start": 632,
          "end": 670
        }
      ],
      "declare": true,
      "start": 618,
      "end": 671
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
            "name": "i15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 699
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 700,
                      "end": 706
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 708,
                      "end": 717
                    }
                  ],
                  "start": 699,
                  "end": 718
                },
                "start": 691,
                "end": 718
              },
              "start": 689,
              "end": 718
            },
            "start": 686,
            "end": 718
          },
          "init": null,
          "definite": false,
          "start": 686,
          "end": 718
        }
      ],
      "declare": true,
      "start": 672,
      "end": 719
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
            "name": "i16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 747
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 748,
                      "end": 754
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 756,
                      "end": 759
                    }
                  ],
                  "start": 747,
                  "end": 760
                },
                "start": 739,
                "end": 760
              },
              "start": 737,
              "end": 760
            },
            "start": 734,
            "end": 760
          },
          "init": null,
          "definite": false,
          "start": 734,
          "end": 760
        }
      ],
      "declare": true,
      "start": 720,
      "end": 761
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
            "name": "i17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 789
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 790,
                      "end": 796
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 798,
                      "end": 805
                    }
                  ],
                  "start": 789,
                  "end": 806
                },
                "start": 781,
                "end": 806
              },
              "start": 779,
              "end": 806
            },
            "start": 776,
            "end": 806
          },
          "init": null,
          "definite": false,
          "start": 776,
          "end": 806
        }
      ],
      "declare": true,
      "start": 762,
      "end": 807
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 807
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
    "value": "array",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 31,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 71,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 90,
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
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "i0",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 210,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 234,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "i5",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "i6",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "i7",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 360,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 368,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "i8",
    "start": 384,
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
    "value": "set",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 400,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 413,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "i9",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "i10",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 478,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 502,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "declare",
    "start": 512,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "i12",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 531,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 556,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 568,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 576,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "i13",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 587,
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
    "value": "number",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 618,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 626,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "i14",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 637,
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
    "value": "number",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "declare",
    "start": 672,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "i15",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 691,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 700,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 708,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 720,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 728,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "i16",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 739,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 748,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 762,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 770,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "i17",
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
    "value": "Iterable",
    "start": 781,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 798,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  }
]
```

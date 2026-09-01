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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 33
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
                      "start": 44,
                      "end": 45
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 44,
                    "end": 45
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 48
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 47,
                    "end": 48
                  }
                ],
                "start": 34,
                "end": 54
              },
              "const": false,
              "declare": false,
              "start": 25,
              "end": 54
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 54
          }
        ],
        "start": 12,
        "end": 56
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 90
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
                      "start": 101,
                      "end": 102
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 101,
                    "end": 102
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 104,
                    "end": 105
                  }
                ],
                "start": 91,
                "end": 111
              },
              "const": false,
              "declare": false,
              "start": 82,
              "end": 111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 75,
            "end": 111
          }
        ],
        "start": 69,
        "end": 113
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 57,
      "end": 113
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 125
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 147
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
                      "start": 158,
                      "end": 159
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 162,
                        "end": 163
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 167,
                        "end": 168
                      },
                      "start": 162,
                      "end": 168
                    },
                    "computed": false,
                    "start": 158,
                    "end": 168
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 182,
                        "end": 183
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 187,
                        "end": 188
                      },
                      "start": 182,
                      "end": 188
                    },
                    "computed": false,
                    "start": 178,
                    "end": 188
                  }
                ],
                "start": 148,
                "end": 195
              },
              "const": false,
              "declare": false,
              "start": 139,
              "end": 195
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 132,
            "end": 195
          }
        ],
        "start": 126,
        "end": 197
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 114,
      "end": 197
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ka",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 210
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 232
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
                      "start": 243,
                      "end": 244
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 247,
                        "end": 248
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 252,
                        "end": 254
                      },
                      "start": 247,
                      "end": 254
                    },
                    "computed": false,
                    "start": 243,
                    "end": 254
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 265
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 268,
                        "end": 269
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 273,
                        "end": 275
                      },
                      "start": 268,
                      "end": 275
                    },
                    "computed": false,
                    "start": 264,
                    "end": 275
                  }
                ],
                "start": 233,
                "end": 282
              },
              "const": false,
              "declare": false,
              "start": 224,
              "end": 282
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 282
          }
        ],
        "start": 211,
        "end": 284
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 198,
      "end": 284
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
            "name": "e0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 300
                      },
                      "start": 295,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 295,
                    "end": 300
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 303,
                    "end": 310
                  }
                ],
                "start": 295,
                "end": 310
              },
              "start": 293,
              "end": 310
            },
            "start": 291,
            "end": 310
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 318
              },
              "optional": false,
              "computed": false,
              "start": 313,
              "end": 318
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
            },
            "optional": false,
            "computed": false,
            "start": 313,
            "end": 320
          },
          "definite": false,
          "start": 291,
          "end": 320
        }
      ],
      "declare": false,
      "start": 285,
      "end": 321
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 339
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 343
                      },
                      "start": 338,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 338,
                    "end": 343
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 346,
                    "end": 353
                  }
                ],
                "start": 338,
                "end": 353
              },
              "start": 336,
              "end": 353
            },
            "start": 334,
            "end": 353
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 361
              },
              "optional": false,
              "computed": false,
              "start": 356,
              "end": 361
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "optional": false,
            "computed": false,
            "start": 356,
            "end": 363
          },
          "definite": false,
          "start": 334,
          "end": 363
        }
      ],
      "declare": false,
      "start": 328,
      "end": 364
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 404
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 408
                        },
                        "start": 403,
                        "end": 408
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "start": 403,
                      "end": 410
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 410
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 414
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 418
                        },
                        "start": 413,
                        "end": 418
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 420
                      },
                      "start": 413,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 413,
                    "end": 420
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 423,
                    "end": 430
                  }
                ],
                "start": 403,
                "end": 430
              },
              "start": 401,
              "end": 430
            },
            "start": 399,
            "end": 430
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 434
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 438
              },
              "optional": false,
              "computed": false,
              "start": 433,
              "end": 438
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            "optional": false,
            "computed": false,
            "start": 433,
            "end": 440
          },
          "definite": false,
          "start": 399,
          "end": 440
        }
      ],
      "declare": false,
      "start": 393,
      "end": 441
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 471,
                          "end": 472
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 476
                        },
                        "start": 471,
                        "end": 476
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 478
                      },
                      "start": 471,
                      "end": 478
                    },
                    "typeArguments": null,
                    "start": 471,
                    "end": 478
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 481,
                    "end": 488
                  }
                ],
                "start": 471,
                "end": 488
              },
              "start": 469,
              "end": 488
            },
            "start": 467,
            "end": 488
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 492
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 496
              },
              "optional": false,
              "computed": false,
              "start": 491,
              "end": 496
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 498
            },
            "optional": false,
            "computed": false,
            "start": 491,
            "end": 498
          },
          "definite": false,
          "start": 467,
          "end": 498
        }
      ],
      "declare": false,
      "start": 461,
      "end": 499
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 523,
                          "end": 524
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 525,
                          "end": 528
                        },
                        "start": 523,
                        "end": 528
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 530
                      },
                      "start": 523,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 523,
                    "end": 530
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 533,
                    "end": 540
                  }
                ],
                "start": 523,
                "end": 540
              },
              "start": 521,
              "end": 540
            },
            "start": 519,
            "end": 540
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 548
              },
              "optional": false,
              "computed": false,
              "start": 543,
              "end": 548
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 550
            },
            "optional": false,
            "computed": false,
            "start": 543,
            "end": 550
          },
          "definite": false,
          "start": 519,
          "end": 550
        }
      ],
      "declare": false,
      "start": 513,
      "end": 551
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
            "name": "e5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 663
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 667
                      },
                      "start": 661,
                      "end": 667
                    },
                    "typeArguments": null,
                    "start": 661,
                    "end": 667
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 670,
                    "end": 677
                  }
                ],
                "start": 661,
                "end": 677
              },
              "start": 659,
              "end": 677
            },
            "start": 657,
            "end": 677
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 685
              },
              "optional": false,
              "computed": false,
              "start": 680,
              "end": 685
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 687
            },
            "optional": false,
            "computed": false,
            "start": 680,
            "end": 687
          },
          "definite": false,
          "start": 657,
          "end": 687
        }
      ],
      "declare": false,
      "start": 651,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 694
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
    "value": "X",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 25,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 114,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 132,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 139,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Numeric",
    "value": "1",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 164,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 184,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 198,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Ka",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 224,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 249,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 270,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 303,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 393,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 461,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 513,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 519,
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
    "value": "X",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 533,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 651,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Ka",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 670,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  }
]
```

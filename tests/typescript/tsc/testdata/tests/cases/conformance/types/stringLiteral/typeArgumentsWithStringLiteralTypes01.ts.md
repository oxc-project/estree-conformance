__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 29,
          "end": 36
        },
        "start": 27,
        "end": 36
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeReturnString",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            },
            "start": 75,
            "end": 83
          },
          "start": 72,
          "end": 83
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 86,
          "end": 92
        },
        "start": 84,
        "end": 92
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 93
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeReturnHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Hello",
                "raw": "\"Hello\"",
                "start": 132,
                "end": 139
              },
              "start": 132,
              "end": 139
            },
            "start": 130,
            "end": 139
          },
          "start": 127,
          "end": 139
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Hello",
            "raw": "\"Hello\"",
            "start": 142,
            "end": 149
          },
          "start": 142,
          "end": 149
        },
        "start": 140,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 94,
      "end": 150
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeReturnHelloWorld",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
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
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 194,
                    "end": 201
                  },
                  "start": 194,
                  "end": 201
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "World",
                    "raw": "\"World\"",
                    "start": 204,
                    "end": 211
                  },
                  "start": 204,
                  "end": 211
                }
              ],
              "start": 194,
              "end": 211
            },
            "start": 192,
            "end": 211
          },
          "start": 189,
          "end": 211
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Hello",
                "raw": "\"Hello\"",
                "start": 214,
                "end": 221
              },
              "start": 214,
              "end": 221
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "World",
                "raw": "\"World\"",
                "start": 224,
                "end": 231
              },
              "start": 224,
              "end": 231
            }
          ],
          "start": 214,
          "end": 231
        },
        "start": 212,
        "end": 231
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 232
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun1",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 247
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
              "start": 248,
              "end": 249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 249
          }
        ],
        "start": 247,
        "end": 250
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
                "start": 254,
                "end": 255
              },
              "typeArguments": null,
              "start": 254,
              "end": 255
            },
            "start": 252,
            "end": 255
          },
          "start": 251,
          "end": 255
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "typeArguments": null,
              "start": 260,
              "end": 261
            },
            "start": 258,
            "end": 261
          },
          "start": 257,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "randBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 284
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 276,
                "end": 286
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 290
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "start": 276,
              "end": 294
            },
            "start": 269,
            "end": 295
          }
        ],
        "start": 263,
        "end": 297
      },
      "expression": false,
      "start": 234,
      "end": 297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun2",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 312
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
              "start": 313,
              "end": 314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 314
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 316,
            "end": 317
          }
        ],
        "start": 312,
        "end": 318
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
                "start": 322,
                "end": 323
              },
              "typeArguments": null,
              "start": 322,
              "end": 323
            },
            "start": 320,
            "end": 323
          },
          "start": 319,
          "end": 323
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
                "start": 328,
                "end": 329
              },
              "typeArguments": null,
              "start": 328,
              "end": 329
            },
            "start": 326,
            "end": 329
          },
          "start": 325,
          "end": 329
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "randBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 352
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 344,
                "end": 354
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 362
              },
              "start": 344,
              "end": 362
            },
            "start": 337,
            "end": 363
          }
        ],
        "start": 331,
        "end": 365
      },
      "expression": false,
      "start": 299,
      "end": 365
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun3",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 380
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
              "start": 381,
              "end": 382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 382
          }
        ],
        "start": 380,
        "end": 383
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
            "start": 387,
            "end": 391
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "typeArguments": null,
                "start": 393,
                "end": 394
              },
              "start": 393,
              "end": 396
            },
            "start": 391,
            "end": 396
          },
          "value": null,
          "start": 384,
          "end": 396
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
            "start": 399,
            "end": 400
          },
          "typeArguments": null,
          "start": 399,
          "end": 400
        },
        "start": 397,
        "end": 400
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 418
              },
              "property": {
                "type": "UnaryExpression",
                "operator": "+",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randBool",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 428
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 420,
                  "end": 430
                },
                "prefix": true,
                "start": 419,
                "end": 430
              },
              "optional": false,
              "computed": true,
              "start": 414,
              "end": 431
            },
            "start": 407,
            "end": 432
          }
        ],
        "start": 401,
        "end": 434
      },
      "expression": false,
      "start": 367,
      "end": 434
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n1",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 448
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 659
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 666
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 667,
                        "end": 674
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 676,
                        "end": 683
                      }
                    ],
                    "optional": false,
                    "start": 662,
                    "end": 684
                  },
                  "definite": false,
                  "start": 658,
                  "end": 684
                }
              ],
              "declare": false,
              "start": 654,
              "end": 685
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 647,
            "end": 685
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 705,
                      "end": 709
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 710,
                        "end": 717
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 719,
                        "end": 726
                      }
                    ],
                    "optional": false,
                    "start": 705,
                    "end": 727
                  },
                  "definite": false,
                  "start": 701,
                  "end": 727
                }
              ],
              "declare": false,
              "start": 697,
              "end": 728
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 690,
            "end": 728
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 752
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 753,
                        "end": 760
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 762,
                        "end": 769
                      }
                    ],
                    "optional": false,
                    "start": 748,
                    "end": 770
                  },
                  "definite": false,
                  "start": 744,
                  "end": 770
                }
              ],
              "declare": false,
              "start": 740,
              "end": 771
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 733,
            "end": 771
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 788
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 791,
                      "end": 795
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 796,
                        "end": 803
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 805,
                        "end": 812
                      }
                    ],
                    "optional": false,
                    "start": 791,
                    "end": 813
                  },
                  "definite": false,
                  "start": 787,
                  "end": 813
                }
              ],
              "declare": false,
              "start": 783,
              "end": 814
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 776,
            "end": 814
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 831
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 838
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 839,
                        "end": 846
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 848,
                        "end": 855
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 857,
                        "end": 864
                      },
                      {
                        "type": "Literal",
                        "value": "Foo",
                        "raw": "\"Foo\"",
                        "start": 866,
                        "end": 871
                      }
                    ],
                    "optional": false,
                    "start": 834,
                    "end": 872
                  },
                  "definite": false,
                  "start": 830,
                  "end": 872
                }
              ],
              "declare": false,
              "start": 826,
              "end": 873
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 819,
            "end": 873
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 906,
                  "end": 922
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 924
                  }
                ],
                "optional": false,
                "start": 906,
                "end": 925
              },
              "start": 902,
              "end": 925
            },
            "directive": null,
            "start": 902,
            "end": 926
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 932
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 951
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 953
                  }
                ],
                "optional": false,
                "start": 935,
                "end": 954
              },
              "start": 931,
              "end": 954
            },
            "directive": null,
            "start": 931,
            "end": 955
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 961
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 980
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 982
                  }
                ],
                "optional": false,
                "start": 964,
                "end": 983
              },
              "start": 960,
              "end": 983
            },
            "directive": null,
            "start": 960,
            "end": 984
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 990
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 1009
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1011
                  }
                ],
                "optional": false,
                "start": 993,
                "end": 1012
              },
              "start": 989,
              "end": 1012
            },
            "directive": null,
            "start": 989,
            "end": 1013
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1019
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1038
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1039,
                    "end": 1040
                  }
                ],
                "optional": false,
                "start": 1022,
                "end": 1041
              },
              "start": 1018,
              "end": 1041
            },
            "directive": null,
            "start": 1018,
            "end": 1042
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1110
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1113,
                  "end": 1128
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1130
                  }
                ],
                "optional": false,
                "start": 1113,
                "end": 1131
              },
              "start": 1109,
              "end": 1131
            },
            "directive": null,
            "start": 1109,
            "end": 1132
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1141,
                  "end": 1156
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1157,
                    "end": 1158
                  }
                ],
                "optional": false,
                "start": 1141,
                "end": 1159
              },
              "start": 1137,
              "end": 1159
            },
            "directive": null,
            "start": 1137,
            "end": 1160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1166
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1184
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1186
                  }
                ],
                "optional": false,
                "start": 1169,
                "end": 1187
              },
              "start": 1165,
              "end": 1187
            },
            "directive": null,
            "start": 1165,
            "end": 1188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1193,
                "end": 1194
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1197,
                  "end": 1212
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1214
                  }
                ],
                "optional": false,
                "start": 1197,
                "end": 1215
              },
              "start": 1193,
              "end": 1215
            },
            "directive": null,
            "start": 1193,
            "end": 1216
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1221,
                "end": 1222
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1225,
                  "end": 1240
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1242
                  }
                ],
                "optional": false,
                "start": 1225,
                "end": 1243
              },
              "start": 1221,
              "end": 1243
            },
            "directive": null,
            "start": 1221,
            "end": 1244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1307,
                "end": 1308
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1331
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1332,
                    "end": 1333
                  }
                ],
                "optional": false,
                "start": 1311,
                "end": 1334
              },
              "start": 1307,
              "end": 1334
            },
            "directive": null,
            "start": 1307,
            "end": 1335
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1364
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1365,
                    "end": 1366
                  }
                ],
                "optional": false,
                "start": 1344,
                "end": 1367
              },
              "start": 1340,
              "end": 1367
            },
            "directive": null,
            "start": 1340,
            "end": 1368
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1373,
                "end": 1374
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1377,
                  "end": 1397
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1398,
                    "end": 1399
                  }
                ],
                "optional": false,
                "start": 1377,
                "end": 1400
              },
              "start": 1373,
              "end": 1400
            },
            "directive": null,
            "start": 1373,
            "end": 1401
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1407
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1430
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1432
                  }
                ],
                "optional": false,
                "start": 1410,
                "end": 1433
              },
              "start": 1406,
              "end": 1433
            },
            "directive": null,
            "start": 1406,
            "end": 1434
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1463
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1464,
                    "end": 1465
                  }
                ],
                "optional": false,
                "start": 1443,
                "end": 1466
              },
              "start": 1439,
              "end": 1466
            },
            "directive": null,
            "start": 1439,
            "end": 1467
          }
        ],
        "start": 449,
        "end": 1469
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 436,
      "end": 1469
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1483
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1610,
                    "end": 1611
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1618
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1619,
                            "end": 1626
                          },
                          "start": 1619,
                          "end": 1626
                        }
                      ],
                      "start": 1618,
                      "end": 1627
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1628,
                        "end": 1635
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1637,
                        "end": 1644
                      }
                    ],
                    "optional": false,
                    "start": 1614,
                    "end": 1645
                  },
                  "definite": false,
                  "start": 1610,
                  "end": 1645
                }
              ],
              "declare": false,
              "start": 1606,
              "end": 1646
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1599,
            "end": 1646
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1662,
                    "end": 1663
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1670
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1671,
                            "end": 1678
                          },
                          "start": 1671,
                          "end": 1678
                        }
                      ],
                      "start": 1670,
                      "end": 1679
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1680,
                        "end": 1687
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 1689,
                        "end": 1696
                      }
                    ],
                    "optional": false,
                    "start": 1666,
                    "end": 1697
                  },
                  "definite": false,
                  "start": 1662,
                  "end": 1697
                }
              ],
              "declare": false,
              "start": 1658,
              "end": 1698
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1651,
            "end": 1698
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1714,
                    "end": 1715
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1718,
                      "end": 1722
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1723,
                            "end": 1730
                          },
                          "start": 1723,
                          "end": 1730
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1732,
                            "end": 1739
                          },
                          "start": 1732,
                          "end": 1739
                        }
                      ],
                      "start": 1722,
                      "end": 1740
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1741,
                        "end": 1748
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1750,
                        "end": 1757
                      }
                    ],
                    "optional": false,
                    "start": 1718,
                    "end": 1758
                  },
                  "definite": false,
                  "start": 1714,
                  "end": 1758
                }
              ],
              "declare": false,
              "start": 1710,
              "end": 1759
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1703,
            "end": 1759
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1776
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1779,
                      "end": 1783
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1784,
                            "end": 1791
                          },
                          "start": 1784,
                          "end": 1791
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1793,
                            "end": 1800
                          },
                          "start": 1793,
                          "end": 1800
                        }
                      ],
                      "start": 1783,
                      "end": 1801
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1802,
                        "end": 1809
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 1811,
                        "end": 1818
                      }
                    ],
                    "optional": false,
                    "start": 1779,
                    "end": 1819
                  },
                  "definite": false,
                  "start": 1775,
                  "end": 1819
                }
              ],
              "declare": false,
              "start": 1771,
              "end": 1820
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1764,
            "end": 1820
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1836,
                    "end": 1837
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1840,
                      "end": 1844
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 1845,
                            "end": 1852
                          },
                          "start": 1845,
                          "end": 1852
                        }
                      ],
                      "start": 1844,
                      "end": 1853
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 1854,
                        "end": 1861
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 1863,
                        "end": 1870
                      }
                    ],
                    "optional": false,
                    "start": 1840,
                    "end": 1871
                  },
                  "definite": false,
                  "start": 1836,
                  "end": 1871
                }
              ],
              "declare": false,
              "start": 1832,
              "end": 1872
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1825,
            "end": 1872
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1943,
                "end": 1944
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1963
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1965
                  }
                ],
                "optional": false,
                "start": 1947,
                "end": 1966
              },
              "start": 1943,
              "end": 1966
            },
            "directive": null,
            "start": 1943,
            "end": 1967
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1972,
                "end": 1973
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1976,
                  "end": 1992
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1993,
                    "end": 1994
                  }
                ],
                "optional": false,
                "start": 1976,
                "end": 1995
              },
              "start": 1972,
              "end": 1995
            },
            "directive": null,
            "start": 1972,
            "end": 1996
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2001,
                "end": 2002
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2005,
                  "end": 2021
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2022,
                    "end": 2023
                  }
                ],
                "optional": false,
                "start": 2005,
                "end": 2024
              },
              "start": 2001,
              "end": 2024
            },
            "directive": null,
            "start": 2001,
            "end": 2025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2031
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2034,
                  "end": 2050
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2051,
                    "end": 2052
                  }
                ],
                "optional": false,
                "start": 2034,
                "end": 2053
              },
              "start": 2030,
              "end": 2053
            },
            "directive": null,
            "start": 2030,
            "end": 2054
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2060
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2063,
                  "end": 2079
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2080,
                    "end": 2081
                  }
                ],
                "optional": false,
                "start": 2063,
                "end": 2082
              },
              "start": 2059,
              "end": 2082
            },
            "directive": null,
            "start": 2059,
            "end": 2083
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2113
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2116,
                  "end": 2131
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2132,
                    "end": 2133
                  }
                ],
                "optional": false,
                "start": 2116,
                "end": 2134
              },
              "start": 2112,
              "end": 2134
            },
            "directive": null,
            "start": 2112,
            "end": 2135
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2140,
                "end": 2141
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2144,
                  "end": 2159
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2160,
                    "end": 2161
                  }
                ],
                "optional": false,
                "start": 2144,
                "end": 2162
              },
              "start": 2140,
              "end": 2162
            },
            "directive": null,
            "start": 2140,
            "end": 2163
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2168,
                "end": 2169
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2172,
                  "end": 2187
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2188,
                    "end": 2189
                  }
                ],
                "optional": false,
                "start": 2172,
                "end": 2190
              },
              "start": 2168,
              "end": 2190
            },
            "directive": null,
            "start": 2168,
            "end": 2191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 2196,
                "end": 2197
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2200,
                  "end": 2215
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2216,
                    "end": 2217
                  }
                ],
                "optional": false,
                "start": 2200,
                "end": 2218
              },
              "start": 2196,
              "end": 2218
            },
            "directive": null,
            "start": 2196,
            "end": 2219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2224,
                "end": 2225
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2228,
                  "end": 2243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2244,
                    "end": 2245
                  }
                ],
                "optional": false,
                "start": 2228,
                "end": 2246
              },
              "start": 2224,
              "end": 2246
            },
            "directive": null,
            "start": 2224,
            "end": 2247
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2318,
                "end": 2319
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2322,
                  "end": 2342
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2343,
                    "end": 2344
                  }
                ],
                "optional": false,
                "start": 2322,
                "end": 2345
              },
              "start": 2318,
              "end": 2345
            },
            "directive": null,
            "start": 2318,
            "end": 2346
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2351,
                "end": 2352
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2355,
                  "end": 2375
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2376,
                    "end": 2377
                  }
                ],
                "optional": false,
                "start": 2355,
                "end": 2378
              },
              "start": 2351,
              "end": 2378
            },
            "directive": null,
            "start": 2351,
            "end": 2379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2384,
                "end": 2385
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2388,
                  "end": 2408
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2409,
                    "end": 2410
                  }
                ],
                "optional": false,
                "start": 2388,
                "end": 2411
              },
              "start": 2384,
              "end": 2411
            },
            "directive": null,
            "start": 2384,
            "end": 2412
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 2417,
                "end": 2418
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2421,
                  "end": 2441
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2442,
                    "end": 2443
                  }
                ],
                "optional": false,
                "start": 2421,
                "end": 2444
              },
              "start": 2417,
              "end": 2444
            },
            "directive": null,
            "start": 2417,
            "end": 2445
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2450,
                "end": 2451
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2454,
                  "end": 2474
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2475,
                    "end": 2476
                  }
                ],
                "optional": false,
                "start": 2454,
                "end": 2477
              },
              "start": 2450,
              "end": 2477
            },
            "directive": null,
            "start": 2450,
            "end": 2478
          }
        ],
        "start": 1484,
        "end": 2480
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1471,
      "end": 2480
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2493,
        "end": 2495
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2632,
                    "end": 2633
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2636,
                      "end": 2640
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2641,
                            "end": 2648
                          },
                          "start": 2641,
                          "end": 2648
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2650,
                            "end": 2657
                          },
                          "start": 2650,
                          "end": 2657
                        }
                      ],
                      "start": 2640,
                      "end": 2658
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2659,
                        "end": 2666
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2668,
                        "end": 2675
                      }
                    ],
                    "optional": false,
                    "start": 2636,
                    "end": 2676
                  },
                  "definite": false,
                  "start": 2632,
                  "end": 2676
                }
              ],
              "declare": false,
              "start": 2628,
              "end": 2677
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2621,
            "end": 2677
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2693,
                    "end": 2694
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2697,
                      "end": 2701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2702,
                            "end": 2709
                          },
                          "start": 2702,
                          "end": 2709
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2711,
                            "end": 2718
                          },
                          "start": 2711,
                          "end": 2718
                        }
                      ],
                      "start": 2701,
                      "end": 2719
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2720,
                        "end": 2727
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2729,
                        "end": 2736
                      }
                    ],
                    "optional": false,
                    "start": 2697,
                    "end": 2737
                  },
                  "definite": false,
                  "start": 2693,
                  "end": 2737
                }
              ],
              "declare": false,
              "start": 2689,
              "end": 2738
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2682,
            "end": 2738
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2754,
                    "end": 2755
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2758,
                      "end": 2762
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2763,
                            "end": 2770
                          },
                          "start": 2763,
                          "end": 2770
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2772,
                            "end": 2779
                          },
                          "start": 2772,
                          "end": 2779
                        }
                      ],
                      "start": 2762,
                      "end": 2780
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2781,
                        "end": 2788
                      },
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2790,
                        "end": 2797
                      }
                    ],
                    "optional": false,
                    "start": 2758,
                    "end": 2798
                  },
                  "definite": false,
                  "start": 2754,
                  "end": 2798
                }
              ],
              "declare": false,
              "start": 2750,
              "end": 2799
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2743,
            "end": 2799
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2815,
                    "end": 2816
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2819,
                      "end": 2823
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\"",
                            "start": 2824,
                            "end": 2831
                          },
                          "start": 2824,
                          "end": 2831
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\"",
                            "start": 2833,
                            "end": 2840
                          },
                          "start": 2833,
                          "end": 2840
                        }
                      ],
                      "start": 2823,
                      "end": 2841
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2842,
                        "end": 2849
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2851,
                        "end": 2858
                      }
                    ],
                    "optional": false,
                    "start": 2819,
                    "end": 2859
                  },
                  "definite": false,
                  "start": 2815,
                  "end": 2859
                }
              ],
              "declare": false,
              "start": 2811,
              "end": 2860
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2804,
            "end": 2860
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2876,
                    "end": 2877
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fun3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2880,
                      "end": 2884
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "Hello",
                                "raw": "\"Hello\"",
                                "start": 2885,
                                "end": 2892
                              },
                              "start": 2885,
                              "end": 2892
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "World",
                                "raw": "\"World\"",
                                "start": 2895,
                                "end": 2902
                              },
                              "start": 2895,
                              "end": 2902
                            }
                          ],
                          "start": 2885,
                          "end": 2902
                        }
                      ],
                      "start": 2884,
                      "end": 2903
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello",
                        "raw": "\"Hello\"",
                        "start": 2904,
                        "end": 2911
                      },
                      {
                        "type": "Literal",
                        "value": "World",
                        "raw": "\"World\"",
                        "start": 2913,
                        "end": 2920
                      }
                    ],
                    "optional": false,
                    "start": 2880,
                    "end": 2921
                  },
                  "definite": false,
                  "start": 2876,
                  "end": 2921
                }
              ],
              "declare": false,
              "start": 2872,
              "end": 2922
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2865,
            "end": 2922
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2994
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2997,
                  "end": 3013
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3014,
                    "end": 3015
                  }
                ],
                "optional": false,
                "start": 2997,
                "end": 3016
              },
              "start": 2993,
              "end": 3016
            },
            "directive": null,
            "start": 2993,
            "end": 3017
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3022,
                "end": 3023
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3026,
                  "end": 3042
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3043,
                    "end": 3044
                  }
                ],
                "optional": false,
                "start": 3026,
                "end": 3045
              },
              "start": 3022,
              "end": 3045
            },
            "directive": null,
            "start": 3022,
            "end": 3046
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3051,
                "end": 3052
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3055,
                  "end": 3071
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3072,
                    "end": 3073
                  }
                ],
                "optional": false,
                "start": 3055,
                "end": 3074
              },
              "start": 3051,
              "end": 3074
            },
            "directive": null,
            "start": 3051,
            "end": 3075
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 3080,
                "end": 3081
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3084,
                  "end": 3100
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3101,
                    "end": 3102
                  }
                ],
                "optional": false,
                "start": 3084,
                "end": 3103
              },
              "start": 3080,
              "end": 3103
            },
            "directive": null,
            "start": 3080,
            "end": 3104
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 3109,
                "end": 3110
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3113,
                  "end": 3129
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3130,
                    "end": 3131
                  }
                ],
                "optional": false,
                "start": 3113,
                "end": 3132
              },
              "start": 3109,
              "end": 3132
            },
            "directive": null,
            "start": 3109,
            "end": 3133
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3196,
                "end": 3197
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3200,
                  "end": 3215
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3216,
                    "end": 3217
                  }
                ],
                "optional": false,
                "start": 3200,
                "end": 3218
              },
              "start": 3196,
              "end": 3218
            },
            "directive": null,
            "start": 3196,
            "end": 3219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3224,
                "end": 3225
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3228,
                  "end": 3243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3244,
                    "end": 3245
                  }
                ],
                "optional": false,
                "start": 3228,
                "end": 3246
              },
              "start": 3224,
              "end": 3246
            },
            "directive": null,
            "start": 3224,
            "end": 3247
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3252,
                "end": 3253
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3256,
                  "end": 3271
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3272,
                    "end": 3273
                  }
                ],
                "optional": false,
                "start": 3256,
                "end": 3274
              },
              "start": 3252,
              "end": 3274
            },
            "directive": null,
            "start": 3252,
            "end": 3275
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3281
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3284,
                  "end": 3299
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3300,
                    "end": 3301
                  }
                ],
                "optional": false,
                "start": 3284,
                "end": 3302
              },
              "start": 3280,
              "end": 3302
            },
            "directive": null,
            "start": 3280,
            "end": 3303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 3308,
                "end": 3309
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3312,
                  "end": 3327
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3328,
                    "end": 3329
                  }
                ],
                "optional": false,
                "start": 3312,
                "end": 3330
              },
              "start": 3308,
              "end": 3330
            },
            "directive": null,
            "start": 3308,
            "end": 3331
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3366,
                "end": 3367
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3370,
                  "end": 3390
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3391,
                    "end": 3392
                  }
                ],
                "optional": false,
                "start": 3370,
                "end": 3393
              },
              "start": 3366,
              "end": 3393
            },
            "directive": null,
            "start": 3366,
            "end": 3394
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3399,
                "end": 3400
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3403,
                  "end": 3423
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3424,
                    "end": 3425
                  }
                ],
                "optional": false,
                "start": 3403,
                "end": 3426
              },
              "start": 3399,
              "end": 3426
            },
            "directive": null,
            "start": 3399,
            "end": 3427
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3432,
                "end": 3433
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3436,
                  "end": 3456
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3457,
                    "end": 3458
                  }
                ],
                "optional": false,
                "start": 3436,
                "end": 3459
              },
              "start": 3432,
              "end": 3459
            },
            "directive": null,
            "start": 3432,
            "end": 3460
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 3465,
                "end": 3466
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3469,
                  "end": 3489
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3490,
                    "end": 3491
                  }
                ],
                "optional": false,
                "start": 3469,
                "end": 3492
              },
              "start": 3465,
              "end": 3492
            },
            "directive": null,
            "start": 3465,
            "end": 3493
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 3498,
                "end": 3499
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "takeReturnHelloWorld",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3502,
                  "end": 3522
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3523,
                    "end": 3524
                  }
                ],
                "optional": false,
                "start": 3502,
                "end": 3525
              },
              "start": 3498,
              "end": 3525
            },
            "directive": null,
            "start": 3498,
            "end": 3526
          }
        ],
        "start": 2496,
        "end": 3528
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2483,
      "end": 3528
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3528
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 38,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 55,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 94,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 111,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 151,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 168,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 204,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 234,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "fun1",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 269,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 276,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 299,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 337,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 344,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
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
    "value": "?",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 367,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "fun3",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 407,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 420,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 436,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 647,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 658,
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
    "value": "fun1",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 667,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 676,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 690,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "fun1",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 710,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 733,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 753,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 762,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 776,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 805,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 819,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 830,
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
    "value": "fun3",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 839,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 848,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 857,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "String",
    "value": "\"Foo\"",
    "start": 866,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 906,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 935,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 964,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 993,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 1022,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 1113,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 1141,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 1169,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 1197,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 1225,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 1311,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 1344,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 1377,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 1410,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "e",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 1443,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1471,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 1481,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1599,
    "end": 1605
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "fun1",
    "start": 1614,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1619,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1628,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1637,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1651,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "fun1",
    "start": 1666,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1671,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1680,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 1689,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1710,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 1718,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1723,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1732,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1741,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1750,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1764,
    "end": 1770
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1771,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 1779,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1784,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1793,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1802,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 1811,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1825,
    "end": 1831
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1832,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "fun3",
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
    "type": "String",
    "value": "\"Hello\"",
    "start": 1845,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1854,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 1863,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 1947,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 1976,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 2005,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 2034,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 2063,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 2116,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 2144,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 2172,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 2200,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 2228,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 2322,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 2355,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 2388,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 2421,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 2454,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2483,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 2493,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2621,
    "end": 2627
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2628,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 2636,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2641,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2650,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2659,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2668,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2682,
    "end": 2688
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2689,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 2697,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2702,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2711,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2720,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2729,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2743,
    "end": 2749
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2750,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 2758,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2763,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2772,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2781,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2790,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2804,
    "end": 2810
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2811,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 2819,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2824,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2833,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2842,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2851,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2865,
    "end": 2871
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2872,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "fun3",
    "start": 2880,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2885,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2895,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2904,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "String",
    "value": "\"World\"",
    "start": 2913,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 2997,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 3026,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 3055,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 3084,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "takeReturnString",
    "start": 3113,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "a",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 3200,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 3228,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 3256,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 3284,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "takeReturnHello",
    "start": 3312,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 3370,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ";",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 3403,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 3436,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 3469,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "takeReturnHelloWorld",
    "start": 3502,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3527,
    "end": 3528
  }
]
```

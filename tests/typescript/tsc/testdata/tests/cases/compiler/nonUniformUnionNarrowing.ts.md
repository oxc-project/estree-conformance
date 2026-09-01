__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "start": 9,
              "end": 10
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 13,
              "end": 14
            },
            "computed": false,
            "start": 9,
            "end": 14
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 20,
              "end": 21
            },
            "computed": false,
            "start": 16,
            "end": 21
          }
        ],
        "start": 7,
        "end": 23
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 36
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 40,
                  "end": 41
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 44,
                    "end": 45
                  },
                  "start": 44,
                  "end": 45
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 48,
                    "end": 49
                  },
                  "start": 48,
                  "end": 49
                }
              ],
              "start": 40,
              "end": 49
            },
            "start": 38,
            "end": 49
          },
          "start": 37,
          "end": 49
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 70
                },
                "optional": false,
                "computed": false,
                "start": 67,
                "end": 70
              },
              "start": 61,
              "end": 70
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "directive": null,
                  "start": 82,
                  "end": 84
                }
              ],
              "start": 72,
              "end": 102
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 123
                  },
                  "directive": null,
                  "start": 122,
                  "end": 124
                }
              ],
              "start": 112,
              "end": 142
            },
            "start": 57,
            "end": 142
          }
        ],
        "start": 51,
        "end": 144
      },
      "expression": false,
      "start": 25,
      "end": 144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1s",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 158
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 163
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 166,
                    "end": 167
                  },
                  "start": 166,
                  "end": 167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 170,
                    "end": 171
                  },
                  "start": 170,
                  "end": 171
                }
              ],
              "start": 162,
              "end": 171
            },
            "start": 160,
            "end": 171
          },
          "start": 159,
          "end": 171
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 206
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 208
                  },
                  "optional": false,
                  "computed": false,
                  "start": 205,
                  "end": 208
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 223
                    },
                    "directive": null,
                    "start": 222,
                    "end": 224
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 249,
                    "end": 255
                  }
                ],
                "start": 200,
                "end": 255
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    },
                    "directive": null,
                    "start": 285,
                    "end": 287
                  }
                ],
                "start": 264,
                "end": 287
              }
            ],
            "start": 179,
            "end": 305
          }
        ],
        "start": 173,
        "end": 307
      },
      "expression": false,
      "start": 146,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 320
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 325
                  },
                  "typeArguments": null,
                  "start": 324,
                  "end": 325
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 328,
                    "end": 329
                  },
                  "start": 328,
                  "end": 329
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 332,
                    "end": 333
                  },
                  "start": 332,
                  "end": 333
                }
              ],
              "start": 324,
              "end": 333
            },
            "start": 322,
            "end": 333
          },
          "start": 321,
          "end": 333
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 351,
                "end": 352
              },
              "start": 345,
              "end": 352
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 365
                  },
                  "directive": null,
                  "start": 364,
                  "end": 366
                }
              ],
              "start": 354,
              "end": 384
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "directive": null,
                  "start": 404,
                  "end": 406
                }
              ],
              "start": 394,
              "end": 424
            },
            "start": 341,
            "end": 424
          }
        ],
        "start": 335,
        "end": 426
      },
      "expression": false,
      "start": 309,
      "end": 426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2s",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 440
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
                  },
                  "typeArguments": null,
                  "start": 444,
                  "end": 445
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 448,
                    "end": 449
                  },
                  "start": 448,
                  "end": 449
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 452,
                    "end": 453
                  },
                  "start": 452,
                  "end": 453
                }
              ],
              "start": 444,
              "end": 453
            },
            "start": 442,
            "end": 453
          },
          "start": 441,
          "end": 453
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 487,
                  "end": 488
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 503
                    },
                    "directive": null,
                    "start": 502,
                    "end": 504
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 529,
                    "end": 535
                  }
                ],
                "start": 482,
                "end": 535
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 566
                    },
                    "directive": null,
                    "start": 565,
                    "end": 567
                  }
                ],
                "start": 544,
                "end": 567
              }
            ],
            "start": 461,
            "end": 585
          }
        ],
        "start": 455,
        "end": 587
      },
      "expression": false,
      "start": 428,
      "end": 587
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 601
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 621
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
                      "start": 624,
                      "end": 625
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 628,
                      "end": 629
                    },
                    "computed": false,
                    "start": 624,
                    "end": 629
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 632
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 635,
                      "end": 636
                    },
                    "computed": false,
                    "start": 631,
                    "end": 636
                  }
                ],
                "start": 622,
                "end": 638
              },
              "const": false,
              "declare": false,
              "start": 615,
              "end": 638
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 608,
            "end": 638
          }
        ],
        "start": 602,
        "end": 640
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 589,
      "end": 640
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 653
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 673
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
                      "start": 676,
                      "end": 677
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 680,
                      "end": 681
                    },
                    "computed": false,
                    "start": 676,
                    "end": 681
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 684
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 687,
                      "end": 688
                    },
                    "computed": false,
                    "start": 683,
                    "end": 688
                  }
                ],
                "start": 674,
                "end": 690
              },
              "const": false,
              "declare": false,
              "start": 667,
              "end": 690
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 660,
            "end": 690
          }
        ],
        "start": 654,
        "end": 692
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 641,
      "end": 692
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 705
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 709,
                      "end": 711
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 713
                    },
                    "start": 709,
                    "end": 713
                  },
                  "typeArguments": null,
                  "start": 709,
                  "end": 713
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 718
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
                    },
                    "start": 716,
                    "end": 720
                  },
                  "typeArguments": null,
                  "start": 716,
                  "end": 720
                }
              ],
              "start": 709,
              "end": 720
            },
            "start": 707,
            "end": 720
          },
          "start": 706,
          "end": 720
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 740
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 742
                  },
                  "optional": false,
                  "computed": false,
                  "start": 738,
                  "end": 742
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 744
                },
                "optional": false,
                "computed": false,
                "start": 738,
                "end": 744
              },
              "start": 732,
              "end": 744
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 757
                  },
                  "directive": null,
                  "start": 756,
                  "end": 758
                }
              ],
              "start": 746,
              "end": 784
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "directive": null,
                  "start": 804,
                  "end": 806
                }
              ],
              "start": 794,
              "end": 832
            },
            "start": 728,
            "end": 832
          }
        ],
        "start": 722,
        "end": 834
      },
      "expression": false,
      "start": 694,
      "end": 834
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3s",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 848
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 852,
                      "end": 854
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 855,
                      "end": 856
                    },
                    "start": 852,
                    "end": 856
                  },
                  "typeArguments": null,
                  "start": 852,
                  "end": 856
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 861
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 862,
                      "end": 863
                    },
                    "start": 859,
                    "end": 863
                  },
                  "typeArguments": null,
                  "start": 859,
                  "end": 863
                }
              ],
              "start": 852,
              "end": 863
            },
            "start": 850,
            "end": 863
          },
          "start": 849,
          "end": 863
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 880
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 897,
                      "end": 899
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 900,
                      "end": 901
                    },
                    "optional": false,
                    "computed": false,
                    "start": 897,
                    "end": 901
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 902,
                    "end": 903
                  },
                  "optional": false,
                  "computed": false,
                  "start": 897,
                  "end": 903
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 918
                    },
                    "directive": null,
                    "start": 917,
                    "end": 919
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 952,
                    "end": 958
                  }
                ],
                "start": 892,
                "end": 958
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 989
                    },
                    "directive": null,
                    "start": 988,
                    "end": 990
                  }
                ],
                "start": 967,
                "end": 990
              }
            ],
            "start": 871,
            "end": 1016
          }
        ],
        "start": 865,
        "end": 1018
      },
      "expression": false,
      "start": 836,
      "end": 1018
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 1026,
            "end": 1029
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1038
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1032,
            "end": 1040
          },
          "definite": false,
          "start": 1026,
          "end": 1040
        }
      ],
      "declare": false,
      "start": 1020,
      "end": 1041
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1054
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSSymbolKeyword",
                  "start": 1058,
                  "end": 1064
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1067,
                  "end": 1073
                }
              ],
              "start": 1058,
              "end": 1073
            },
            "start": 1056,
            "end": 1073
          },
          "start": 1055,
          "end": 1073
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1085,
                "end": 1086
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1094
              },
              "start": 1085,
              "end": 1094
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1106,
                    "end": 1107
                  },
                  "directive": null,
                  "start": 1106,
                  "end": 1108
                }
              ],
              "start": 1096,
              "end": 1140
            },
            "alternate": null,
            "start": 1081,
            "end": 1140
          }
        ],
        "start": 1075,
        "end": 1142
      },
      "expression": false,
      "start": 1043,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4s",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1156
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSSymbolKeyword",
                  "start": 1160,
                  "end": 1166
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1169,
                  "end": 1175
                }
              ],
              "start": 1160,
              "end": 1175
            },
            "start": 1158,
            "end": 1175
          },
          "start": 1157,
          "end": 1175
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1191,
              "end": 1192
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1209,
                  "end": 1212
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1226,
                      "end": 1227
                    },
                    "directive": null,
                    "start": 1226,
                    "end": 1228
                  }
                ],
                "start": 1204,
                "end": 1228
              }
            ],
            "start": 1183,
            "end": 1260
          }
        ],
        "start": 1177,
        "end": 1262
      },
      "expression": false,
      "start": 1144,
      "end": 1262
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EE",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1279
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
              "start": 1282,
              "end": 1283
            },
            "initializer": null,
            "computed": false,
            "start": 1282,
            "end": 1283
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1286
            },
            "initializer": null,
            "computed": false,
            "start": 1285,
            "end": 1286
          }
        ],
        "start": 1280,
        "end": 1288
      },
      "const": false,
      "declare": true,
      "start": 1264,
      "end": 1288
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1301
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1305,
                    "end": 1307
                  },
                  "typeArguments": null,
                  "start": 1305,
                  "end": 1307
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1310,
                    "end": 1311
                  },
                  "start": 1310,
                  "end": 1311
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1314,
                    "end": 1315
                  },
                  "start": 1314,
                  "end": 1315
                }
              ],
              "start": 1305,
              "end": 1315
            },
            "start": 1303,
            "end": 1315
          },
          "start": 1302,
          "end": 1315
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1327,
                "end": 1328
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1333,
                "end": 1334
              },
              "start": 1327,
              "end": 1334
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1346,
                    "end": 1347
                  },
                  "directive": null,
                  "start": 1346,
                  "end": 1348
                }
              ],
              "start": 1336,
              "end": 1404
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1424,
                    "end": 1425
                  },
                  "directive": null,
                  "start": 1424,
                  "end": 1426
                }
              ],
              "start": 1414,
              "end": 1438
            },
            "start": 1323,
            "end": 1438
          }
        ],
        "start": 1317,
        "end": 1440
      },
      "expression": false,
      "start": 1290,
      "end": 1440
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6s",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1454
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1458,
                    "end": 1460
                  },
                  "typeArguments": null,
                  "start": 1458,
                  "end": 1460
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1463,
                    "end": 1464
                  },
                  "start": 1463,
                  "end": 1464
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1467,
                    "end": 1468
                  },
                  "start": 1467,
                  "end": 1468
                }
              ],
              "start": 1458,
              "end": 1468
            },
            "start": 1456,
            "end": 1468
          },
          "start": 1455,
          "end": 1468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1485
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1502,
                  "end": 1503
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1517,
                      "end": 1518
                    },
                    "directive": null,
                    "start": 1517,
                    "end": 1519
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1582,
                    "end": 1588
                  }
                ],
                "start": 1497,
                "end": 1588
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1618,
                      "end": 1619
                    },
                    "directive": null,
                    "start": 1618,
                    "end": 1620
                  }
                ],
                "start": 1597,
                "end": 1620
              }
            ],
            "start": 1476,
            "end": 1632
          }
        ],
        "start": 1470,
        "end": 1634
      },
      "expression": false,
      "start": 1442,
      "end": 1634
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1634
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 146,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "f1s",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 164,
    "end": 165
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 200,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 264,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 326,
    "end": 327
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 330,
    "end": 331
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 347,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "{",
    "start": 354,
    "end": 355
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
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 428,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "f2s",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 441,
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
    "value": "E",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 450,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 461,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 482,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 589,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 608,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 615,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 641,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 660,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 667,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "type": "Identifier",
    "value": "A",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 694,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 728,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 734,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 836,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "f3s",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "N1",
    "start": 852,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 892,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 967,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1043,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1067,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1144,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "f4s",
    "start": 1153,
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
    "value": "x",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1160,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1169,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1183,
    "end": 1189
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
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1204,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1264,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1272,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "EE",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1299,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "EE",
    "start": 1305,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1442,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "f6s",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "EE",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1476,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1497,
    "end": 1501
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1597,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1633,
    "end": 1634
  }
]
```

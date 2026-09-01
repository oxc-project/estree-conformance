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
                      "value": 0,
                      "raw": "0",
                      "start": 9,
                      "end": 10
                    },
                    "start": 9,
                    "end": 10
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 13,
                      "end": 14
                    },
                    "start": 13,
                    "end": 14
                  }
                ],
                "start": 9,
                "end": 14
              },
              "start": 7,
              "end": 14
            },
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 21
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 28
                },
                "optional": false,
                "computed": false,
                "start": 17,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 17,
              "end": 30
            },
            "consequent": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 32,
              "end": 33
            },
            "alternate": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 35,
              "end": 36
            },
            "start": 17,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "start": 62,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 87,
                "end": 88
              },
              "start": 87,
              "end": 88
            },
            "start": 87,
            "end": 88
          },
          "start": 74,
          "end": 88
        },
        "start": 72,
        "end": 88
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assert",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          }
        ],
        "optional": false,
        "start": 90,
        "end": 99
      },
      "directive": null,
      "start": 90,
      "end": 100
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
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 124
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 127,
                    "end": 128
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 122,
                  "end": 128
                }
              ],
              "start": 116,
              "end": 169
            },
            "definite": false,
            "start": 112,
            "end": 169
          }
        ],
        "declare": false,
        "start": 108,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 101,
      "end": 169
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 181,
                  "end": 182
                },
                "start": 181,
                "end": 182
              },
              "start": 179,
              "end": 182
            },
            "start": 178,
            "end": 182
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 185,
            "end": 186
          },
          "definite": false,
          "start": 178,
          "end": 186
        }
      ],
      "declare": false,
      "start": 172,
      "end": 186
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
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 200
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 214,
                    "end": 215
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 209,
                  "end": 215
                }
              ],
              "start": 203,
              "end": 246
            },
            "definite": false,
            "start": 198,
            "end": 246
          }
        ],
        "declare": false,
        "start": 194,
        "end": 246
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 246
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
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 280
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 286,
                    "end": 287
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 290,
                    "end": 291
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 285,
                  "end": 291
                }
              ],
              "start": 283,
              "end": 293
            },
            "definite": false,
            "start": 278,
            "end": 293
          }
        ],
        "declare": false,
        "start": 274,
        "end": 293
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 267,
      "end": 293
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
              "name": "o31",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 308
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 315,
                      "end": 316
                    },
                    "prefix": true,
                    "start": 314,
                    "end": 316
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 319,
                    "end": 320
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 313,
                  "end": 320
                }
              ],
              "start": 311,
              "end": 322
            },
            "definite": false,
            "start": 305,
            "end": 322
          }
        ],
        "declare": false,
        "start": 301,
        "end": 322
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 294,
      "end": 322
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
              "name": "o32",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 338
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 344,
                      "end": 345
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 346,
                      "end": 347
                    },
                    "start": 344,
                    "end": 347
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 350,
                    "end": 351
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 343,
                  "end": 351
                }
              ],
              "start": 341,
              "end": 353
            },
            "definite": false,
            "start": 335,
            "end": 353
          }
        ],
        "declare": false,
        "start": 331,
        "end": 353
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 324,
      "end": 353
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 386
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 380,
            "end": 388
          },
          "definite": false,
          "start": 376,
          "end": 388
        }
      ],
      "declare": false,
      "start": 372,
      "end": 389
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
              "name": "o4",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 403
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
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 414
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 417,
                    "end": 418
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 412,
                  "end": 418
                }
              ],
              "start": 406,
              "end": 457
            },
            "definite": false,
            "start": 401,
            "end": 457
          }
        ],
        "declare": false,
        "start": 397,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 390,
      "end": 457
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
              "name": "o5",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 472
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 482,
                      "end": 488
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 482,
                    "end": 490
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 493,
                    "end": 494
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 481,
                  "end": 494
                }
              ],
              "start": 475,
              "end": 512
            },
            "definite": false,
            "start": 470,
            "end": 512
          }
        ],
        "declare": false,
        "start": 466,
        "end": 512
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 459,
      "end": 512
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
            "name": "uu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 531,
                  "end": 537
                },
                "start": 524,
                "end": 537
              },
              "start": 522,
              "end": 537
            },
            "start": 520,
            "end": 537
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 540,
            "end": 548
          },
          "definite": false,
          "start": 520,
          "end": 548
        }
      ],
      "declare": false,
      "start": 514,
      "end": 549
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
              "name": "o6",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 563
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
                    "name": "uu",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 576
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 579,
                    "end": 580
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 573,
                  "end": 580
                }
              ],
              "start": 567,
              "end": 598
            },
            "definite": false,
            "start": 561,
            "end": 598
          }
        ],
        "declare": false,
        "start": 557,
        "end": 598
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 550,
      "end": 598
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 613
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 618,
            "end": 619
          },
          "start": 618,
          "end": 619
        },
        "start": 616,
        "end": 619
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 629,
              "end": 630
            },
            "start": 622,
            "end": 631
          }
        ],
        "start": 620,
        "end": 633
      },
      "expression": false,
      "start": 601,
      "end": 633
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
              "name": "o7",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 647
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 660
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 657,
                    "end": 662
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 665,
                    "end": 666
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 656,
                  "end": 666
                }
              ],
              "start": 650,
              "end": 684
            },
            "definite": false,
            "start": 645,
            "end": 684
          }
        ],
        "declare": false,
        "start": 641,
        "end": 685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 634,
      "end": 685
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 692
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 698
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 700,
                    "end": 701
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 697,
                  "end": 701
                }
              ],
              "start": 695,
              "end": 703
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 712
              },
              "typeArguments": null,
              "start": 707,
              "end": 712
            },
            "start": 695,
            "end": 712
          },
          "definite": false,
          "start": 691,
          "end": 712
        }
      ],
      "declare": false,
      "start": 687,
      "end": 712
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o8",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 728
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 738,
                      "end": 739
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 741
                    },
                    "optional": false,
                    "computed": false,
                    "start": 738,
                    "end": 741
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 744,
                    "end": 745
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 737,
                  "end": 745
                }
              ],
              "start": 731,
              "end": 757
            },
            "definite": false,
            "start": 726,
            "end": 757
          }
        ],
        "declare": false,
        "start": 720,
        "end": 757
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 713,
      "end": 757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 770
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 785
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 787,
                      "end": 788
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 784,
                    "end": 788
                  }
                ],
                "start": 782,
                "end": 790
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 799
                },
                "typeArguments": null,
                "start": 794,
                "end": 799
              },
              "start": 782,
              "end": 799
            },
            "start": 775,
            "end": 799
          }
        ],
        "start": 773,
        "end": 801
      },
      "expression": false,
      "start": 759,
      "end": 801
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o9",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 817
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ns",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 829
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 827,
                      "end": 831
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 832,
                      "end": 833
                    },
                    "optional": false,
                    "computed": false,
                    "start": 827,
                    "end": 833
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 836,
                    "end": 837
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 826,
                  "end": 837
                }
              ],
              "start": 820,
              "end": 839
            },
            "definite": false,
            "start": 815,
            "end": 839
          }
        ],
        "declare": false,
        "start": 809,
        "end": 839
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 802,
      "end": 839
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 839
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
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
    "value": "assert",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 74,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 84,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 101,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 187,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Numeric",
    "value": "1",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 267,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 294,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "o31",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 324,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "o32",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 345,
    "end": 346
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 390,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 459,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 514,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "uu",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 524,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 550,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "uu",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 601,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 622,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 634,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 641,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "o7",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "let",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 704,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 707,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 713,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 720,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "o8",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 759,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "as",
    "start": 791,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 794,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 802,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 809,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "o9",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  }
]
```

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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 17,
                  "end": 20
                },
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 41,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 44
          }
        ],
        "start": 33,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": null,
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 65,
                  "end": 68
                },
                "start": 65,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 68
          }
        ],
        "start": 57,
        "end": 70
      },
      "declare": false,
      "start": 48,
      "end": 71
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 84
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "typeArguments": null,
            "start": 87,
            "end": 88
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "typeArguments": null,
            "start": 91,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeArguments": null,
            "start": 95,
            "end": 96
          }
        ],
        "start": 87,
        "end": 96
      },
      "declare": false,
      "start": 72,
      "end": 97
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
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 122
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 122
                  },
                  "start": 113,
                  "end": 122
                },
                "start": 112,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "typeArguments": null,
                    "start": 130,
                    "end": 131
                  },
                  "start": 130,
                  "end": 131
                },
                "start": 125,
                "end": 131
              },
              "start": 123,
              "end": 131
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "optional": false,
                "computed": false,
                "start": 135,
                "end": 141
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 146,
                "end": 149
              },
              "start": 135,
              "end": 149
            },
            "id": null,
            "generator": false,
            "start": 111,
            "end": 149
          },
          "definite": false,
          "start": 105,
          "end": 149
        }
      ],
      "declare": false,
      "start": 99,
      "end": 150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 166
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 177
              },
              "typeArguments": null,
              "start": 170,
              "end": 177
            },
            "start": 168,
            "end": 177
          },
          "start": 167,
          "end": 177
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 192
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  }
                ],
                "optional": false,
                "start": 189,
                "end": 195
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 200,
                "end": 204
              },
              "start": 189,
              "end": 204
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
                    "start": 216,
                    "end": 217
                  },
                  "directive": null,
                  "start": 216,
                  "end": 218
                }
              ],
              "start": 206,
              "end": 224
            },
            "alternate": null,
            "start": 185,
            "end": 224
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 237
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  }
                ],
                "optional": false,
                "start": 234,
                "end": 240
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 245,
                "end": 250
              },
              "start": 234,
              "end": 250
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
                    "start": 262,
                    "end": 263
                  },
                  "directive": null,
                  "start": 262,
                  "end": 264
                }
              ],
              "start": 252,
              "end": 270
            },
            "alternate": null,
            "start": 230,
            "end": 270
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 283
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 285
                  }
                ],
                "optional": false,
                "start": 280,
                "end": 286
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 291,
                "end": 296
              },
              "start": 280,
              "end": 296
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
                    "start": 308,
                    "end": 309
                  },
                  "directive": null,
                  "start": 308,
                  "end": 310
                }
              ],
              "start": 298,
              "end": 316
            },
            "alternate": null,
            "start": 276,
            "end": 316
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 329
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 331
                  }
                ],
                "optional": false,
                "start": 326,
                "end": 332
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 337,
                "end": 341
              },
              "start": 326,
              "end": 341
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
                    "start": 353,
                    "end": 354
                  },
                  "directive": null,
                  "start": 353,
                  "end": 355
                }
              ],
              "start": 343,
              "end": 361
            },
            "alternate": null,
            "start": 322,
            "end": 361
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 374
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  }
                ],
                "optional": false,
                "start": 371,
                "end": 377
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 381,
                "end": 385
              },
              "start": 371,
              "end": 385
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
                    "start": 397,
                    "end": 398
                  },
                  "directive": null,
                  "start": 397,
                  "end": 399
                }
              ],
              "start": 387,
              "end": 405
            },
            "alternate": null,
            "start": 367,
            "end": 405
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  }
                ],
                "optional": false,
                "start": 415,
                "end": 421
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 425,
                "end": 429
              },
              "start": 415,
              "end": 429
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
                    "start": 441,
                    "end": 442
                  },
                  "directive": null,
                  "start": 441,
                  "end": 443
                }
              ],
              "start": 431,
              "end": 449
            },
            "alternate": null,
            "start": 411,
            "end": 449
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 459,
                "end": 463
              },
              "operator": "!==",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 471
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 473
                  }
                ],
                "optional": false,
                "start": 468,
                "end": 474
              },
              "start": 459,
              "end": 474
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
                    "start": 486,
                    "end": 487
                  },
                  "directive": null,
                  "start": 486,
                  "end": 488
                }
              ],
              "start": 476,
              "end": 494
            },
            "alternate": null,
            "start": 455,
            "end": 494
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 504,
                "end": 508
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 516
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 518
                  }
                ],
                "optional": false,
                "start": 513,
                "end": 519
              },
              "start": 504,
              "end": 519
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
                    "start": 531,
                    "end": 532
                  },
                  "directive": null,
                  "start": 531,
                  "end": 533
                }
              ],
              "start": 521,
              "end": 539
            },
            "alternate": null,
            "start": 500,
            "end": 539
          }
        ],
        "start": 179,
        "end": 541
      },
      "expression": false,
      "start": 152,
      "end": 541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 613
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
              "type": "TSUnknownKeyword",
              "start": 617,
              "end": 624
            },
            "start": 615,
            "end": 624
          },
          "start": 614,
          "end": 624
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
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 637
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 654
                },
                "start": 636,
                "end": 654
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 659,
                "end": 664
              },
              "start": 636,
              "end": 664
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 676,
                  "end": 683
                }
              ],
              "start": 666,
              "end": 689
            },
            "alternate": null,
            "start": 632,
            "end": 689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 695
            },
            "directive": null,
            "start": 694,
            "end": 696
          }
        ],
        "start": 626,
        "end": 698
      },
      "expression": false,
      "start": 599,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 770
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 776,
              "end": 783
            },
            "start": 774,
            "end": 783
          },
          "start": 771,
          "end": 783
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 802,
                    "end": 805
                  },
                  "prefix": true,
                  "start": 795,
                  "end": 805
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 810,
                  "end": 818
                },
                "start": 795,
                "end": 818
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 827
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 828,
                      "end": 835
                    },
                    "optional": false,
                    "computed": false,
                    "start": 822,
                    "end": 835
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 836,
                      "end": 839
                    }
                  ],
                  "optional": false,
                  "start": 822,
                  "end": 840
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 845,
                  "end": 850
                },
                "start": 822,
                "end": 850
              },
              "start": 795,
              "end": 850
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 877
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Not a string or an array",
                        "raw": "'Not a string or an array'",
                        "start": 878,
                        "end": 904
                      }
                    ],
                    "start": 868,
                    "end": 905
                  },
                  "start": 862,
                  "end": 906
                }
              ],
              "start": 852,
              "end": 912
            },
            "alternate": null,
            "start": 791,
            "end": 912
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 920
            },
            "directive": null,
            "start": 917,
            "end": 921
          }
        ],
        "start": 785,
        "end": 923
      },
      "expression": false,
      "start": 756,
      "end": 923
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebError",
        "optional": false,
        "typeAnnotation": null,
        "start": 987,
        "end": 995
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "URIError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1004,
        "end": 1012
      },
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
              "name": "status",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1025
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1028,
                "end": 1034
              },
              "start": 1026,
              "end": 1034
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1019,
            "end": 1035
          }
        ],
        "start": 1013,
        "end": 1037
      },
      "abstract": false,
      "declare": false,
      "start": 981,
      "end": 1037
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1052
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 1065,
              "end": 1098
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1109
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1125,
                            "end": 1128
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WebError",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1140,
                            "end": 1148
                          },
                          "start": 1125,
                          "end": 1148
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1153,
                          "end": 1158
                        },
                        "start": 1125,
                        "end": 1158
                      },
                      "operator": "||",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1162,
                            "end": 1165
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "status",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1172
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1162,
                          "end": 1172
                        },
                        "operator": "!=",
                        "right": {
                          "type": "Literal",
                          "value": 401,
                          "raw": "401",
                          "start": 1176,
                          "end": 1179
                        },
                        "start": 1162,
                        "end": 1179
                      },
                      "start": 1125,
                      "end": 1179
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1195,
                                "end": 1202
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1203,
                                "end": 1208
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1195,
                              "end": 1208
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1209,
                                "end": 1212
                              }
                            ],
                            "optional": false,
                            "start": 1195,
                            "end": 1213
                          },
                          "directive": null,
                          "start": 1195,
                          "end": 1214
                        }
                      ],
                      "start": 1181,
                      "end": 1224
                    },
                    "alternate": null,
                    "start": 1121,
                    "end": 1224
                  }
                ],
                "start": 1111,
                "end": 1230
              },
              "start": 1099,
              "end": 1230
            },
            "finalizer": null,
            "start": 1061,
            "end": 1230
          }
        ],
        "start": 1055,
        "end": 1232
      },
      "expression": false,
      "start": 1038,
      "end": 1232
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 1300,
        "end": 1306
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1313,
              "end": 1317
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1319,
                "end": 1325
              },
              "start": 1317,
              "end": 1325
            },
            "accessibility": null,
            "static": false,
            "start": 1313,
            "end": 1326
          }
        ],
        "start": 1307,
        "end": 1328
      },
      "declare": false,
      "start": 1290,
      "end": 1328
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
            "name": "ACTOR_TYPE",
            "optional": false,
            "typeAnnotation": null,
            "start": 1335,
            "end": 1345
          },
          "init": {
            "type": "Literal",
            "value": "actor",
            "raw": "\"actor\"",
            "start": 1348,
            "end": 1355
          },
          "definite": false,
          "start": 1335,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1329,
      "end": 1356
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Actor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1367,
        "end": 1372
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 1381,
            "end": 1387
          },
          "typeArguments": null,
          "start": 1381,
          "end": 1387
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1398
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ACTOR_TYPE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1417
                },
                "typeArguments": null,
                "start": 1400,
                "end": 1417
              },
              "start": 1398,
              "end": 1417
            },
            "accessibility": null,
            "static": false,
            "start": 1394,
            "end": 1418
          }
        ],
        "start": 1388,
        "end": 1420
      },
      "declare": false,
      "start": 1357,
      "end": 1420
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1430,
        "end": 1437
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1446,
                "end": 1452
              },
              "typeArguments": null,
              "start": 1446,
              "end": 1452
            },
            "start": 1444,
            "end": 1452
          },
          "start": 1438,
          "end": 1452
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 1455,
            "end": 1461
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Actor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1465,
                "end": 1470
              },
              "typeArguments": null,
              "start": 1465,
              "end": 1470
            },
            "start": 1465,
            "end": 1470
          },
          "start": 1455,
          "end": 1470
        },
        "start": 1453,
        "end": 1470
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1484,
                  "end": 1490
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1495
                },
                "optional": false,
                "computed": false,
                "start": 1484,
                "end": 1495
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ACTOR_TYPE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1500,
                "end": 1510
              },
              "start": 1484,
              "end": 1510
            },
            "start": 1477,
            "end": 1511
          }
        ],
        "start": 1471,
        "end": 1513
      },
      "expression": false,
      "start": 1421,
      "end": 1513
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1528
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1540
              },
              "typeArguments": null,
              "start": 1534,
              "end": 1540
            },
            "start": 1532,
            "end": 1540
          },
          "start": 1529,
          "end": 1540
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1552,
                  "end": 1559
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1563
                  }
                ],
                "optional": false,
                "start": 1552,
                "end": 1564
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1569,
                "end": 1574
              },
              "start": 1552,
              "end": 1574
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1586,
                    "end": 1589
                  },
                  "directive": null,
                  "start": 1586,
                  "end": 1590
                }
              ],
              "start": 1576,
              "end": 1596
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1612,
                    "end": 1615
                  },
                  "directive": null,
                  "start": 1612,
                  "end": 1616
                }
              ],
              "start": 1602,
              "end": 1622
            },
            "start": 1548,
            "end": 1622
          }
        ],
        "start": 1542,
        "end": 1624
      },
      "expression": false,
      "start": 1514,
      "end": 1624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1634,
        "end": 1639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1651
              },
              "typeArguments": null,
              "start": 1645,
              "end": 1651
            },
            "start": 1643,
            "end": 1651
          },
          "start": 1640,
          "end": 1651
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1663,
                  "end": 1670
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1671,
                    "end": 1674
                  }
                ],
                "optional": false,
                "start": 1663,
                "end": 1675
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1679,
                "end": 1684
              },
              "start": 1663,
              "end": 1684
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1696,
                    "end": 1699
                  },
                  "directive": null,
                  "start": 1696,
                  "end": 1700
                }
              ],
              "start": 1686,
              "end": 1706
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1722,
                    "end": 1725
                  },
                  "directive": null,
                  "start": 1722,
                  "end": 1726
                }
              ],
              "start": 1712,
              "end": 1732
            },
            "start": 1659,
            "end": 1732
          }
        ],
        "start": 1653,
        "end": 1734
      },
      "expression": false,
      "start": 1625,
      "end": 1734
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1811
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
              "type": "TSUnknownKeyword",
              "start": 1815,
              "end": 1822
            },
            "start": 1813,
            "end": 1822
          },
          "start": 1812,
          "end": 1822
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1826
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1830,
                "end": 1838
              },
              "typeArguments": null,
              "start": 1830,
              "end": 1838
            },
            "start": 1830,
            "end": 1838
          },
          "start": 1825,
          "end": 1838
        },
        "start": 1823,
        "end": 1838
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1859,
                  "end": 1860
                },
                "prefix": true,
                "start": 1852,
                "end": 1860
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 1865,
                "end": 1875
              },
              "start": 1852,
              "end": 1875
            },
            "start": 1845,
            "end": 1876
          }
        ],
        "start": 1839,
        "end": 1878
      },
      "expression": false,
      "start": 1792,
      "end": 1878
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1889,
        "end": 1894
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
              "type": "TSUnknownKeyword",
              "start": 1898,
              "end": 1905
            },
            "start": 1896,
            "end": 1905
          },
          "start": 1895,
          "end": 1905
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1917,
                  "end": 1927
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1929
                  }
                ],
                "optional": false,
                "start": 1917,
                "end": 1930
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1935,
                "end": 1940
              },
              "start": 1917,
              "end": 1940
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
                    "start": 1952,
                    "end": 1953
                  },
                  "directive": null,
                  "start": 1952,
                  "end": 1954
                }
              ],
              "start": 1942,
              "end": 1960
            },
            "alternate": null,
            "start": 1913,
            "end": 1960
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1969,
                  "end": 1979
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1980,
                    "end": 1981
                  }
                ],
                "optional": false,
                "start": 1969,
                "end": 1982
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1987,
                "end": 1991
              },
              "start": 1969,
              "end": 1991
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
                    "start": 2003,
                    "end": 2004
                  },
                  "directive": null,
                  "start": 2003,
                  "end": 2005
                }
              ],
              "start": 1993,
              "end": 2011
            },
            "alternate": null,
            "start": 1965,
            "end": 2011
          }
        ],
        "start": 1907,
        "end": 2013
      },
      "expression": false,
      "start": 1880,
      "end": 2013
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2013
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
    "value": "A",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 24,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 127,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 142,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 196,
    "end": 199
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 241,
    "end": 244
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "===",
    "start": 287,
    "end": 290
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 333,
    "end": 336
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 337,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 378,
    "end": 380
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 422,
    "end": 424
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 425,
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
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 513,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 599,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 617,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 638,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 649,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 655,
    "end": 658
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 659,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 756,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 765,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 776,
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
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 795,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 802,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 806,
    "end": 809
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 810,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 819,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 836,
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
    "value": "===",
    "start": 841,
    "end": 844
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 845,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 862,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "String",
    "value": "'Not a string or an array'",
    "start": 878,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 917,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 981,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "WebError",
    "start": 987,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 996,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "URIError",
    "start": 1004,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1038,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 1047,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1129,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "WebError",
    "start": 1140,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1159,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Numeric",
    "value": "401",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1195,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1203,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1290,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1313,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1319,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1329,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "ACTOR_TYPE",
    "start": 1335,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "String",
    "value": "\"actor\"",
    "start": 1348,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1357,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "Actor",
    "start": 1367,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1373,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1394,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1400,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "ACTOR_TYPE",
    "start": 1407,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1421,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "isActor",
    "start": 1430,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "entity",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 1446,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "entity",
    "start": 1455,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1462,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "Actor",
    "start": 1465,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "entity",
    "start": 1484,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "ACTOR_TYPE",
    "start": 1500,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1514,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 1523,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1529,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 1534,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "isActor",
    "start": 1552,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1565,
    "end": 1568
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1569,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1597,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1625,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "test6",
    "start": 1634,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1640,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 1645,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "isActor",
    "start": 1663,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1676,
    "end": 1678
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1679,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1707,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "bin",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1792,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 1801,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1815,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1827,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1830,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1845,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1852,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1861,
    "end": 1864
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 1865,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1880,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "test7",
    "start": 1889,
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
    "value": "unknown",
    "start": 1898,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1913,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 1917,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1935,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1965,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 1969,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1983,
    "end": 1986
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1987,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2012,
    "end": 2013
  }
]
```

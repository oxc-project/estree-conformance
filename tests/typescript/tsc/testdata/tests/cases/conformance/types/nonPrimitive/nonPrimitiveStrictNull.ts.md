__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 38,
                    "end": 42
                  }
                ],
                "start": 29,
                "end": 42
              },
              "start": 27,
              "end": 42
            },
            "start": 26,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 42
        }
      ],
      "declare": true,
      "start": 14,
      "end": 42
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 58,
                    "end": 64
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 67,
                    "end": 76
                  }
                ],
                "start": 58,
                "end": 76
              },
              "start": 56,
              "end": 76
            },
            "start": 55,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 76
        }
      ],
      "declare": true,
      "start": 43,
      "end": 76
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 101,
                    "end": 105
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 108,
                    "end": 117
                  }
                ],
                "start": 92,
                "end": 117
              },
              "start": 90,
              "end": 117
            },
            "start": 89,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 117
        }
      ],
      "declare": true,
      "start": 77,
      "end": 117
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 125,
                    "end": 131
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 134,
                    "end": 138
                  }
                ],
                "start": 125,
                "end": 138
              },
              "start": 123,
              "end": 138
            },
            "start": 122,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 138
        }
      ],
      "declare": false,
      "start": 118,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "toString",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 149
        },
        "optional": false,
        "computed": false,
        "start": 139,
        "end": 149
      },
      "directive": null,
      "start": 139,
      "end": 150
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
          "start": 160,
          "end": 161
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 173
        },
        "start": 160,
        "end": 173
      },
      "directive": null,
      "start": 160,
      "end": 174
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
          "start": 184,
          "end": 185
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 188,
          "end": 192
        },
        "start": 184,
        "end": 192
      },
      "directive": null,
      "start": 184,
      "end": 193
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
          "start": 203,
          "end": 204
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "start": 203,
        "end": 208
      },
      "directive": null,
      "start": 203,
      "end": 209
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
          "start": 219,
          "end": 220
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 224
        },
        "start": 219,
        "end": 224
      },
      "directive": null,
      "start": 219,
      "end": 225
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
          "start": 235,
          "end": 236
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 240
        },
        "start": 235,
        "end": 240
      },
      "directive": null,
      "start": 235,
      "end": 241
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
          "start": 252,
          "end": 253
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 257
        },
        "start": 252,
        "end": 257
      },
      "directive": null,
      "start": 252,
      "end": 258
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
          "start": 265,
          "end": 266
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 270
        },
        "start": 265,
        "end": 270
      },
      "directive": null,
      "start": 265,
      "end": 271
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          },
          "prefix": true,
          "start": 283,
          "end": 291
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 296,
          "end": 304
        },
        "start": 283,
        "end": 304
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 322
                },
                "optional": false,
                "computed": false,
                "start": 312,
                "end": 322
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 312,
              "end": 324
            },
            "directive": null,
            "start": 312,
            "end": 325
          }
        ],
        "start": 306,
        "end": 343
      },
      "alternate": null,
      "start": 279,
      "end": 343
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 357
          },
          "prefix": true,
          "start": 349,
          "end": 357
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 362,
          "end": 370
        },
        "start": 349,
        "end": 370
      },
      "consequent": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 379
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "start": 378,
              "end": 383
            },
            "directive": null,
            "start": 378,
            "end": 384
          }
        ],
        "start": 372,
        "end": 414
      },
      "alternate": null,
      "start": 345,
      "end": 414
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 428
          },
          "prefix": true,
          "start": 420,
          "end": 428
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 433,
          "end": 441
        },
        "start": 420,
        "end": 441
      },
      "consequent": {
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 454
              },
              "start": 449,
              "end": 454
            },
            "directive": null,
            "start": 449,
            "end": 455
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 476
                },
                "optional": false,
                "computed": false,
                "start": 466,
                "end": 476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 466,
              "end": 478
            },
            "directive": null,
            "start": 466,
            "end": 479
          }
        ],
        "start": 443,
        "end": 505
      },
      "alternate": {
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 518
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 527
                },
                "optional": false,
                "computed": false,
                "start": 517,
                "end": 527
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 517,
              "end": 529
            },
            "directive": null,
            "start": 517,
            "end": 530
          }
        ],
        "start": 511,
        "end": 552
      },
      "start": 416,
      "end": 552
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 559
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 563,
          "end": 567
        },
        "start": 558,
        "end": 567
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 576
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 585
                },
                "optional": false,
                "computed": false,
                "start": 575,
                "end": 585
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 575,
              "end": 587
            },
            "directive": null,
            "start": 575,
            "end": 588
          }
        ],
        "start": 569,
        "end": 617
      },
      "alternate": {
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 629,
                  "end": 630
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 639
                },
                "optional": false,
                "computed": false,
                "start": 629,
                "end": 639
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 629,
              "end": 641
            },
            "directive": null,
            "start": 629,
            "end": 642
          }
        ],
        "start": 623,
        "end": 654
      },
      "start": 554,
      "end": 654
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 661
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 666,
          "end": 670
        },
        "start": 660,
        "end": 670
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 679
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 688
                },
                "optional": false,
                "computed": false,
                "start": 678,
                "end": 688
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 678,
              "end": 690
            },
            "directive": null,
            "start": 678,
            "end": 691
          }
        ],
        "start": 672,
        "end": 708
      },
      "alternate": {
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 721
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 730
                },
                "optional": false,
                "computed": false,
                "start": 720,
                "end": 730
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 720,
              "end": 732
            },
            "directive": null,
            "start": 720,
            "end": 733
          }
        ],
        "start": 714,
        "end": 764
      },
      "start": 656,
      "end": 764
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 778
          },
          "prefix": true,
          "start": 770,
          "end": 778
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "undefined",
          "raw": "'undefined'",
          "start": 783,
          "end": 794
        },
        "start": 770,
        "end": 794
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 803
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 812
                },
                "optional": false,
                "computed": false,
                "start": 802,
                "end": 812
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 802,
              "end": 814
            },
            "directive": null,
            "start": 802,
            "end": 815
          }
        ],
        "start": 796,
        "end": 837
      },
      "alternate": {
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 850
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 859
                },
                "optional": false,
                "computed": false,
                "start": 849,
                "end": 859
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 849,
              "end": 861
            },
            "directive": null,
            "start": 849,
            "end": 862
          }
        ],
        "start": 843,
        "end": 888
      },
      "start": 766,
      "end": 888
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 905
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
              "start": 906,
              "end": 907
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 916,
              "end": 922
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 906,
            "end": 922
          }
        ],
        "start": 905,
        "end": 923
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 924,
        "end": 926
      },
      "declare": false,
      "start": 890,
      "end": 926
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 940
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 941,
                      "end": 947
                    }
                  ],
                  "start": 940,
                  "end": 948
                },
                "start": 935,
                "end": 948
              },
              "start": 933,
              "end": 948
            },
            "start": 932,
            "end": 948
          },
          "init": null,
          "definite": false,
          "start": 932,
          "end": 948
        }
      ],
      "declare": false,
      "start": 928,
      "end": 949
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 971
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNullKeyword",
                      "start": 972,
                      "end": 976
                    }
                  ],
                  "start": 971,
                  "end": 977
                },
                "start": 966,
                "end": 977
              },
              "start": 964,
              "end": 977
            },
            "start": 963,
            "end": 977
          },
          "init": null,
          "definite": false,
          "start": 963,
          "end": 977
        }
      ],
      "declare": false,
      "start": 959,
      "end": 978
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 1000
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1001,
                      "end": 1010
                    }
                  ],
                  "start": 1000,
                  "end": 1011
                },
                "start": 995,
                "end": 1011
              },
              "start": 993,
              "end": 1011
            },
            "start": 992,
            "end": 1011
          },
          "init": null,
          "definite": false,
          "start": 992,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 988,
      "end": 1012
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1037
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
              "start": 1042,
              "end": 1045
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1047,
                "end": 1053
              },
              "start": 1045,
              "end": 1053
            },
            "accessibility": null,
            "static": false,
            "start": 1042,
            "end": 1054
          }
        ],
        "start": 1038,
        "end": 1056
      },
      "declare": false,
      "start": 1023,
      "end": 1056
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1065,
                  "end": 1070
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Blah",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1071,
                        "end": 1075
                      },
                      "typeArguments": null,
                      "start": 1071,
                      "end": 1075
                    }
                  ],
                  "start": 1070,
                  "end": 1076
                },
                "start": 1065,
                "end": 1076
              },
              "start": 1063,
              "end": 1076
            },
            "start": 1062,
            "end": 1076
          },
          "init": null,
          "definite": false,
          "start": 1062,
          "end": 1076
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1077
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1083
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 7,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 14,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 22,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "object",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 36,
    "end": 37
  },
  {
    "type": "Null",
    "value": "null",
    "start": 38,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 43,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 67,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 99,
    "end": 100
  },
  {
    "type": "Null",
    "value": "null",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 108,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 118,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "object",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 132,
    "end": 133
  },
  {
    "type": "Null",
    "value": "null",
    "start": 134,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 141,
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
    "value": "a",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 164,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Null",
    "value": "null",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 283,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 292,
    "end": 295
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 296,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 314,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 349,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 358,
    "end": 361
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 362,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 420,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 429,
    "end": 432
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 433,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 468,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 519,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 560,
    "end": 562
  },
  {
    "type": "Null",
    "value": "null",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 577,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 631,
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
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 662,
    "end": 665
  },
  {
    "type": "Null",
    "value": "null",
    "start": 666,
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
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 680,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 722,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 770,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 779,
    "end": 782
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 783,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 804,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 851,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 890,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 900,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 908,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 928,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 959,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 966,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972
  },
  {
    "type": "Null",
    "value": "null",
    "start": 972,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 988,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1001,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1023,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1042,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  }
]
```

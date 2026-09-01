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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "addUndefined1",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 24
          },
          "right": {
            "type": "Literal",
            "value": "J",
            "raw": "\"J\"",
            "start": 27,
            "end": 30
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 30
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "addUndefined2",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            },
            "start": 46,
            "end": 54
          },
          "start": 32,
          "end": 54
        }
      ],
      "returnType": null,
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
                  "name": "addUndefined1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 82
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 89
                },
                "optional": false,
                "computed": false,
                "start": 69,
                "end": 89
              },
              "operator": "+",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addUndefined2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 106
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 110,
                  "end": 111
                },
                "start": 93,
                "end": 111
              },
              "start": 69,
              "end": 112
            },
            "start": 62,
            "end": 113
          }
        ],
        "start": 56,
        "end": 115
      },
      "expression": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "addUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 139
          },
          "right": {
            "type": "Literal",
            "value": "J",
            "raw": "\"J\"",
            "start": 142,
            "end": 145
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 145
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "addDefined",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 159,
              "end": 165
            },
            "start": 157,
            "end": 165
          },
          "start": 147,
          "end": 165
        }
      ],
      "returnType": null,
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
                  "name": "addUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 199
                },
                "optional": false,
                "computed": false,
                "start": 180,
                "end": 199
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "addDefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 212
              },
              "start": 180,
              "end": 212
            },
            "start": 173,
            "end": 213
          }
        ],
        "start": 167,
        "end": 215
      },
      "expression": false,
      "start": 116,
      "end": 215
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
            "name": "total",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 228,
                  "end": 231
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 236,
                      "end": 239
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 241,
                      "end": 242
                    }
                  ],
                  "optional": false,
                  "start": 234,
                  "end": 243
                },
                "start": 228,
                "end": 243
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 248,
                    "end": 251
                  }
                ],
                "optional": false,
                "start": 246,
                "end": 252
              },
              "start": 228,
              "end": 252
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 266
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 268,
                  "end": 269
                }
              ],
              "optional": false,
              "start": 255,
              "end": 270
            },
            "start": 228,
            "end": 270
          },
          "definite": false,
          "start": 220,
          "end": 270
        }
      ],
      "declare": false,
      "start": 216,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "total",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 277
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 282,
                "end": 285
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 287,
                "end": 288
              }
            ],
            "optional": false,
            "start": 280,
            "end": 289
          },
          "operator": "+",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 303
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 305,
                "end": 306
              }
            ],
            "optional": false,
            "start": 292,
            "end": 307
          },
          "start": 280,
          "end": 307
        },
        "start": 272,
        "end": 307
      },
      "directive": null,
      "start": 272,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 323
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 327,
                "end": 333
              },
              "start": 325,
              "end": 333
            },
            "start": 324,
            "end": 333
          },
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 336,
            "end": 344
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 344
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 349,
              "end": 355
            },
            "start": 347,
            "end": 355
          },
          "start": 346,
          "end": 355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 371
              },
              "optional": false,
              "computed": false,
              "start": 363,
              "end": 371
            },
            "directive": null,
            "start": 363,
            "end": 372
          }
        ],
        "start": 357,
        "end": 374
      },
      "expression": false,
      "start": 310,
      "end": 374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 394,
            "end": 402
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 390,
          "end": 402
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 407,
              "end": 413
            },
            "start": 405,
            "end": 413
          },
          "start": 404,
          "end": 413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 429
              },
              "optional": false,
              "computed": false,
              "start": 421,
              "end": 429
            },
            "directive": null,
            "start": 421,
            "end": 430
          }
        ],
        "start": 415,
        "end": 456
      },
      "expression": false,
      "start": 376,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 471
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                    "start": 475,
                    "end": 481
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 484,
                    "end": 493
                  }
                ],
                "start": 475,
                "end": 493
              },
              "start": 473,
              "end": 493
            },
            "start": 472,
            "end": 493
          },
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 496,
            "end": 504
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 504
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 509,
              "end": 515
            },
            "start": 507,
            "end": 515
          },
          "start": 506,
          "end": 515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 531
              },
              "optional": false,
              "computed": false,
              "start": 523,
              "end": 531
            },
            "directive": null,
            "start": 523,
            "end": 532
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 562
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 574
              },
              "start": 561,
              "end": 574
            },
            "directive": null,
            "start": 561,
            "end": 575
          }
        ],
        "start": 517,
        "end": 577
      },
      "expression": false,
      "start": 458,
      "end": 577
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 588,
        "end": 592
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                    "start": 596,
                    "end": 602
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 605,
                    "end": 614
                  }
                ],
                "start": 596,
                "end": 614
              },
              "start": 594,
              "end": 614
            },
            "start": 593,
            "end": 614
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 626
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 626
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 631,
              "end": 637
            },
            "start": 629,
            "end": 637
          },
          "start": 628,
          "end": 637
        }
      ],
      "returnType": null,
      "body": {
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
              "start": 645,
              "end": 646
            },
            "directive": null,
            "start": 645,
            "end": 647
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 684,
                "end": 685
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 697
              },
              "start": 684,
              "end": 697
            },
            "directive": null,
            "start": 684,
            "end": 698
          }
        ],
        "start": 639,
        "end": 700
      },
      "expression": false,
      "start": 579,
      "end": 700
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalNullableString",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 729
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 732,
            "end": 738
          },
          {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 748,
            "end": 757
          }
        ],
        "start": 732,
        "end": 757
      },
      "declare": false,
      "start": 702,
      "end": 758
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "allowsNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 778
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionalNullableString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 806
                },
                "typeArguments": null,
                "start": 784,
                "end": 806
              },
              "start": 782,
              "end": 806
            },
            "start": 779,
            "end": 806
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 809,
            "end": 811
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 811
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
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 822
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 825,
                "end": 829
              },
              "start": 819,
              "end": 829
            },
            "directive": null,
            "start": 819,
            "end": 830
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 838
              },
              "right": {
                "type": "Literal",
                "value": "string and null are both ok",
                "raw": "'string and null are both ok'",
                "start": 841,
                "end": 870
              },
              "start": 835,
              "end": 870
            },
            "directive": null,
            "start": 835,
            "end": 871
          }
        ],
        "start": 813,
        "end": 873
      },
      "expression": false,
      "start": 759,
      "end": 873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "allowsNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 874,
          "end": 884
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 885,
            "end": 889
          }
        ],
        "optional": false,
        "start": 874,
        "end": 890
      },
      "directive": null,
      "start": 874,
      "end": 891
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 996,
          "end": 1000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1010
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1012,
            "end": 1013
          }
        ],
        "optional": false,
        "start": 996,
        "end": 1014
      },
      "directive": null,
      "start": 996,
      "end": 1015
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1016,
          "end": 1020
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1030
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1032,
            "end": 1033
          }
        ],
        "optional": false,
        "start": 1016,
        "end": 1034
      },
      "directive": null,
      "start": 1016,
      "end": 1035
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1036,
          "end": 1040
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1041,
            "end": 1050
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1052,
            "end": 1053
          }
        ],
        "optional": false,
        "start": 1036,
        "end": 1054
      },
      "directive": null,
      "start": 1036,
      "end": 1055
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1056,
          "end": 1060
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1070
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1072,
            "end": 1073
          }
        ],
        "optional": false,
        "start": 1056,
        "end": 1074
      },
      "directive": null,
      "start": 1056,
      "end": 1075
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "removeUndefinedButNotFalse",
        "optional": false,
        "typeAnnotation": null,
        "start": 1087,
        "end": 1113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1115
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1118,
            "end": 1122
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1114,
          "end": 1122
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
                "start": 1134,
                "end": 1135
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1140,
                "end": 1145
              },
              "start": 1134,
              "end": 1145
            },
            "consequent": {
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
                    "start": 1164,
                    "end": 1165
                  },
                  "start": 1157,
                  "end": 1166
                }
              ],
              "start": 1147,
              "end": 1172
            },
            "alternate": null,
            "start": 1130,
            "end": 1172
          }
        ],
        "start": 1124,
        "end": 1174
      },
      "expression": false,
      "start": 1078,
      "end": 1174
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1196,
                "end": 1203
              },
              "start": 1194,
              "end": 1203
            },
            "start": 1190,
            "end": 1203
          },
          "init": null,
          "definite": false,
          "start": 1190,
          "end": 1203
        }
      ],
      "declare": true,
      "start": 1176,
      "end": 1204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "removeNothing",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1227
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1229
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1236
            },
            "consequent": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1239,
              "end": 1243
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1246,
              "end": 1255
            },
            "start": 1232,
            "end": 1255
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1228,
          "end": 1255
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1267,
                "end": 1268
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1282
              },
              "start": 1267,
              "end": 1282
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1299
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1304,
                      "end": 1309
                    },
                    "start": 1298,
                    "end": 1309
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1332,
                          "end": 1333
                        },
                        "start": 1325,
                        "end": 1334
                      }
                    ],
                    "start": 1311,
                    "end": 1344
                  },
                  "alternate": null,
                  "start": 1294,
                  "end": 1344
                }
              ],
              "start": 1284,
              "end": 1350
            },
            "alternate": null,
            "start": 1263,
            "end": 1350
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1362,
              "end": 1366
            },
            "start": 1355,
            "end": 1367
          }
        ],
        "start": 1257,
        "end": 1369
      },
      "expression": false,
      "start": 1205,
      "end": 1369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1369
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "addUndefined1",
    "start": 11,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"J\"",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "addUndefined2",
    "start": 32,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 62,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "addUndefined1",
    "start": 69,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "addUndefined2",
    "start": 93,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 107,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 125,
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
    "value": "addUndefined",
    "start": 127,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"J\"",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "addDefined",
    "start": 147,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 159,
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
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "addUndefined",
    "start": 180,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "addDefined",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 241,
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
    "value": "+",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 257,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "total",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 305,
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
    "value": "function",
    "start": 310,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 336,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 458,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 467,
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
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 484,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "length",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 565,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 579,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 605,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 617,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 631,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 688,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 702,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "OptionalNullableString",
    "start": 707,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 739,
    "end": 740
  },
  {
    "type": "Null",
    "value": "null",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 748,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 759,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "allowsNull",
    "start": 768,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "OptionalNullableString",
    "start": 784,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 809,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Null",
    "value": "null",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "String",
    "value": "'string and null are both ok'",
    "start": 841,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "allowsNull",
    "start": 874,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Null",
    "value": "null",
    "start": 885,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 996,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1016,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1041,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1056,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1061,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1072,
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
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1078,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "removeUndefinedButNotFalse",
    "start": 1087,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1118,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1130,
    "end": 1132
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
    "value": "===",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1176,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1196,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1205,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "removeNothing",
    "start": 1214,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1232,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1239,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1246,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1273,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1304,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1362,
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
    "start": 1368,
    "end": 1369
  }
]
```

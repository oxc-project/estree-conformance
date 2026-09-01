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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 60
          }
        ],
        "start": 44,
        "end": 62
      },
      "declare": false,
      "start": 32,
      "end": 62
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 75
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              },
              "start": 83,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 92
          }
        ],
        "start": 76,
        "end": 94
      },
      "declare": false,
      "start": 64,
      "end": 94
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isX",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 116
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 122,
              "end": 125
            },
            "start": 120,
            "end": 125
          },
          "start": 117,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "start": 135,
              "end": 136
            },
            "start": 135,
            "end": 136
          },
          "start": 128,
          "end": 136
        },
        "start": 126,
        "end": 136
      },
      "body": null,
      "expression": false,
      "start": 96,
      "end": 137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isY",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 158
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 164,
              "end": 167
            },
            "start": 162,
            "end": 167
          },
          "start": 159,
          "end": 167
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 173
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "typeArguments": null,
              "start": 177,
              "end": 178
            },
            "start": 177,
            "end": 178
          },
          "start": 170,
          "end": 178
        },
        "start": 168,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 138,
      "end": 179
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isZ",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 206,
              "end": 209
            },
            "start": 204,
            "end": 209
          },
          "start": 201,
          "end": 209
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              "typeArguments": null,
              "start": 219,
              "end": 220
            },
            "start": 219,
            "end": 220
          },
          "start": 212,
          "end": 220
        },
        "start": 210,
        "end": 220
      },
      "body": null,
      "expression": false,
      "start": 180,
      "end": 221
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 246
              },
              "typeArguments": null,
              "start": 240,
              "end": 246
            },
            "start": 238,
            "end": 246
          },
          "start": 235,
          "end": 246
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
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 261
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 265
                    }
                  ],
                  "optional": false,
                  "start": 258,
                  "end": 266
                },
                "operator": "||",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 273
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 277
                    }
                  ],
                  "optional": false,
                  "start": 270,
                  "end": 278
                },
                "start": 258,
                "end": 278
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isZ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 285
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 286,
                    "end": 289
                  }
                ],
                "optional": false,
                "start": 282,
                "end": 290
              },
              "start": 258,
              "end": 290
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 305
                  },
                  "directive": null,
                  "start": 302,
                  "end": 306
                }
              ],
              "start": 292,
              "end": 312
            },
            "alternate": null,
            "start": 254,
            "end": 312
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 324
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 328
                    }
                  ],
                  "optional": false,
                  "start": 321,
                  "end": 329
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 336
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 340
                    }
                  ],
                  "optional": false,
                  "start": 333,
                  "end": 341
                },
                "start": 321,
                "end": 341
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isZ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 348
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 352
                  }
                ],
                "optional": false,
                "start": 345,
                "end": 353
              },
              "start": 321,
              "end": 353
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 368
                  },
                  "directive": null,
                  "start": 365,
                  "end": 369
                }
              ],
              "start": 355,
              "end": 375
            },
            "alternate": null,
            "start": 317,
            "end": 375
          }
        ],
        "start": 248,
        "end": 377
      },
      "expression": false,
      "start": 223,
      "end": 377
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 429
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 437,
                "end": 443
              },
              "start": 435,
              "end": 443
            },
            "accessibility": null,
            "static": false,
            "start": 434,
            "end": 444
          }
        ],
        "start": 430,
        "end": 446
      },
      "declare": false,
      "start": 418,
      "end": 446
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 459
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 467,
                "end": 473
              },
              "start": 465,
              "end": 473
            },
            "accessibility": null,
            "static": false,
            "start": 464,
            "end": 474
          }
        ],
        "start": 460,
        "end": 476
      },
      "declare": false,
      "start": 448,
      "end": 476
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 512
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "toTest",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 521,
              "end": 524
            },
            "start": 519,
            "end": 524
          },
          "start": 513,
          "end": 524
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "toTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 533
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "typeArguments": null,
              "start": 537,
              "end": 538
            },
            "start": 537,
            "end": 538
          },
          "start": 527,
          "end": 538
        },
        "start": 525,
        "end": 538
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "toTest",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 556
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toTest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 566
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "optional": false,
                "computed": false,
                "start": 560,
                "end": 568
              },
              "start": 550,
              "end": 568
            },
            "start": 543,
            "end": 569
          }
        ],
        "start": 539,
        "end": 571
      },
      "expression": false,
      "start": 500,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 631
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "start": 635,
                "end": 636
              },
              "typeArguments": null,
              "start": 635,
              "end": 636
            },
            "start": 633,
            "end": 636
          },
          "start": 632,
          "end": 636
        }
      ],
      "returnType": {
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 640
                  },
                  "typeArguments": null,
                  "start": 639,
                  "end": 640
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 643,
                    "end": 644
                  },
                  "typeArguments": null,
                  "start": 643,
                  "end": 644
                }
              ],
              "start": 639,
              "end": 644
            },
            {
              "type": "TSNullKeyword",
              "start": 647,
              "end": 651
            }
          ],
          "start": 639,
          "end": 651
        },
        "start": 637,
        "end": 651
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 663
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                }
              ],
              "optional": false,
              "start": 660,
              "end": 666
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 682
                  },
                  "start": 674,
                  "end": 683
                }
              ],
              "start": 668,
              "end": 687
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 706,
                    "end": 710
                  },
                  "start": 699,
                  "end": 711
                }
              ],
              "start": 693,
              "end": 715
            },
            "start": 656,
            "end": 715
          }
        ],
        "start": 652,
        "end": 717
      },
      "expression": false,
      "start": 617,
      "end": 717
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 760
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 764,
              "end": 770
            },
            "start": 762,
            "end": 770
          },
          "start": 761,
          "end": 770
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 773,
          "end": 777
        },
        "start": 771,
        "end": 777
      },
      "body": null,
      "expression": false,
      "start": 740,
      "end": 778
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Beast",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 823
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
              "name": "wings",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 835
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 838,
                "end": 845
              },
              "start": 836,
              "end": 845
            },
            "accessibility": null,
            "static": false,
            "start": 830,
            "end": 846
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "legs",
              "optional": false,
              "typeAnnotation": null,
              "start": 847,
              "end": 851
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 854,
                "end": 860
              },
              "start": 852,
              "end": 860
            },
            "accessibility": null,
            "static": false,
            "start": 847,
            "end": 860
          }
        ],
        "start": 828,
        "end": 862
      },
      "declare": false,
      "start": 808,
      "end": 862
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Legged",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 879
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
              "name": "legs",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 889
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 891,
                "end": 897
              },
              "start": 889,
              "end": 897
            },
            "accessibility": null,
            "static": false,
            "start": 885,
            "end": 898
          }
        ],
        "start": 883,
        "end": 900
      },
      "declare": false,
      "start": 863,
      "end": 900
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Winged",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 917
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
              "name": "wings",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 928
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 930,
                "end": 937
              },
              "start": 928,
              "end": 937
            },
            "accessibility": null,
            "static": false,
            "start": 923,
            "end": 938
          }
        ],
        "start": 921,
        "end": 940
      },
      "declare": false,
      "start": 901,
      "end": 940
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasLegs",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1014
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
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1023
              },
              "typeArguments": null,
              "start": 1018,
              "end": 1023
            },
            "start": 1016,
            "end": 1023
          },
          "start": 1015,
          "end": 1023
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
            "start": 1026,
            "end": 1027
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Legged",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1037
              },
              "typeArguments": null,
              "start": 1031,
              "end": 1037
            },
            "start": 1031,
            "end": 1037
          },
          "start": 1026,
          "end": 1037
        },
        "start": 1024,
        "end": 1037
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1047,
                "end": 1048
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1059,
                      "end": 1060
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "legs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1065
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1059,
                    "end": 1065
                  },
                  "prefix": true,
                  "start": 1052,
                  "end": 1065
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 1070,
                  "end": 1078
                },
                "start": 1052,
                "end": 1078
              },
              "start": 1047,
              "end": 1078
            },
            "start": 1040,
            "end": 1079
          }
        ],
        "start": 1038,
        "end": 1081
      },
      "expression": false,
      "start": 998,
      "end": 1081
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasWings",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1099
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
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1108
              },
              "typeArguments": null,
              "start": 1103,
              "end": 1108
            },
            "start": 1101,
            "end": 1108
          },
          "start": 1100,
          "end": 1108
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
            "start": 1111,
            "end": 1112
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Winged",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1122
              },
              "typeArguments": null,
              "start": 1116,
              "end": 1122
            },
            "start": 1116,
            "end": 1122
          },
          "start": 1111,
          "end": 1122
        },
        "start": 1109,
        "end": 1122
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1132,
                "end": 1133
              },
              "operator": "&&",
              "right": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1139,
                      "end": 1140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1139,
                    "end": 1146
                  },
                  "prefix": true,
                  "start": 1138,
                  "end": 1146
                },
                "prefix": true,
                "start": 1137,
                "end": 1146
              },
              "start": 1132,
              "end": 1146
            },
            "start": 1125,
            "end": 1147
          }
        ],
        "start": 1123,
        "end": 1149
      },
      "expression": false,
      "start": 1082,
      "end": 1149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identifyBeast",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1237
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "beast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Beast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1250
              },
              "typeArguments": null,
              "start": 1245,
              "end": 1250
            },
            "start": 1243,
            "end": 1250
          },
          "start": 1238,
          "end": 1250
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasLegs",
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1298
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "beast",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1304
                }
              ],
              "optional": false,
              "start": 1291,
              "end": 1305
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasWings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1369
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "beast",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1375
                      }
                    ],
                    "optional": false,
                    "start": 1361,
                    "end": 1376
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "beast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1396,
                              "end": 1401
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "legs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1406
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1396,
                            "end": 1406
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 1411,
                            "end": 1412
                          },
                          "start": 1396,
                          "end": 1412
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1432,
                                  "end": 1435
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "TemplateLiteral",
                                    "quasis": [
                                      {
                                        "type": "TemplateElement",
                                        "value": {
                                          "raw": "pegasus - 4 legs, wings",
                                          "cooked": "pegasus - 4 legs, wings"
                                        },
                                        "tail": true,
                                        "start": 1436,
                                        "end": 1461
                                      }
                                    ],
                                    "expressions": [],
                                    "start": 1436,
                                    "end": 1461
                                  }
                                ],
                                "optional": false,
                                "start": 1432,
                                "end": 1462
                              },
                              "directive": null,
                              "start": 1432,
                              "end": 1463
                            }
                          ],
                          "start": 1414,
                          "end": 1477
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "beast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1499,
                                "end": 1504
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "legs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1505,
                                "end": 1509
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1499,
                              "end": 1509
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 1514,
                              "end": 1515
                            },
                            "start": 1499,
                            "end": 1515
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1535,
                                    "end": 1538
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "bird - 2 legs, wings",
                                            "cooked": "bird - 2 legs, wings"
                                          },
                                          "tail": true,
                                          "start": 1539,
                                          "end": 1561
                                        }
                                      ],
                                      "expressions": [],
                                      "start": 1539,
                                      "end": 1561
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1535,
                                  "end": 1562
                                },
                                "directive": null,
                                "start": 1535,
                                "end": 1563
                              }
                            ],
                            "start": 1517,
                            "end": 1577
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1613,
                                    "end": 1616
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "unknown - ",
                                            "cooked": "unknown - "
                                          },
                                          "tail": false,
                                          "start": 1617,
                                          "end": 1630
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": " legs, wings",
                                            "cooked": " legs, wings"
                                          },
                                          "tail": true,
                                          "start": 1640,
                                          "end": 1654
                                        }
                                      ],
                                      "expressions": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "beast",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1630,
                                            "end": 1635
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "legs",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1636,
                                            "end": 1640
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1630,
                                          "end": 1640
                                        }
                                      ],
                                      "start": 1617,
                                      "end": 1654
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1613,
                                  "end": 1655
                                },
                                "directive": null,
                                "start": 1613,
                                "end": 1656
                              }
                            ],
                            "start": 1595,
                            "end": 1670
                          },
                          "start": 1495,
                          "end": 1670
                        },
                        "start": 1392,
                        "end": 1670
                      }
                    ],
                    "start": 1378,
                    "end": 1680
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1752,
                            "end": 1755
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "manbearpig - ",
                                    "cooked": "manbearpig - "
                                  },
                                  "tail": false,
                                  "start": 1756,
                                  "end": 1772
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": " legs, no wings",
                                    "cooked": " legs, no wings"
                                  },
                                  "tail": true,
                                  "start": 1782,
                                  "end": 1799
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "beast",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1772,
                                    "end": 1777
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "legs",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1778,
                                    "end": 1782
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1772,
                                  "end": 1782
                                }
                              ],
                              "start": 1756,
                              "end": 1799
                            }
                          ],
                          "optional": false,
                          "start": 1752,
                          "end": 1800
                        },
                        "directive": null,
                        "start": 1752,
                        "end": 1801
                      }
                    ],
                    "start": 1738,
                    "end": 1811
                  },
                  "start": 1357,
                  "end": 1811
                }
              ],
              "start": 1307,
              "end": 1817
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hasWings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1877,
                      "end": 1885
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "beast",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1886,
                        "end": 1891
                      }
                    ],
                    "optional": false,
                    "start": 1877,
                    "end": 1892
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1908,
                            "end": 1911
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "quetzalcoatl - no legs, wings",
                                    "cooked": "quetzalcoatl - no legs, wings"
                                  },
                                  "tail": true,
                                  "start": 1912,
                                  "end": 1943
                                }
                              ],
                              "expressions": [],
                              "start": 1912,
                              "end": 1943
                            }
                          ],
                          "optional": false,
                          "start": 1908,
                          "end": 1944
                        },
                        "directive": null,
                        "start": 1908,
                        "end": 1944
                      }
                    ],
                    "start": 1894,
                    "end": 1954
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1982,
                            "end": 1985
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "snake - no legs, no wings",
                                    "cooked": "snake - no legs, no wings"
                                  },
                                  "tail": true,
                                  "start": 1986,
                                  "end": 2013
                                }
                              ],
                              "expressions": [],
                              "start": 1986,
                              "end": 2013
                            }
                          ],
                          "optional": false,
                          "start": 1982,
                          "end": 2014
                        },
                        "directive": null,
                        "start": 1982,
                        "end": 2014
                      }
                    ],
                    "start": 1968,
                    "end": 2024
                  },
                  "start": 1873,
                  "end": 2024
                }
              ],
              "start": 1863,
              "end": 2030
            },
            "start": 1287,
            "end": 2030
          }
        ],
        "start": 1252,
        "end": 2032
      },
      "expression": false,
      "start": 1215,
      "end": 2032
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "beastFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2051
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "beast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2065
              },
              "typeArguments": null,
              "start": 2059,
              "end": 2065
            },
            "start": 2057,
            "end": 2065
          },
          "start": 2052,
          "end": 2065
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasWings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2077,
                  "end": 2085
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2086,
                    "end": 2091
                  }
                ],
                "optional": false,
                "start": 2077,
                "end": 2092
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasLegs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2096,
                  "end": 2103
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2109
                  }
                ],
                "optional": false,
                "start": 2096,
                "end": 2110
              },
              "start": 2077,
              "end": 2110
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2122,
                    "end": 2127
                  },
                  "directive": null,
                  "start": 2122,
                  "end": 2128
                }
              ],
              "start": 2112,
              "end": 2154
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2174,
                    "end": 2179
                  },
                  "directive": null,
                  "start": 2174,
                  "end": 2180
                }
              ],
              "start": 2164,
              "end": 2186
            },
            "start": 2073,
            "end": 2186
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasLegs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2203
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2204,
                    "end": 2209
                  }
                ],
                "optional": false,
                "start": 2196,
                "end": 2210
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasWings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2222
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2223,
                    "end": 2228
                  }
                ],
                "optional": false,
                "start": 2214,
                "end": 2229
              },
              "start": 2196,
              "end": 2229
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "beast",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2241,
                    "end": 2246
                  },
                  "directive": null,
                  "start": 2241,
                  "end": 2247
                }
              ],
              "start": 2231,
              "end": 2273
            },
            "alternate": null,
            "start": 2192,
            "end": 2273
          }
        ],
        "start": 2067,
        "end": 2275
      },
      "expression": false,
      "start": 2034,
      "end": 2275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2275
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
    "type": "Identifier",
    "value": "x",
    "start": 18,
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
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 64,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 96,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "isX",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
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
    "value": "obj",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 138,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 146,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "isY",
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
    "value": "obj",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "obj",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 174,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 180,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 188,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "isZ",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 216,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Z",
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
    "value": "function",
    "start": 223,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "isX",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "isY",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "isZ",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "isX",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 330,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "isY",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "isZ",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 349,
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
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 418,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 448,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 500,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "isB",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "toTest",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "toTest",
    "start": 527,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 534,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 543,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "toTest",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 557,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "toTest",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 617,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 626,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 645,
    "end": 646
  },
  {
    "type": "Null",
    "value": "null",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
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
    "value": "isB",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 674,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 681,
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
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 699,
    "end": 705
  },
  {
    "type": "Null",
    "value": "null",
    "start": 706,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 740,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 748,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 764,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 808,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Beast",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "wings",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 838,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 863,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Legged",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 885,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 901,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "Winged",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "wings",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 930,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 998,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "hasLegs",
    "start": 1007,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "Beast",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "Legged",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 1070,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1082,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "hasWings",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "Beast",
    "start": 1103,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "Winged",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "wings",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1215,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "identifyBeast",
    "start": 1224,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1238,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "Beast",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1287,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "hasLegs",
    "start": 1291,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "hasWings",
    "start": 1361,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1392,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 1402,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1407,
    "end": 1410
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
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
    "value": "log",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Template",
    "value": "`pegasus - 4 legs, wings`",
    "start": 1436,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1495,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1499,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Template",
    "value": "`bird - 2 legs, wings`",
    "start": 1539,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1590,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Template",
    "value": "`unknown - ${",
    "start": 1617,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1630,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Template",
    "value": "} legs, wings`",
    "start": 1640,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1733,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1752,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Template",
    "value": "`manbearpig - ${",
    "start": 1756,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1772,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "legs",
    "start": 1778,
    "end": 1782
  },
  {
    "type": "Template",
    "value": "} legs, no wings`",
    "start": 1782,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1858,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1873,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "hasWings",
    "start": 1877,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 1886,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1908,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Template",
    "value": "`quetzalcoatl - no legs, wings`",
    "start": 1912,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1963,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Template",
    "value": "`snake - no legs, no wings`",
    "start": 1986,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "beastFoo",
    "start": 2043,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2052,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2059,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2073,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "hasWings",
    "start": 2077,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2086,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2093,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "hasLegs",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2104,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2122,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2159,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2174,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2192,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "hasLegs",
    "start": 2196,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2204,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2211,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "hasWings",
    "start": 2214,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2223,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "beast",
    "start": 2241,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2274,
    "end": 2275
  }
]
```

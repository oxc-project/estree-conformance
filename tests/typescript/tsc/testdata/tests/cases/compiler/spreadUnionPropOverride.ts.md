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
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 31
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 51
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 70
          }
        ],
        "start": 34,
        "end": 72
      },
      "declare": false,
      "start": 21,
      "end": 73
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
            "name": "things",
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
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 94
                },
                "start": 89,
                "end": 96
              },
              "start": 87,
              "end": 96
            },
            "start": 81,
            "end": 96
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 99,
            "end": 101
          },
          "definite": false,
          "start": 81,
          "end": 101
        }
      ],
      "declare": false,
      "start": 75,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "find",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 117
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 122,
              "end": 128
            },
            "start": 120,
            "end": 128
          },
          "start": 118,
          "end": 128
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSUndefinedKeyword",
              "start": 131,
              "end": 140
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 148
              },
              "typeArguments": null,
              "start": 143,
              "end": 148
            }
          ],
          "start": 131,
          "end": 148
        },
        "start": 129,
        "end": 148
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "things",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 168
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "find",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 162,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 179
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 188
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 191
                      },
                      "optional": false,
                      "computed": false,
                      "start": 183,
                      "end": 191
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 198
                    },
                    "start": 183,
                    "end": 198
                  },
                  "id": null,
                  "generator": false,
                  "start": 174,
                  "end": 198
                }
              ],
              "optional": false,
              "start": 162,
              "end": 199
            },
            "start": 155,
            "end": 200
          }
        ],
        "start": 149,
        "end": 202
      },
      "expression": false,
      "start": 104,
      "end": 202
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 237
              },
              "typeArguments": null,
              "start": 232,
              "end": 237
            },
            "start": 230,
            "end": 237
          },
          "start": 225,
          "end": 237
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 240,
          "end": 244
        },
        "start": 238,
        "end": 244
      },
      "body": null,
      "expression": false,
      "start": 204,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 259
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 261,
                  "end": 266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 266
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 280,
                        "end": 285
                      }
                    ],
                    "optional": false,
                    "start": 275,
                    "end": 286
                  },
                  "operator": "??",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "label",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 305
                        },
                        "value": {
                          "type": "Literal",
                          "value": "Foo",
                          "raw": "'Foo'",
                          "start": 307,
                          "end": 312
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 300,
                        "end": 312
                      }
                    ],
                    "start": 290,
                    "end": 319
                  },
                  "start": 275,
                  "end": 319
                },
                "start": 272,
                "end": 319
              }
            ],
            "start": 251,
            "end": 322
          }
        ],
        "optional": false,
        "start": 247,
        "end": 323
      },
      "directive": null,
      "start": 247,
      "end": 324
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 420
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
                  "start": 429,
                  "end": 430
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 432,
                  "end": 433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 429,
                "end": 433
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 447
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 454
                        },
                        "optional": false,
                        "computed": false,
                        "start": 443,
                        "end": 454
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 443,
                      "end": 456
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 459,
                      "end": 462
                    },
                    "start": 443,
                    "end": 462
                  },
                  "consequent": {
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
                          "start": 467,
                          "end": 468
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 470,
                          "end": 471
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 467,
                        "end": 471
                      }
                    ],
                    "start": 465,
                    "end": 473
                  },
                  "alternate": {
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
                          "start": 478,
                          "end": 479
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 481,
                          "end": 482
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 478,
                        "end": 482
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 485
                        },
                        "value": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 487,
                          "end": 488
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 484,
                        "end": 488
                      }
                    ],
                    "start": 476,
                    "end": 490
                  },
                  "start": 443,
                  "end": 490
                },
                "start": 439,
                "end": 491
              }
            ],
            "start": 423,
            "end": 494
          },
          "definite": false,
          "start": 416,
          "end": 494
        }
      ],
      "declare": false,
      "start": 410,
      "end": 495
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 595
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
                  "start": 604,
                  "end": 605
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 607,
                  "end": 608
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 604,
                "end": 608
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 618,
                          "end": 622
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 623,
                          "end": 629
                        },
                        "optional": false,
                        "computed": false,
                        "start": 618,
                        "end": 629
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 618,
                      "end": 631
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 634,
                      "end": 637
                    },
                    "start": 618,
                    "end": 637
                  },
                  "consequent": {
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
                          "start": 642,
                          "end": 643
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 645,
                          "end": 646
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 642,
                        "end": 646
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 648,
                          "end": 649
                        },
                        "value": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 651,
                          "end": 652
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 648,
                        "end": 652
                      }
                    ],
                    "start": 640,
                    "end": 654
                  },
                  "alternate": {
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
                          "start": 659,
                          "end": 660
                        },
                        "value": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 662,
                          "end": 663
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 659,
                        "end": 663
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
                        "value": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 668,
                          "end": 669
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 665,
                        "end": 669
                      }
                    ],
                    "start": 657,
                    "end": 671
                  },
                  "start": 618,
                  "end": 671
                },
                "start": 614,
                "end": 672
              }
            ],
            "start": 598,
            "end": 675
          },
          "definite": false,
          "start": 591,
          "end": 675
        }
      ],
      "declare": false,
      "start": 585,
      "end": 676
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Partial1",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 778
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 786,
                "end": 792
              },
              "start": 784,
              "end": 792
            },
            "accessibility": null,
            "static": false,
            "start": 783,
            "end": 793
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 798,
                "end": 804
              },
              "start": 796,
              "end": 804
            },
            "accessibility": null,
            "static": false,
            "start": 794,
            "end": 804
          }
        ],
        "start": 781,
        "end": 806
      },
      "declare": false,
      "start": 765,
      "end": 807
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Partial2",
        "optional": false,
        "typeAnnotation": null,
        "start": 813,
        "end": 821
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 827
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 829,
                "end": 835
              },
              "start": 827,
              "end": 835
            },
            "accessibility": null,
            "static": false,
            "start": 826,
            "end": 836
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 838
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 840,
                "end": 847
              },
              "start": 838,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 837,
            "end": 847
          }
        ],
        "start": 824,
        "end": 849
      },
      "declare": false,
      "start": 808,
      "end": 850
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
            "name": "partial",
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
                      "name": "Partial1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 874,
                      "end": 882
                    },
                    "typeArguments": null,
                    "start": 874,
                    "end": 882
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 893
                    },
                    "typeArguments": null,
                    "start": 885,
                    "end": 893
                  }
                ],
                "start": 874,
                "end": 893
              },
              "start": 872,
              "end": 893
            },
            "start": 865,
            "end": 893
          },
          "init": null,
          "definite": false,
          "start": 865,
          "end": 893
        }
      ],
      "declare": true,
      "start": 851,
      "end": 894
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 906
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 916
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 918,
                  "end": 920
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 915,
                "end": 920
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 936
                },
                "start": 926,
                "end": 936
              }
            ],
            "start": 909,
            "end": 939
          },
          "definite": false,
          "start": 902,
          "end": 939
        }
      ],
      "declare": false,
      "start": 896,
      "end": 940
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
            "name": "obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1065
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1075
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 1077,
                  "end": 1083
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1074,
                "end": 1083
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1092,
                  "end": 1099
                },
                "start": 1089,
                "end": 1099
              }
            ],
            "start": 1068,
            "end": 1102
          },
          "definite": false,
          "start": 1061,
          "end": 1102
        }
      ],
      "declare": false,
      "start": 1055,
      "end": 1103
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1177
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1182,
              "end": 1184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1186,
                "end": 1192
              },
              "start": 1184,
              "end": 1192
            },
            "accessibility": null,
            "static": false,
            "start": 1182,
            "end": 1193
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1200,
                "end": 1206
              },
              "start": 1198,
              "end": 1206
            },
            "accessibility": null,
            "static": false,
            "start": 1194,
            "end": 1206
          }
        ],
        "start": 1180,
        "end": 1208
      },
      "declare": false,
      "start": 1171,
      "end": 1209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1215,
        "end": 1216
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1225
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1227,
                "end": 1233
              },
              "start": 1225,
              "end": 1233
            },
            "accessibility": null,
            "static": false,
            "start": 1221,
            "end": 1234
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1240,
                "end": 1246
              },
              "start": 1238,
              "end": 1246
            },
            "accessibility": null,
            "static": false,
            "start": 1235,
            "end": 1246
          }
        ],
        "start": 1219,
        "end": 1248
      },
      "declare": false,
      "start": 1210,
      "end": 1249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1256
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1267,
                "end": 1273
              },
              "start": 1265,
              "end": 1273
            },
            "accessibility": null,
            "static": false,
            "start": 1261,
            "end": 1273
          }
        ],
        "start": 1259,
        "end": 1275
      },
      "declare": false,
      "start": 1250,
      "end": 1276
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
            "name": "abc",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1297,
                      "end": 1298
                    },
                    "typeArguments": null,
                    "start": 1297,
                    "end": 1298
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1301,
                      "end": 1302
                    },
                    "typeArguments": null,
                    "start": 1301,
                    "end": 1302
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1306
                    },
                    "typeArguments": null,
                    "start": 1305,
                    "end": 1306
                  }
                ],
                "start": 1297,
                "end": 1306
              },
              "start": 1295,
              "end": 1306
            },
            "start": 1292,
            "end": 1306
          },
          "init": null,
          "definite": false,
          "start": 1292,
          "end": 1306
        }
      ],
      "declare": true,
      "start": 1278,
      "end": 1307
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
            "name": "obj5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1319
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1330
                },
                "value": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "\"123\"",
                  "start": 1332,
                  "end": 1337
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1328,
                "end": 1337
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1346,
                  "end": 1349
                },
                "start": 1343,
                "end": 1349
              }
            ],
            "start": 1322,
            "end": 1352
          },
          "definite": false,
          "start": 1315,
          "end": 1352
        }
      ],
      "declare": false,
      "start": 1309,
      "end": 1353
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
            "name": "obj6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1385,
            "end": 1389
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1402
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 1404,
                  "end": 1410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1398,
                "end": 1410
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1419,
                  "end": 1422
                },
                "start": 1416,
                "end": 1422
              }
            ],
            "start": 1392,
            "end": 1425
          },
          "definite": false,
          "start": 1385,
          "end": 1425
        }
      ],
      "declare": false,
      "start": 1379,
      "end": 1426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1458
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
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
    "value": "id",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "things",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 118,
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
    "value": "string",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "things",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 204,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 280,
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
    "value": "??",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "'Foo'",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 410,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "y",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 585,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 614,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 765,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "Partial1",
    "start": 770,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 786,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 808,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "Partial2",
    "start": 813,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 840,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 851,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 859,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 865,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Partial1",
    "start": 874,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "Partial2",
    "start": 885,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 896,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 902,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Numeric",
    "value": "42",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 926,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1055,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 1077,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 1092,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1194,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1210,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1221,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1267,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1278,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1315,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1328,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 1332,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1379,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1398,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1419,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  }
]
```

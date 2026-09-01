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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 25,
            "end": 28
          },
          "definite": false,
          "start": 21,
          "end": 28
        }
      ],
      "declare": false,
      "start": 15,
      "end": 29
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "init": {
            "type": "Literal",
            "value": "d",
            "raw": "'d'",
            "start": 40,
            "end": 43
          },
          "definite": false,
          "start": 36,
          "end": 43
        }
      ],
      "declare": false,
      "start": 30,
      "end": 44
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 69
          }
        ],
        "start": 55,
        "end": 71
      },
      "declare": false,
      "start": 46,
      "end": 72
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 79
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 84,
            "end": 96
          }
        ],
        "start": 82,
        "end": 98
      },
      "declare": false,
      "start": 73,
      "end": 99
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
            "name": "c",
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
                      "start": 118,
                      "end": 119
                    },
                    "typeArguments": null,
                    "start": 118,
                    "end": 119
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  }
                ],
                "start": 118,
                "end": 123
              },
              "start": 116,
              "end": 123
            },
            "start": 115,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 123
        }
      ],
      "declare": true,
      "start": 101,
      "end": 124
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "a",
          "raw": "'a'",
          "start": 130,
          "end": 133
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 138
        },
        "start": 130,
        "end": 138
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "directive": null,
            "start": 146,
            "end": 148
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "property": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 165,
                "end": 168
              },
              "optional": false,
              "computed": true,
              "start": 163,
              "end": 169
            },
            "directive": null,
            "start": 163,
            "end": 170
          }
        ],
        "start": 140,
        "end": 183
      },
      "alternate": null,
      "start": 126,
      "end": 183
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "d",
          "raw": "'d'",
          "start": 189,
          "end": 192
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "start": 189,
        "end": 197
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "directive": null,
            "start": 205,
            "end": 207
          }
        ],
        "start": 199,
        "end": 218
      },
      "alternate": null,
      "start": 185,
      "end": 218
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        },
        "start": 224,
        "end": 230
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "directive": null,
            "start": 238,
            "end": 240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "optional": false,
              "computed": true,
              "start": 253,
              "end": 257
            },
            "directive": null,
            "start": 253,
            "end": 258
          }
        ],
        "start": 232,
        "end": 271
      },
      "alternate": null,
      "start": 220,
      "end": 271
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
          "start": 277,
          "end": 278
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 283
        },
        "start": 277,
        "end": 283
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "directive": null,
            "start": 291,
            "end": 293
          }
        ],
        "start": 285,
        "end": 304
      },
      "alternate": null,
      "start": 273,
      "end": 304
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uniqueID_54790",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 397
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 405,
                  "end": 411
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 414,
                  "end": 423
                }
              ],
              "start": 405,
              "end": 423
            },
            "start": 403,
            "end": 423
          },
          "start": 401,
          "end": 423
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 444,
                          "end": 450
                        },
                        "start": 442,
                        "end": 450
                      },
                      "start": 439,
                      "end": 450
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 453,
                      "end": 459
                    },
                    "start": 451,
                    "end": 459
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 438,
                  "end": 459
                }
              ],
              "start": 436,
              "end": 461
            },
            "start": 434,
            "end": 461
          },
          "start": 427,
          "end": 461
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 465,
          "end": 471
        },
        "start": 463,
        "end": 471
      },
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 482
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 496
              },
              "start": 480,
              "end": 496
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 504,
                      "end": 506
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 509,
                      "end": 512
                    },
                    "start": 504,
                    "end": 512
                  },
                  "directive": null,
                  "start": 504,
                  "end": 513
                }
              ],
              "start": 498,
              "end": 517
            },
            "alternate": null,
            "start": 476,
            "end": 517
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 528
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "seenIDs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 539
                },
                "start": 526,
                "end": 539
              },
              "prefix": true,
              "start": 524,
              "end": 540
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 557
                  },
                  "start": 548,
                  "end": 558
                }
              ],
              "start": 542,
              "end": 562
            },
            "alternate": null,
            "start": 520,
            "end": 562
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 578,
                    "end": 579
                  },
                  "definite": false,
                  "start": 574,
                  "end": 579
                }
              ],
              "declare": false,
              "start": 570,
              "end": 579
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 582
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 591
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MAX_VALUE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 601
                },
                "optional": false,
                "computed": false,
                "start": 585,
                "end": 601
              },
              "start": 581,
              "end": 601
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 604
              },
              "start": 603,
              "end": 606
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 625
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 628,
                            "end": 631
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "-",
                              "cooked": "-"
                            },
                            "tail": false,
                            "start": 633,
                            "end": 637
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 638,
                            "end": 640
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 631,
                            "end": 633
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 637,
                            "end": 638
                          }
                        ],
                        "start": 628,
                        "end": 640
                      },
                      "definite": false,
                      "start": 620,
                      "end": 640
                    }
                  ],
                  "declare": false,
                  "start": 614,
                  "end": 641
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 657
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "seenIDs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 668
                      },
                      "start": 652,
                      "end": 668
                    },
                    "prefix": true,
                    "start": 650,
                    "end": 669
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "newID",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 691
                        },
                        "start": 679,
                        "end": 692
                      }
                    ],
                    "start": 671,
                    "end": 698
                  },
                  "alternate": null,
                  "start": 646,
                  "end": 698
                }
              ],
              "start": 608,
              "end": 702
            },
            "start": 565,
            "end": 702
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 716
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "heat death of the universe",
                  "raw": "\"heat death of the universe\"",
                  "start": 717,
                  "end": 745
                }
              ],
              "optional": false,
              "start": 711,
              "end": 746
            },
            "start": 705,
            "end": 747
          }
        ],
        "start": 472,
        "end": 749
      },
      "expression": false,
      "start": 374,
      "end": 749
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uniqueID_54790_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 776
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 781,
                  "end": 787
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 790,
                  "end": 796
                }
              ],
              "start": 781,
              "end": 796
            },
            "start": 779,
            "end": 796
          },
          "start": 777,
          "end": 796
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 807,
              "end": 813
            },
            "start": 805,
            "end": 813
          },
          "start": 798,
          "end": 813
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 821
              },
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 824,
                "end": 827
              },
              "start": 819,
              "end": 827
            },
            "directive": null,
            "start": 819,
            "end": 828
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 841
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 844,
                    "end": 845
                  },
                  "definite": false,
                  "start": 840,
                  "end": 845
                }
              ],
              "declare": false,
              "start": 836,
              "end": 845
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 848
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 851,
                "end": 852
              },
              "start": 847,
              "end": 852
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 855
              },
              "start": 854,
              "end": 857
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 871,
                        "end": 876
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 879,
                            "end": 882
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 884,
                            "end": 886
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 882,
                            "end": 884
                          }
                        ],
                        "start": 879,
                        "end": 886
                      },
                      "definite": false,
                      "start": 871,
                      "end": 886
                    }
                  ],
                  "declare": false,
                  "start": 865,
                  "end": 887
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 901
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "seenIDs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 912
                    },
                    "start": 896,
                    "end": 912
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 914,
                    "end": 921
                  },
                  "alternate": null,
                  "start": 892,
                  "end": 921
                }
              ],
              "start": 859,
              "end": 925
            },
            "start": 831,
            "end": 925
          }
        ],
        "start": 815,
        "end": 927
      },
      "expression": false,
      "start": 751,
      "end": 927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uniqueID_54790_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 954
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 959,
                  "end": 965
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 968,
                  "end": 974
                }
              ],
              "start": 959,
              "end": 974
            },
            "start": 957,
            "end": 974
          },
          "start": 955,
          "end": 974
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 985,
              "end": 991
            },
            "start": 983,
            "end": 991
          },
          "start": 976,
          "end": 991
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 997,
                "end": 999
              },
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1002,
                "end": 1005
              },
              "start": 997,
              "end": 1005
            },
            "directive": null,
            "start": 997,
            "end": 1006
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1018,
                    "end": 1019
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1022,
                    "end": 1023
                  },
                  "definite": false,
                  "start": 1018,
                  "end": 1023
                }
              ],
              "declare": false,
              "start": 1014,
              "end": 1023
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1025,
                "end": 1026
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1029,
                "end": 1030
              },
              "start": 1025,
              "end": 1030
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1033
              },
              "start": 1032,
              "end": 1035
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1049,
                        "end": 1054
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1059
                      },
                      "definite": false,
                      "start": 1049,
                      "end": 1059
                    }
                  ],
                  "declare": false,
                  "start": 1043,
                  "end": 1060
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1074
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "seenIDs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1078,
                      "end": 1085
                    },
                    "start": 1069,
                    "end": 1085
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1087,
                    "end": 1094
                  },
                  "alternate": null,
                  "start": 1065,
                  "end": 1094
                }
              ],
              "start": 1037,
              "end": 1098
            },
            "start": 1009,
            "end": 1098
          }
        ],
        "start": 993,
        "end": 1100
      },
      "expression": false,
      "start": 929,
      "end": 1100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1100
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
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 73,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
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
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Keyword",
    "value": "if",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 130,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
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
    "type": "String",
    "value": "'d'",
    "start": 189,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 193,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 226,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 374,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "uniqueID_54790",
    "start": 383,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 414,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 439,
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
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 465,
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
    "value": "if",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 483,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 487,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 526,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 529,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 532,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 548,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "MAX_VALUE",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 614,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 631,
    "end": 633
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 633,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 637,
    "end": 638
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 646,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 652,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 661,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 679,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 705,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 711,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "String",
    "value": "\"heat death of the universe\"",
    "start": 717,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "uniqueID_54790_2",
    "start": 760,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 777,
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
    "value": "string",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 788,
    "end": 789
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
    "value": "seenIDs",
    "start": 798,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 807,
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
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 842,
    "end": 843
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 844,
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
    "value": "i",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 865,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 871,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 879,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 882,
    "end": 884
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 884,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 892,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 896,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 902,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 905,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "uniqueID_54790_3",
    "start": 938,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 955,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 976,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 985,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 997,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Numeric",
    "value": "1",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 1049,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100
  }
]
```

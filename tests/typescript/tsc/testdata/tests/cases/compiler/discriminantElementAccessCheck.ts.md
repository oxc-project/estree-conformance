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
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 14
            },
            "typeArguments": null,
            "start": 9,
            "end": 14
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "typeArguments": null,
            "start": 17,
            "end": 22
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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 40
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 53,
                  "end": 56
                },
                "start": 53,
                "end": 56
              },
              "start": 51,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 57
          },
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
              "start": 62,
              "end": 63
            },
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
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 72
          }
        ],
        "start": 41,
        "end": 74
      },
      "declare": false,
      "start": 25,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 90
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 103,
                  "end": 106
                },
                "start": 103,
                "end": 106
              },
              "start": 101,
              "end": 106
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 107
          },
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
              "start": 112,
              "end": 113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              },
              "start": 113,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 112,
            "end": 122
          }
        ],
        "start": 91,
        "end": 124
      },
      "declare": false,
      "start": 75,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 146
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
              "type": "TSNeverKeyword",
              "start": 150,
              "end": 155
            },
            "start": 148,
            "end": 155
          },
          "start": 147,
          "end": 155
        }
      ],
      "returnType": null,
      "body": {
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
              "start": 170,
              "end": 171
            },
            "start": 163,
            "end": 172
          }
        ],
        "start": 157,
        "end": 174
      },
      "expression": false,
      "start": 126,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IfWithString",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 197
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "typeArguments": null,
              "start": 203,
              "end": 204
            },
            "start": 201,
            "end": 204
          },
          "start": 198,
          "end": 204
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 219
                },
                "property": {
                  "type": "Literal",
                  "value": "kind",
                  "raw": "'kind'",
                  "start": 220,
                  "end": 226
                },
                "optional": false,
                "computed": true,
                "start": 216,
                "end": 227
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 232,
                "end": 235
              },
              "start": 216,
              "end": 235
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 257
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "optional": false,
                    "computed": false,
                    "start": 254,
                    "end": 259
                  },
                  "start": 247,
                  "end": 260
                }
              ],
              "start": 237,
              "end": 266
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 292
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 294
                    },
                    "optional": false,
                    "computed": false,
                    "start": 289,
                    "end": 294
                  },
                  "start": 282,
                  "end": 295
                }
              ],
              "start": 272,
              "end": 301
            },
            "start": 212,
            "end": 301
          }
        ],
        "start": 206,
        "end": 303
      },
      "expression": false,
      "start": 176,
      "end": 303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SwitchWithString",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 330
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 337
              },
              "typeArguments": null,
              "start": 336,
              "end": 337
            },
            "start": 334,
            "end": 337
          },
          "start": 331,
          "end": 337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 356
              },
              "property": {
                "type": "Literal",
                "value": "kind",
                "raw": "'kind'",
                "start": 357,
                "end": 363
              },
              "optional": false,
              "computed": true,
              "start": 353,
              "end": 364
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 381,
                  "end": 384
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 408
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "optional": false,
                      "computed": false,
                      "start": 405,
                      "end": 410
                    },
                    "start": 398,
                    "end": 411
                  }
                ],
                "start": 376,
                "end": 411
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 425,
                  "end": 428
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 452
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 454
                      },
                      "optional": false,
                      "computed": false,
                      "start": 449,
                      "end": 454
                    },
                    "start": 442,
                    "end": 455
                  }
                ],
                "start": 420,
                "end": 455
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 503
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 504,
                          "end": 507
                        }
                      ],
                      "optional": false,
                      "start": 492,
                      "end": 508
                    },
                    "start": 485,
                    "end": 509
                  }
                ],
                "start": 464,
                "end": 509
              }
            ],
            "start": 345,
            "end": 515
          }
        ],
        "start": 339,
        "end": 517
      },
      "expression": false,
      "start": 305,
      "end": 517
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IfWithTemplate",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 542
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "typeArguments": null,
              "start": 548,
              "end": 549
            },
            "start": 546,
            "end": 549
          },
          "start": 543,
          "end": 549
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 564
                },
                "property": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "kind",
                        "cooked": "kind"
                      },
                      "tail": true,
                      "start": 565,
                      "end": 571
                    }
                  ],
                  "expressions": [],
                  "start": 565,
                  "end": 571
                },
                "optional": false,
                "computed": true,
                "start": 561,
                "end": 572
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 577,
                "end": 580
              },
              "start": 561,
              "end": 580
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 599,
                      "end": 602
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 604
                    },
                    "optional": false,
                    "computed": false,
                    "start": 599,
                    "end": 604
                  },
                  "start": 592,
                  "end": 605
                }
              ],
              "start": 582,
              "end": 611
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 637
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 639
                    },
                    "optional": false,
                    "computed": false,
                    "start": 634,
                    "end": 639
                  },
                  "start": 627,
                  "end": 640
                }
              ],
              "start": 617,
              "end": 646
            },
            "start": 557,
            "end": 646
          }
        ],
        "start": 551,
        "end": 648
      },
      "expression": false,
      "start": 519,
      "end": 648
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SwitchWithTemplate",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 677
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "typeArguments": null,
              "start": 683,
              "end": 684
            },
            "start": 681,
            "end": 684
          },
          "start": 678,
          "end": 684
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 703
              },
              "property": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "kind",
                      "cooked": "kind"
                    },
                    "tail": true,
                    "start": 704,
                    "end": 710
                  }
                ],
                "expressions": [],
                "start": 704,
                "end": 710
              },
              "optional": false,
              "computed": true,
              "start": 700,
              "end": 711
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 728,
                  "end": 731
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 752,
                        "end": 755
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 756,
                        "end": 757
                      },
                      "optional": false,
                      "computed": false,
                      "start": 752,
                      "end": 757
                    },
                    "start": 745,
                    "end": 758
                  }
                ],
                "start": 723,
                "end": 758
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 772,
                  "end": 775
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 796,
                        "end": 799
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 800,
                        "end": 801
                      },
                      "optional": false,
                      "computed": false,
                      "start": 796,
                      "end": 801
                    },
                    "start": 789,
                    "end": 802
                  }
                ],
                "start": 767,
                "end": 802
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 839,
                        "end": 850
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 854
                        }
                      ],
                      "optional": false,
                      "start": 839,
                      "end": 855
                    },
                    "start": 832,
                    "end": 856
                  }
                ],
                "start": 811,
                "end": 856
              }
            ],
            "start": 692,
            "end": 862
          }
        ],
        "start": 686,
        "end": 864
      },
      "expression": false,
      "start": 650,
      "end": 864
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 864
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
    "value": "U",
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
    "type": "Identifier",
    "value": "TypeA",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 75,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 85,
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
    "value": "kind",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 126,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 135,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 163,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 176,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "IfWithString",
    "start": 185,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 203,
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
    "type": "Keyword",
    "value": "if",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "'kind'",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 228,
    "end": 231
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 282,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "SwitchWithString",
    "start": 314,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 356,
    "end": 357
  },
  {
    "type": "String",
    "value": "'kind'",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 376,
    "end": 380
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 398,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "val",
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
    "value": "a",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 420,
    "end": 424
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 442,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Keyword",
    "value": "default",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 485,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 492,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 519,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "IfWithTemplate",
    "start": 528,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 543,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Template",
    "value": "`kind`",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 573,
    "end": 576
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 577,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 592,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 627,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 650,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "SwitchWithTemplate",
    "start": 659,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 700,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 703,
    "end": 704
  },
  {
    "type": "Template",
    "value": "`kind`",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 723,
    "end": 727
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 745,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "case",
    "start": 767,
    "end": 771
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 789,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 811,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 832,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 839,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 851,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  }
]
```

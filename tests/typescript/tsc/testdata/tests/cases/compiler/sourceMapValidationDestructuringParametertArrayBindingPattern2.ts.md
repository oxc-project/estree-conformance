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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            ],
            "start": 72,
            "end": 88
          }
        ],
        "start": 63,
        "end": 89
      },
      "declare": false,
      "start": 50,
      "end": 90
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "typeArguments": null,
                "start": 103,
                "end": 108
              },
              "start": 101,
              "end": 108
            },
            "start": 95,
            "end": 108
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 112,
                "end": 121
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "trimming",
                    "raw": "\"trimming\"",
                    "start": 124,
                    "end": 134
                  },
                  {
                    "type": "Literal",
                    "value": "edging",
                    "raw": "\"edging\"",
                    "start": 136,
                    "end": 144
                  }
                ],
                "start": 123,
                "end": 145
              }
            ],
            "start": 111,
            "end": 146
          },
          "definite": false,
          "start": 95,
          "end": 146
        }
      ],
      "declare": false,
      "start": 91,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 172
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 180
              },
              "typeArguments": null,
              "start": 175,
              "end": 180
            },
            "start": 173,
            "end": 180
          },
          "start": 163,
          "end": 180
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 188,
                  "end": 195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 199
                },
                "optional": false,
                "computed": false,
                "start": 188,
                "end": 199
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 206
                }
              ],
              "optional": false,
              "start": 188,
              "end": 207
            },
            "directive": null,
            "start": 188,
            "end": 208
          }
        ],
        "start": 182,
        "end": 210
      },
      "expression": false,
      "start": 149,
      "end": 210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 233
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 241
              },
              "typeArguments": null,
              "start": 236,
              "end": 241
            },
            "start": 234,
            "end": 241
          },
          "start": 226,
          "end": 241
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 249,
                  "end": 256
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "optional": false,
                "computed": false,
                "start": 249,
                "end": 260
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 267
                }
              ],
              "optional": false,
              "start": 249,
              "end": 268
            },
            "directive": null,
            "start": 249,
            "end": 269
          }
        ],
        "start": 243,
        "end": 271
      },
      "expression": false,
      "start": 212,
      "end": 271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 294
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 310
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondarySkillA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 327
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 328
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 336
              },
              "typeArguments": null,
              "start": 331,
              "end": 336
            },
            "start": 329,
            "end": 336
          },
          "start": 287,
          "end": 336
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 344,
                  "end": 351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 355
                },
                "optional": false,
                "computed": false,
                "start": 344,
                "end": 355
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 362
                }
              ],
              "optional": false,
              "start": 344,
              "end": 363
            },
            "directive": null,
            "start": 344,
            "end": 364
          }
        ],
        "start": 338,
        "end": 366
      },
      "expression": false,
      "start": 273,
      "end": 366
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 401
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 383,
              "end": 401
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 409
              },
              "typeArguments": null,
              "start": 404,
              "end": 409
            },
            "start": 402,
            "end": 409
          },
          "start": 382,
          "end": 409
        }
      ],
      "returnType": null,
      "body": {
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
                  "start": 417,
                  "end": 424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 428
                },
                "optional": false,
                "computed": false,
                "start": 417,
                "end": 428
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 444
                }
              ],
              "optional": false,
              "start": 417,
              "end": 445
            },
            "directive": null,
            "start": 417,
            "end": 446
          }
        ],
        "start": 411,
        "end": 448
      },
      "expression": false,
      "start": 368,
      "end": 448
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
          "start": 450,
          "end": 454
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 461
          }
        ],
        "optional": false,
        "start": 450,
        "end": 462
      },
      "directive": null,
      "start": 450,
      "end": 463
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
          "start": 464,
          "end": 468
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 470,
                "end": 478
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 481,
                    "end": 489
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 491,
                    "end": 500
                  }
                ],
                "start": 480,
                "end": 501
              }
            ],
            "start": 469,
            "end": 502
          }
        ],
        "optional": false,
        "start": 464,
        "end": 503
      },
      "directive": null,
      "start": 464,
      "end": 504
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
          "start": 506,
          "end": 510
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 517
          }
        ],
        "optional": false,
        "start": 506,
        "end": 518
      },
      "directive": null,
      "start": 506,
      "end": 519
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
          "start": 520,
          "end": 524
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 526,
                "end": 534
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 537,
                    "end": 545
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 547,
                    "end": 556
                  }
                ],
                "start": 536,
                "end": 557
              }
            ],
            "start": 525,
            "end": 558
          }
        ],
        "optional": false,
        "start": 520,
        "end": 559
      },
      "directive": null,
      "start": 520,
      "end": 560
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
          "start": 562,
          "end": 566
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 573
          }
        ],
        "optional": false,
        "start": 562,
        "end": 574
      },
      "directive": null,
      "start": 562,
      "end": 575
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
          "start": 576,
          "end": 580
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 582,
                "end": 590
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 593,
                    "end": 601
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 603,
                    "end": 612
                  }
                ],
                "start": 592,
                "end": 613
              }
            ],
            "start": 581,
            "end": 614
          }
        ],
        "optional": false,
        "start": 576,
        "end": 615
      },
      "directive": null,
      "start": 576,
      "end": 616
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
          "start": 618,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 629
          }
        ],
        "optional": false,
        "start": 618,
        "end": 630
      },
      "directive": null,
      "start": 618,
      "end": 631
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
          "start": 632,
          "end": 636
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "roomba",
                "raw": "\"roomba\"",
                "start": 638,
                "end": 646
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "vacuum",
                    "raw": "\"vacuum\"",
                    "start": 649,
                    "end": 657
                  },
                  {
                    "type": "Literal",
                    "value": "mopping",
                    "raw": "\"mopping\"",
                    "start": 659,
                    "end": 668
                  }
                ],
                "start": 648,
                "end": 669
              }
            ],
            "start": 637,
            "end": 670
          }
        ],
        "optional": false,
        "start": 632,
        "end": 671
      },
      "directive": null,
      "start": 632,
      "end": 672
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 672
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 50,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 103,
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
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 124,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "nameMB",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 273,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "primarySkillA",
    "start": 297,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "secondarySkillA",
    "start": 312,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "nameMA",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 383,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 386,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 417,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "multiRobotAInfo",
    "start": 429,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 469,
    "end": 470
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 470,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 481,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 491,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "foo2",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 520,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 526,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 537,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 547,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 562,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 582,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 593,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 603,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "foo4",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "String",
    "value": "\"roomba\"",
    "start": 638,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 648,
    "end": 649
  },
  {
    "type": "String",
    "value": "\"vacuum\"",
    "start": 649,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "String",
    "value": "\"mopping\"",
    "start": 659,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
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
    "value": ";",
    "start": 671,
    "end": 672
  }
]
```

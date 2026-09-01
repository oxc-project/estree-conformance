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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 65
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 85
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 104
          }
        ],
        "start": 66,
        "end": 106
      },
      "declare": false,
      "start": 50,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 128
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 188
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 207,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 197,
                    "end": 216
                  }
                ],
                "start": 161,
                "end": 222
              },
              "start": 159,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 223
          }
        ],
        "start": 129,
        "end": 225
      },
      "declare": false,
      "start": 108,
      "end": 225
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
            "name": "robot",
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
                  "start": 238,
                  "end": 243
                },
                "typeArguments": null,
                "start": 238,
                "end": 243
              },
              "start": 236,
              "end": 243
            },
            "start": 231,
            "end": 243
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
                  "start": 248,
                  "end": 252
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 254,
                  "end": 261
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 248,
                "end": 261
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 268
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 270,
                  "end": 278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 263,
                "end": 278
              }
            ],
            "start": 246,
            "end": 280
          },
          "definite": false,
          "start": 231,
          "end": 280
        }
      ],
      "declare": false,
      "start": 227,
      "end": 281
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
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 308
                },
                "typeArguments": null,
                "start": 298,
                "end": 308
              },
              "start": 296,
              "end": 308
            },
            "start": 286,
            "end": 308
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
                  "start": 313,
                  "end": 317
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 319,
                  "end": 326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 313,
                "end": 326
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 334
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 345
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 347,
                        "end": 355
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 338,
                      "end": 355
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 366
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 368,
                        "end": 374
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 357,
                      "end": 374
                    }
                  ],
                  "start": 336,
                  "end": 376
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 328,
                "end": 376
              }
            ],
            "start": 311,
            "end": 378
          },
          "definite": false,
          "start": 286,
          "end": 378
        }
      ],
      "declare": false,
      "start": 282,
      "end": 379
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 397
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
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 418
            },
            "start": 406,
            "end": 419
          }
        ],
        "start": 400,
        "end": 421
      },
      "expression": false,
      "start": 380,
      "end": 421
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 444
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 470
            },
            "start": 453,
            "end": 471
          }
        ],
        "start": 447,
        "end": 473
      },
      "expression": false,
      "start": 422,
      "end": 473
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 485,
                    "end": 489
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 496
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 498,
                      "end": 506
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 506
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 485,
                  "end": 506
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 508
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 516
            },
            "definite": false,
            "start": 484,
            "end": 516
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 519
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 522,
              "end": 523
            },
            "definite": false,
            "start": 518,
            "end": 523
          }
        ],
        "declare": false,
        "start": 480,
        "end": 523
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 525,
          "end": 526
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 529,
          "end": 530
        },
        "start": 525,
        "end": 530
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
          "start": 532,
          "end": 533
        },
        "start": 532,
        "end": 535
      },
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
                  "start": 543,
                  "end": 550
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 554
                },
                "optional": false,
                "computed": false,
                "start": 543,
                "end": 554
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 560
                }
              ],
              "optional": false,
              "start": 543,
              "end": 561
            },
            "directive": null,
            "start": 543,
            "end": 562
          }
        ],
        "start": 537,
        "end": 564
      },
      "start": 475,
      "end": 564
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 575,
                    "end": 579
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 586
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 589,
                      "end": 597
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 597
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 575,
                  "end": 597
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 599
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 610
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 602,
              "end": 612
            },
            "definite": false,
            "start": 574,
            "end": 612
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 618,
              "end": 619
            },
            "definite": false,
            "start": 614,
            "end": 619
          }
        ],
        "declare": false,
        "start": 570,
        "end": 619
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 621,
          "end": 622
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 625,
          "end": 626
        },
        "start": 621,
        "end": 626
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
          "start": 628,
          "end": 629
        },
        "start": 628,
        "end": 631
      },
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
                  "start": 639,
                  "end": 646
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 650
                },
                "optional": false,
                "computed": false,
                "start": 639,
                "end": 650
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 651,
                  "end": 656
                }
              ],
              "optional": false,
              "start": 639,
              "end": 657
            },
            "directive": null,
            "start": 639,
            "end": 658
          }
        ],
        "start": 633,
        "end": 660
      },
      "start": 565,
      "end": 660
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 671,
                    "end": 675
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 682
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 685,
                      "end": 693
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 693
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 671,
                  "end": 693
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 695
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 704
                },
                "typeArguments": null,
                "start": 699,
                "end": 704
              },
              "expression": {
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
                      "start": 707,
                      "end": 711
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 713,
                      "end": 722
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 707,
                    "end": 722
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 724,
                      "end": 729
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 731,
                      "end": 741
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 724,
                    "end": 741
                  }
                ],
                "start": 705,
                "end": 743
              },
              "start": 698,
              "end": 743
            },
            "definite": false,
            "start": 670,
            "end": 743
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 746
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 749,
              "end": 750
            },
            "definite": false,
            "start": 745,
            "end": 750
          }
        ],
        "declare": false,
        "start": 666,
        "end": 750
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 752,
          "end": 753
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 756,
          "end": 757
        },
        "start": 752,
        "end": 757
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
          "start": 759,
          "end": 760
        },
        "start": 759,
        "end": 762
      },
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
                  "start": 770,
                  "end": 777
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 781
                },
                "optional": false,
                "computed": false,
                "start": 770,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 787
                }
              ],
              "optional": false,
              "start": 770,
              "end": 788
            },
            "directive": null,
            "start": 770,
            "end": 789
          }
        ],
        "start": 764,
        "end": 791
      },
      "start": 661,
      "end": 791
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 807,
                    "end": 813
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 825,
                            "end": 832
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 842
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 845,
                              "end": 854
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 834,
                            "end": 854
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 825,
                          "end": 854
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 864,
                            "end": 873
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 875,
                              "end": 885
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 888,
                              "end": 899
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 875,
                            "end": 899
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 864,
                          "end": 899
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 815,
                      "end": 905
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 910,
                            "end": 917
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 919,
                            "end": 925
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 910,
                          "end": 925
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 936
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 938,
                            "end": 944
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 927,
                          "end": 944
                        }
                      ],
                      "start": 908,
                      "end": 946
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 946
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 807,
                  "end": 946
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 948
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 961
            },
            "definite": false,
            "start": 801,
            "end": 961
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 964
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 967,
              "end": 968
            },
            "definite": false,
            "start": 963,
            "end": 968
          }
        ],
        "declare": false,
        "start": 797,
        "end": 968
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 970,
          "end": 971
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 974,
          "end": 975
        },
        "start": 970,
        "end": 975
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
          "start": 977,
          "end": 978
        },
        "start": 977,
        "end": 980
      },
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
                  "start": 988,
                  "end": 995
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 999
                },
                "optional": false,
                "computed": false,
                "start": 988,
                "end": 999
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1008
                }
              ],
              "optional": false,
              "start": 988,
              "end": 1009
            },
            "directive": null,
            "start": 988,
            "end": 1010
          }
        ],
        "start": 982,
        "end": 1012
      },
      "start": 792,
      "end": 1012
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1028,
                    "end": 1034
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1053
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1055,
                              "end": 1063
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1066,
                              "end": 1075
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1055,
                            "end": 1075
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1046,
                          "end": 1075
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1085,
                            "end": 1094
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1096,
                              "end": 1106
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1109,
                              "end": 1120
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1096,
                            "end": 1120
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1085,
                          "end": 1120
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1126
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1131,
                            "end": 1138
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1140,
                            "end": 1146
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1131,
                          "end": 1146
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1148,
                            "end": 1157
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1159,
                            "end": 1165
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1148,
                          "end": 1165
                        }
                      ],
                      "start": 1129,
                      "end": 1167
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1036,
                    "end": 1167
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1028,
                  "end": 1167
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1169
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1172,
                "end": 1185
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1172,
              "end": 1187
            },
            "definite": false,
            "start": 1022,
            "end": 1187
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1190
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1193,
              "end": 1194
            },
            "definite": false,
            "start": 1189,
            "end": 1194
          }
        ],
        "declare": false,
        "start": 1018,
        "end": 1194
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1196,
          "end": 1197
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1200,
          "end": 1201
        },
        "start": 1196,
        "end": 1201
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
          "start": 1203,
          "end": 1204
        },
        "start": 1203,
        "end": 1206
      },
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
                  "start": 1214,
                  "end": 1221
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1225
                },
                "optional": false,
                "computed": false,
                "start": 1214,
                "end": 1225
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1234
                }
              ],
              "optional": false,
              "start": 1214,
              "end": 1235
            },
            "directive": null,
            "start": 1214,
            "end": 1236
          }
        ],
        "start": 1208,
        "end": 1238
      },
      "start": 1013,
      "end": 1238
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1254,
                    "end": 1260
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1272,
                            "end": 1279
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1281,
                              "end": 1289
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1292,
                              "end": 1301
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1281,
                            "end": 1301
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1272,
                          "end": 1301
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1311,
                            "end": 1320
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1322,
                              "end": 1332
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1335,
                              "end": 1346
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1322,
                            "end": 1346
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1311,
                          "end": 1346
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1262,
                      "end": 1352
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1357,
                            "end": 1364
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1366,
                            "end": 1372
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1357,
                          "end": 1372
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1374,
                            "end": 1383
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1385,
                            "end": 1391
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1374,
                          "end": 1391
                        }
                      ],
                      "start": 1355,
                      "end": 1393
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1393
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1254,
                  "end": 1393
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1395
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1409
                },
                "typeArguments": null,
                "start": 1399,
                "end": 1409
              },
              "expression": {
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
                      "start": 1412,
                      "end": 1416
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1418,
                      "end": 1427
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1412,
                    "end": 1427
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1429,
                      "end": 1435
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1439,
                            "end": 1446
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1448,
                            "end": 1458
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1439,
                          "end": 1458
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1460,
                            "end": 1469
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1471,
                            "end": 1479
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1460,
                          "end": 1479
                        }
                      ],
                      "start": 1437,
                      "end": 1481
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1429,
                    "end": 1481
                  }
                ],
                "start": 1410,
                "end": 1483
              },
              "start": 1398,
              "end": 1483
            },
            "definite": false,
            "start": 1248,
            "end": 1483
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1490
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1493,
              "end": 1494
            },
            "definite": false,
            "start": 1489,
            "end": 1494
          }
        ],
        "declare": false,
        "start": 1244,
        "end": 1494
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1496,
          "end": 1497
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1500,
          "end": 1501
        },
        "start": 1496,
        "end": 1501
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
          "start": 1503,
          "end": 1504
        },
        "start": 1503,
        "end": 1506
      },
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
                  "start": 1514,
                  "end": 1521
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1522,
                  "end": 1525
                },
                "optional": false,
                "computed": false,
                "start": 1514,
                "end": 1525
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1526,
                  "end": 1534
                }
              ],
              "optional": false,
              "start": 1514,
              "end": 1535
            },
            "directive": null,
            "start": 1514,
            "end": 1536
          }
        ],
        "start": 1508,
        "end": 1538
      },
      "start": 1239,
      "end": 1538
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 1550,
                    "end": 1554
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1556,
                      "end": 1561
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1564,
                      "end": 1572
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1556,
                    "end": 1572
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1550,
                  "end": 1572
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1574,
                    "end": 1579
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1581,
                      "end": 1587
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 1590,
                      "end": 1597
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1581,
                    "end": 1597
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1574,
                  "end": 1597
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1599
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1602,
              "end": 1607
            },
            "definite": false,
            "start": 1549,
            "end": 1607
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1610
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1613,
              "end": 1614
            },
            "definite": false,
            "start": 1609,
            "end": 1614
          }
        ],
        "declare": false,
        "start": 1545,
        "end": 1614
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1616,
          "end": 1617
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1620,
          "end": 1621
        },
        "start": 1616,
        "end": 1621
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
          "start": 1623,
          "end": 1624
        },
        "start": 1623,
        "end": 1626
      },
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
                  "start": 1634,
                  "end": 1641
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1642,
                  "end": 1645
                },
                "optional": false,
                "computed": false,
                "start": 1634,
                "end": 1645
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1646,
                  "end": 1651
                }
              ],
              "optional": false,
              "start": 1634,
              "end": 1652
            },
            "directive": null,
            "start": 1634,
            "end": 1653
          }
        ],
        "start": 1628,
        "end": 1655
      },
      "start": 1540,
      "end": 1655
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 1666,
                    "end": 1670
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1672,
                      "end": 1677
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1680,
                      "end": 1688
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1672,
                    "end": 1688
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1666,
                  "end": 1688
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1690,
                    "end": 1695
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1697,
                      "end": 1703
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 1706,
                      "end": 1713
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1697,
                    "end": 1713
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1690,
                  "end": 1713
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1715
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1718,
                "end": 1726
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1718,
              "end": 1728
            },
            "definite": false,
            "start": 1665,
            "end": 1728
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1730,
              "end": 1731
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1734,
              "end": 1735
            },
            "definite": false,
            "start": 1730,
            "end": 1735
          }
        ],
        "declare": false,
        "start": 1661,
        "end": 1735
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1737,
          "end": 1738
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1741,
          "end": 1742
        },
        "start": 1737,
        "end": 1742
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
          "start": 1744,
          "end": 1745
        },
        "start": 1744,
        "end": 1747
      },
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
                  "start": 1755,
                  "end": 1762
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1763,
                  "end": 1766
                },
                "optional": false,
                "computed": false,
                "start": 1755,
                "end": 1766
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1767,
                  "end": 1772
                }
              ],
              "optional": false,
              "start": 1755,
              "end": 1773
            },
            "directive": null,
            "start": 1755,
            "end": 1774
          }
        ],
        "start": 1749,
        "end": 1776
      },
      "start": 1656,
      "end": 1776
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 1787,
                    "end": 1791
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1793,
                      "end": 1798
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1801,
                      "end": 1809
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1809
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1787,
                  "end": 1809
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1816
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1824
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 1827,
                      "end": 1834
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1834
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1811,
                  "end": 1834
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1786,
              "end": 1836
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1840,
                  "end": 1845
                },
                "typeArguments": null,
                "start": 1840,
                "end": 1845
              },
              "expression": {
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
                      "start": 1848,
                      "end": 1852
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1854,
                      "end": 1863
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1848,
                    "end": 1863
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1865,
                      "end": 1870
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1872,
                      "end": 1882
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1865,
                    "end": 1882
                  }
                ],
                "start": 1846,
                "end": 1884
              },
              "start": 1839,
              "end": 1884
            },
            "definite": false,
            "start": 1786,
            "end": 1884
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1887
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1890,
              "end": 1891
            },
            "definite": false,
            "start": 1886,
            "end": 1891
          }
        ],
        "declare": false,
        "start": 1782,
        "end": 1891
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1893,
          "end": 1894
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1897,
          "end": 1898
        },
        "start": 1893,
        "end": 1898
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
          "start": 1900,
          "end": 1901
        },
        "start": 1900,
        "end": 1903
      },
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
                  "start": 1911,
                  "end": 1918
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1919,
                  "end": 1922
                },
                "optional": false,
                "computed": false,
                "start": 1911,
                "end": 1922
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1923,
                  "end": 1928
                }
              ],
              "optional": false,
              "start": 1911,
              "end": 1929
            },
            "directive": null,
            "start": 1911,
            "end": 1930
          }
        ],
        "start": 1905,
        "end": 1932
      },
      "start": 1777,
      "end": 1932
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 1948,
                    "end": 1952
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1954,
                      "end": 1959
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1962,
                      "end": 1970
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1954,
                    "end": 1970
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1948,
                  "end": 1970
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1976,
                    "end": 1982
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1994,
                            "end": 2001
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2003,
                              "end": 2011
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2014,
                              "end": 2023
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2003,
                            "end": 2023
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1994,
                          "end": 2023
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2033,
                            "end": 2042
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2044,
                              "end": 2054
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2057,
                              "end": 2068
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2044,
                            "end": 2068
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2033,
                          "end": 2068
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1984,
                      "end": 2074
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2079,
                            "end": 2086
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2088,
                            "end": 2094
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2079,
                          "end": 2094
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2096,
                            "end": 2105
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2107,
                            "end": 2113
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2096,
                          "end": 2113
                        }
                      ],
                      "start": 2077,
                      "end": 2115
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1984,
                    "end": 2115
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1976,
                  "end": 2115
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1942,
              "end": 2117
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2120,
              "end": 2130
            },
            "definite": false,
            "start": 1942,
            "end": 2130
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2132,
              "end": 2133
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2136,
              "end": 2137
            },
            "definite": false,
            "start": 2132,
            "end": 2137
          }
        ],
        "declare": false,
        "start": 1938,
        "end": 2137
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2139,
          "end": 2140
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2143,
          "end": 2144
        },
        "start": 2139,
        "end": 2144
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
          "start": 2146,
          "end": 2147
        },
        "start": 2146,
        "end": 2149
      },
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
                  "start": 2157,
                  "end": 2164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2165,
                  "end": 2168
                },
                "optional": false,
                "computed": false,
                "start": 2157,
                "end": 2168
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2169,
                  "end": 2177
                }
              ],
              "optional": false,
              "start": 2157,
              "end": 2178
            },
            "directive": null,
            "start": 2157,
            "end": 2179
          }
        ],
        "start": 2151,
        "end": 2181
      },
      "start": 1933,
      "end": 2181
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 2197,
                    "end": 2201
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2203,
                      "end": 2208
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2211,
                      "end": 2219
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2203,
                    "end": 2219
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2197,
                  "end": 2219
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2225,
                    "end": 2231
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2243,
                            "end": 2250
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2252,
                              "end": 2260
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2263,
                              "end": 2272
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2252,
                            "end": 2272
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2243,
                          "end": 2272
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2282,
                            "end": 2291
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2293,
                              "end": 2303
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2306,
                              "end": 2317
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2293,
                            "end": 2317
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2282,
                          "end": 2317
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2233,
                      "end": 2323
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2328,
                            "end": 2335
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2337,
                            "end": 2343
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2328,
                          "end": 2343
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2345,
                            "end": 2354
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2356,
                            "end": 2362
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2345,
                          "end": 2362
                        }
                      ],
                      "start": 2326,
                      "end": 2364
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2233,
                    "end": 2364
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2225,
                  "end": 2364
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2191,
              "end": 2366
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2369,
                "end": 2382
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2369,
              "end": 2384
            },
            "definite": false,
            "start": 2191,
            "end": 2384
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2386,
              "end": 2387
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2390,
              "end": 2391
            },
            "definite": false,
            "start": 2386,
            "end": 2391
          }
        ],
        "declare": false,
        "start": 2187,
        "end": 2391
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2393,
          "end": 2394
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2397,
          "end": 2398
        },
        "start": 2393,
        "end": 2398
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
          "start": 2400,
          "end": 2401
        },
        "start": 2400,
        "end": 2403
      },
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
                  "start": 2411,
                  "end": 2418
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2419,
                  "end": 2422
                },
                "optional": false,
                "computed": false,
                "start": 2411,
                "end": 2422
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2423,
                  "end": 2431
                }
              ],
              "optional": false,
              "start": 2411,
              "end": 2432
            },
            "directive": null,
            "start": 2411,
            "end": 2433
          }
        ],
        "start": 2405,
        "end": 2435
      },
      "start": 2182,
      "end": 2435
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
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 2451,
                    "end": 2455
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2457,
                      "end": 2462
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2465,
                      "end": 2473
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2457,
                    "end": 2473
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2451,
                  "end": 2473
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2485
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2497,
                            "end": 2504
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2506,
                              "end": 2514
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2517,
                              "end": 2526
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2506,
                            "end": 2526
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2497,
                          "end": 2526
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2536,
                            "end": 2545
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2547,
                              "end": 2557
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2560,
                              "end": 2571
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2547,
                            "end": 2571
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2536,
                          "end": 2571
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2487,
                      "end": 2577
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2582,
                            "end": 2589
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2591,
                            "end": 2597
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2582,
                          "end": 2597
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2599,
                            "end": 2608
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2610,
                            "end": 2616
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2599,
                          "end": 2616
                        }
                      ],
                      "start": 2580,
                      "end": 2618
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2487,
                    "end": 2618
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2479,
                  "end": 2618
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2445,
              "end": 2620
            },
            "init": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2624,
                  "end": 2634
                },
                "typeArguments": null,
                "start": 2624,
                "end": 2634
              },
              "expression": {
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
                      "start": 2637,
                      "end": 2641
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2643,
                      "end": 2652
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2637,
                    "end": 2652
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2654,
                      "end": 2660
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2664,
                            "end": 2671
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 2673,
                            "end": 2683
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2664,
                          "end": 2683
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2685,
                            "end": 2694
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 2696,
                            "end": 2704
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2685,
                          "end": 2704
                        }
                      ],
                      "start": 2662,
                      "end": 2706
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2654,
                    "end": 2706
                  }
                ],
                "start": 2635,
                "end": 2708
              },
              "start": 2623,
              "end": 2708
            },
            "definite": false,
            "start": 2445,
            "end": 2708
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2714,
              "end": 2715
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2718,
              "end": 2719
            },
            "definite": false,
            "start": 2714,
            "end": 2719
          }
        ],
        "declare": false,
        "start": 2441,
        "end": 2719
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2721,
          "end": 2722
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2725,
          "end": 2726
        },
        "start": 2721,
        "end": 2726
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
          "start": 2728,
          "end": 2729
        },
        "start": 2728,
        "end": 2731
      },
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
                  "start": 2739,
                  "end": 2746
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2747,
                  "end": 2750
                },
                "optional": false,
                "computed": false,
                "start": 2739,
                "end": 2750
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2751,
                  "end": 2759
                }
              ],
              "optional": false,
              "start": 2739,
              "end": 2760
            },
            "directive": null,
            "start": 2739,
            "end": 2761
          }
        ],
        "start": 2733,
        "end": 2763
      },
      "start": 2436,
      "end": 2763
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2763
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
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
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
    "value": "skills",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 254,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 286,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 298,
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
    "type": "Identifier",
    "value": "name",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 347,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 357,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 380,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 389,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 406,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 431,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 453,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 460,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "for",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 491,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 498,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 543,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
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
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 589,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 602,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 623,
    "end": 624
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 639,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 651,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 661,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 685,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 724,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 731,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "i",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 760,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 770,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 778,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "primary",
    "start": 825,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 834,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 845,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 864,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 875,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 888,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 910,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 927,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 951,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 988,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 996,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1000,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1046,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1055,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1066,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1085,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1096,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1109,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1131,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1140,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1148,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1159,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1172,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1214,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1254,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1272,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1281,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1292,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1311,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1322,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1335,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1357,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1374,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1385,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1399,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1412,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1418,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1439,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1448,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1460,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1471,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1504,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1526,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1550,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1564,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1574,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1581,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1590,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 1602,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1624,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1634,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1646,
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
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1666,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1672,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1680,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1690,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1697,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1706,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1718,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1745,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1763,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1767,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1782,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1787,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1793,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1801,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1811,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 1818,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 1827,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 1840,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1848,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1854,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1872,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1911,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1919,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1923,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1938,
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
    "value": "name",
    "start": 1948,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1954,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1962,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1976,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1994,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2003,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2014,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2033,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2044,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2057,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2079,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2096,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 2120,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2147,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2157,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2165,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2169,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2203,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2225,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2243,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2252,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2263,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2282,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2293,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2306,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2328,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2337,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2345,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2356,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2369,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2401,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2411,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2419,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2423,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2436,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2441,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2451,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2457,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2465,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2479,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2497,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2506,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2517,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2536,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2547,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2560,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2582,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2591,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2599,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2610,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 2624,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2637,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2643,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2654,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2664,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2673,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2685,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2696,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2729,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2739,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2747,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2751,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2762,
    "end": 2763
  }
]
```

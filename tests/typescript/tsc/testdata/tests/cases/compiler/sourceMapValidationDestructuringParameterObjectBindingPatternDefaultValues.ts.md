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
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              },
              "start": 27,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 36
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 56
          }
        ],
        "start": 16,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 58
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
                      "start": 86,
                      "end": 89
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
                            "type": "TSStringKeyword",
                            "start": 95,
                            "end": 101
                          },
                          "start": 93,
                          "end": 101
                        },
                        "start": 90,
                        "end": 101
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 104,
                        "end": 108
                      },
                      "start": 102,
                      "end": 108
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 86,
                    "end": 109
                  }
                ],
                "start": 80,
                "end": 111
              },
              "start": 78,
              "end": 111
            },
            "start": 71,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 111
        }
      ],
      "declare": true,
      "start": 59,
      "end": 111
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
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 124,
            "end": 131
          },
          "definite": false,
          "start": 116,
          "end": 131
        }
      ],
      "declare": false,
      "start": 112,
      "end": 132
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
                  "start": 145,
                  "end": 150
                },
                "typeArguments": null,
                "start": 145,
                "end": 150
              },
              "start": 143,
              "end": 150
            },
            "start": 137,
            "end": 150
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
                  "start": 155,
                  "end": 159
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 161,
                  "end": 168
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 155,
                "end": 168
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
                  "start": 170,
                  "end": 175
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 177,
                  "end": 185
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 170,
                "end": 185
              }
            ],
            "start": 153,
            "end": 187
          },
          "definite": false,
          "start": 137,
          "end": 187
        }
      ],
      "declare": false,
      "start": 133,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 203
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
                  "start": 206,
                  "end": 210
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
                    "start": 212,
                    "end": 217
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<NoName>",
                    "raw": "\"<NoName>\"",
                    "start": 220,
                    "end": 230
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 230
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
                  "start": 234,
                  "end": 239
                },
                "typeArguments": null,
                "start": 234,
                "end": 239
              },
              "start": 232,
              "end": 239
            },
            "start": 204,
            "end": 239
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 242,
            "end": 245
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 245
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
                  "start": 253,
                  "end": 260
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 264
                },
                "optional": false,
                "computed": false,
                "start": 253,
                "end": 264
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 270
                }
              ],
              "optional": false,
              "start": 253,
              "end": 271
            },
            "directive": null,
            "start": 253,
            "end": 272
          }
        ],
        "start": 247,
        "end": 274
      },
      "expression": false,
      "start": 190,
      "end": 274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 288
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
                  "start": 291,
                  "end": 295
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 302
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<NoName>",
                    "raw": "\"<NoName>\"",
                    "start": 305,
                    "end": 315
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 315
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 291,
                "end": 315
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
                  "start": 317,
                  "end": 322
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 330
                  },
                  "right": {
                    "type": "Literal",
                    "value": "noSkill",
                    "raw": "\"noSkill\"",
                    "start": 333,
                    "end": 342
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 342
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 317,
                "end": 342
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
                  "start": 346,
                  "end": 351
                },
                "typeArguments": null,
                "start": 346,
                "end": 351
              },
              "start": 344,
              "end": 351
            },
            "start": 289,
            "end": 351
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 354,
            "end": 356
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 356
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
                  "start": 364,
                  "end": 371
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 375
                },
                "optional": false,
                "computed": false,
                "start": 364,
                "end": 375
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 381
                }
              ],
              "optional": false,
              "start": 364,
              "end": 382
            },
            "directive": null,
            "start": 364,
            "end": 383
          }
        ],
        "start": 358,
        "end": 385
      },
      "expression": false,
      "start": 275,
      "end": 385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 399
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
                  "start": 402,
                  "end": 406
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 406
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<NoName>",
                    "raw": "\"<NoName>\"",
                    "start": 409,
                    "end": 419
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 419
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 402,
                "end": 419
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
                  "start": 423,
                  "end": 428
                },
                "typeArguments": null,
                "start": 423,
                "end": 428
              },
              "start": 421,
              "end": 428
            },
            "start": 400,
            "end": 428
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 431,
            "end": 433
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 433
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
                  "start": 441,
                  "end": 448
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 452
                },
                "optional": false,
                "computed": false,
                "start": 441,
                "end": 452
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 457
                }
              ],
              "optional": false,
              "start": 441,
              "end": 458
            },
            "directive": null,
            "start": 441,
            "end": 459
          }
        ],
        "start": 435,
        "end": 461
      },
      "expression": false,
      "start": 386,
      "end": 461
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
          "start": 463,
          "end": 467
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 474
          }
        ],
        "optional": false,
        "start": 463,
        "end": 475
      },
      "directive": null,
      "start": 463,
      "end": 476
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
          "start": 477,
          "end": 481
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 488
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 490,
                  "end": 497
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 484,
                "end": 497
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
                  "start": 499,
                  "end": 504
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 506,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 499,
                "end": 521
              }
            ],
            "start": 482,
            "end": 523
          }
        ],
        "optional": false,
        "start": 477,
        "end": 524
      },
      "directive": null,
      "start": 477,
      "end": 525
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
          "start": 527,
          "end": 531
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 538
          }
        ],
        "optional": false,
        "start": 527,
        "end": 539
      },
      "directive": null,
      "start": 527,
      "end": 540
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
          "start": 541,
          "end": 545
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 552
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 554,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 548,
                "end": 561
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
                  "start": 563,
                  "end": 568
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 570,
                  "end": 585
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 563,
                "end": 585
              }
            ],
            "start": 546,
            "end": 587
          }
        ],
        "optional": false,
        "start": 541,
        "end": 588
      },
      "directive": null,
      "start": 541,
      "end": 589
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
          "start": 591,
          "end": 595
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 602
          }
        ],
        "optional": false,
        "start": 591,
        "end": 603
      },
      "directive": null,
      "start": 591,
      "end": 604
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
          "start": 605,
          "end": 609
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 616
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 618,
                  "end": 625
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 612,
                "end": 625
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
                  "start": 627,
                  "end": 632
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 634,
                  "end": 649
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 627,
                "end": 649
              }
            ],
            "start": 610,
            "end": 651
          }
        ],
        "optional": false,
        "start": 605,
        "end": 652
      },
      "directive": null,
      "start": 605,
      "end": 653
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 653
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
    "value": "Robot",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "string",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 59,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 190,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 206,
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
    "value": "nameA",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "String",
    "value": "\"<NoName>\"",
    "start": 220,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 275,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 291,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"<NoName>\"",
    "start": 305,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "skillB",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"noSkill\"",
    "start": 333,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 346,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 364,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "nameB",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 386,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "String",
    "value": "\"<NoName>\"",
    "start": 409,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 441,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 468,
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
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"cutting edges\"",
    "start": 506,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "String",
    "value": "\"cutting edges\"",
    "start": 570,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "String",
    "value": "\"Edger\"",
    "start": 618,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "String",
    "value": "\"cutting edges\"",
    "start": 634,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  }
]
```

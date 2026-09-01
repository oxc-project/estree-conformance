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
                    "optional": false,
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
                        "start": 180,
                        "end": 186
                      },
                      "start": 178,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 187
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      },
                      "start": 205,
                      "end": 213
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 214
                  }
                ],
                "start": 161,
                "end": 220
              },
              "start": 159,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 221
          }
        ],
        "start": 129,
        "end": 223
      },
      "declare": false,
      "start": 108,
      "end": 223
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
            "start": 229,
            "end": 241
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
                  "start": 246,
                  "end": 250
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 252,
                  "end": 259
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 246,
                "end": 259
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
                  "start": 261,
                  "end": 266
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 268,
                  "end": 276
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 261,
                "end": 276
              }
            ],
            "start": 244,
            "end": 278
          },
          "definite": false,
          "start": 229,
          "end": 278
        }
      ],
      "declare": false,
      "start": 225,
      "end": 279
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
                  "start": 296,
                  "end": 306
                },
                "typeArguments": null,
                "start": 296,
                "end": 306
              },
              "start": 294,
              "end": 306
            },
            "start": 284,
            "end": 306
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
                  "start": 311,
                  "end": 315
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 317,
                  "end": 324
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 324
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
                  "start": 326,
                  "end": 332
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
                        "start": 336,
                        "end": 343
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 345,
                        "end": 353
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 336,
                      "end": 353
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
                        "start": 355,
                        "end": 364
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 366,
                        "end": 372
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 355,
                      "end": 372
                    }
                  ],
                  "start": 334,
                  "end": 374
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 374
              }
            ],
            "start": 309,
            "end": 376
          },
          "definite": false,
          "start": 284,
          "end": 376
        }
      ],
      "declare": false,
      "start": 280,
      "end": 377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 395
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
              "start": 411,
              "end": 416
            },
            "start": 404,
            "end": 417
          }
        ],
        "start": 398,
        "end": 419
      },
      "expression": false,
      "start": 378,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 442
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
              "start": 458,
              "end": 468
            },
            "start": 451,
            "end": 469
          }
        ],
        "start": 445,
        "end": 471
      },
      "expression": false,
      "start": 420,
      "end": 471
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
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 484,
                "end": 490
              },
              "start": 482,
              "end": 490
            },
            "start": 477,
            "end": 490
          },
          "init": null,
          "definite": false,
          "start": 477,
          "end": 490
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 502,
                "end": 508
              },
              "start": 500,
              "end": 508
            },
            "start": 492,
            "end": 508
          },
          "init": null,
          "definite": false,
          "start": 492,
          "end": 508
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              },
              "start": 520,
              "end": 528
            },
            "start": 510,
            "end": 528
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 528
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 533,
                "end": 539
              },
              "start": 531,
              "end": 539
            },
            "start": 530,
            "end": 539
          },
          "init": null,
          "definite": false,
          "start": 530,
          "end": 539
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 549,
                "end": 555
              },
              "start": 547,
              "end": 555
            },
            "start": 541,
            "end": 555
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 555
        }
      ],
      "declare": false,
      "start": 473,
      "end": 556
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
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 567,
                "end": 573
              },
              "start": 565,
              "end": 573
            },
            "start": 561,
            "end": 573
          },
          "init": null,
          "definite": false,
          "start": 561,
          "end": 573
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 584,
                "end": 590
              },
              "start": 582,
              "end": 590
            },
            "start": 575,
            "end": 590
          },
          "init": null,
          "definite": false,
          "start": 575,
          "end": 590
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 603,
                "end": 609
              },
              "start": 601,
              "end": 609
            },
            "start": 592,
            "end": 609
          },
          "init": null,
          "definite": false,
          "start": 592,
          "end": 609
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 618,
                "end": 624
              },
              "start": 616,
              "end": 624
            },
            "start": 611,
            "end": 624
          },
          "init": null,
          "definite": false,
          "start": 611,
          "end": 624
        }
      ],
      "declare": false,
      "start": 557,
      "end": 625
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 634,
                    "end": 638
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 640,
                    "end": 645
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 634,
                  "end": 645
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 647
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 655
            },
            "start": 632,
            "end": 655
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 658
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 661,
              "end": 662
            },
            "start": 657,
            "end": 662
          }
        ],
        "start": 632,
        "end": 662
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 664,
          "end": 665
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 668,
          "end": 669
        },
        "start": 664,
        "end": 669
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
          "start": 671,
          "end": 672
        },
        "start": 671,
        "end": 674
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
                  "start": 682,
                  "end": 689
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 693
                },
                "optional": false,
                "computed": false,
                "start": 682,
                "end": 693
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 699
                }
              ],
              "optional": false,
              "start": 682,
              "end": 700
            },
            "directive": null,
            "start": 682,
            "end": 701
          }
        ],
        "start": 676,
        "end": 703
      },
      "start": 627,
      "end": 703
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 711,
                    "end": 715
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 717,
                    "end": 722
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 711,
                  "end": 722
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 724
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 735
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 727,
              "end": 737
            },
            "start": 709,
            "end": 737
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 739,
              "end": 740
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 743,
              "end": 744
            },
            "start": 739,
            "end": 744
          }
        ],
        "start": 709,
        "end": 744
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 747
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 750,
          "end": 751
        },
        "start": 746,
        "end": 751
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
          "start": 753,
          "end": 754
        },
        "start": 753,
        "end": 756
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
                  "start": 764,
                  "end": 771
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 772,
                  "end": 775
                },
                "optional": false,
                "computed": false,
                "start": 764,
                "end": 775
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 776,
                  "end": 781
                }
              ],
              "optional": false,
              "start": 764,
              "end": 782
            },
            "directive": null,
            "start": 764,
            "end": 783
          }
        ],
        "start": 758,
        "end": 785
      },
      "start": 704,
      "end": 785
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 793,
                    "end": 797
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 799,
                    "end": 804
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 793,
                  "end": 804
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 806
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 810,
                  "end": 815
                },
                "typeArguments": null,
                "start": 810,
                "end": 815
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
                      "start": 818,
                      "end": 822
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 824,
                      "end": 833
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 818,
                    "end": 833
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
                      "start": 835,
                      "end": 840
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 842,
                      "end": 852
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 835,
                    "end": 852
                  }
                ],
                "start": 816,
                "end": 854
              },
              "start": 809,
              "end": 854
            },
            "start": 791,
            "end": 854
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 860,
              "end": 861
            },
            "start": 856,
            "end": 861
          }
        ],
        "start": 791,
        "end": 861
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 864
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 867,
          "end": 868
        },
        "start": 863,
        "end": 868
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
          "start": 870,
          "end": 871
        },
        "start": 870,
        "end": 873
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
                  "start": 881,
                  "end": 888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 881,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 898
                }
              ],
              "optional": false,
              "start": 881,
              "end": 899
            },
            "directive": null,
            "start": 881,
            "end": 900
          }
        ],
        "start": 875,
        "end": 902
      },
      "start": 786,
      "end": 902
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 910,
                    "end": 916
                  },
                  "value": {
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
                          "start": 920,
                          "end": 927
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 937
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 920,
                        "end": 937
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
                          "start": 939,
                          "end": 948
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 950,
                          "end": 960
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 939,
                        "end": 960
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 962
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 910,
                  "end": 962
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 964
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 977
            },
            "start": 908,
            "end": 977
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 980
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 983,
              "end": 984
            },
            "start": 979,
            "end": 984
          }
        ],
        "start": 908,
        "end": 984
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 986,
          "end": 987
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 990,
          "end": 991
        },
        "start": 986,
        "end": 991
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
          "start": 993,
          "end": 994
        },
        "start": 993,
        "end": 996
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
                  "start": 1004,
                  "end": 1011
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1015
                },
                "optional": false,
                "computed": false,
                "start": 1004,
                "end": 1015
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1024
                }
              ],
              "optional": false,
              "start": 1004,
              "end": 1025
            },
            "directive": null,
            "start": 1004,
            "end": 1026
          }
        ],
        "start": 998,
        "end": 1028
      },
      "start": 903,
      "end": 1028
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1036,
                    "end": 1042
                  },
                  "value": {
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1055,
                          "end": 1063
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1046,
                        "end": 1063
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
                          "start": 1065,
                          "end": 1074
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1076,
                          "end": 1086
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1065,
                        "end": 1086
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1088
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1036,
                  "end": 1088
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1090
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1106
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1093,
              "end": 1108
            },
            "start": 1034,
            "end": 1108
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1111
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1114,
              "end": 1115
            },
            "start": 1110,
            "end": 1115
          }
        ],
        "start": 1034,
        "end": 1115
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1117,
          "end": 1118
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1121,
          "end": 1122
        },
        "start": 1117,
        "end": 1122
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
          "start": 1124,
          "end": 1125
        },
        "start": 1124,
        "end": 1127
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
                  "start": 1135,
                  "end": 1142
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1143,
                  "end": 1146
                },
                "optional": false,
                "computed": false,
                "start": 1135,
                "end": 1146
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1155
                }
              ],
              "optional": false,
              "start": 1135,
              "end": 1156
            },
            "directive": null,
            "start": 1135,
            "end": 1157
          }
        ],
        "start": 1129,
        "end": 1159
      },
      "start": 1029,
      "end": 1159
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1167,
                    "end": 1173
                  },
                  "value": {
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
                          "start": 1177,
                          "end": 1184
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1186,
                          "end": 1194
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1177,
                        "end": 1194
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
                          "start": 1196,
                          "end": 1205
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1207,
                          "end": 1217
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1196,
                        "end": 1217
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1219
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1167,
                  "end": 1219
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1221
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1229,
                  "end": 1239
                },
                "typeArguments": null,
                "start": 1229,
                "end": 1239
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
                      "start": 1242,
                      "end": 1246
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1248,
                      "end": 1257
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1242,
                    "end": 1257
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
                      "start": 1259,
                      "end": 1265
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
                            "start": 1269,
                            "end": 1276
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1278,
                            "end": 1288
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1269,
                          "end": 1288
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
                            "start": 1290,
                            "end": 1299
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1301,
                            "end": 1309
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1290,
                          "end": 1309
                        }
                      ],
                      "start": 1267,
                      "end": 1311
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1259,
                    "end": 1311
                  }
                ],
                "start": 1240,
                "end": 1313
              },
              "start": 1228,
              "end": 1313
            },
            "start": 1165,
            "end": 1313
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1320
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1323,
              "end": 1324
            },
            "start": 1319,
            "end": 1324
          }
        ],
        "start": 1165,
        "end": 1324
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1326,
          "end": 1327
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1330,
          "end": 1331
        },
        "start": 1326,
        "end": 1331
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
          "start": 1333,
          "end": 1334
        },
        "start": 1333,
        "end": 1336
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
                  "start": 1344,
                  "end": 1351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1355
                },
                "optional": false,
                "computed": false,
                "start": 1344,
                "end": 1355
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1356,
                  "end": 1364
                }
              ],
              "optional": false,
              "start": 1344,
              "end": 1365
            },
            "directive": null,
            "start": 1344,
            "end": 1366
          }
        ],
        "start": 1338,
        "end": 1368
      },
      "start": 1160,
      "end": 1368
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 1376,
                    "end": 1380
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1376,
                    "end": 1380
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1376,
                  "end": 1380
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1374,
              "end": 1382
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1390
            },
            "start": 1374,
            "end": 1390
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1392,
              "end": 1393
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1396,
              "end": 1397
            },
            "start": 1392,
            "end": 1397
          }
        ],
        "start": 1374,
        "end": 1397
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1399,
          "end": 1400
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1403,
          "end": 1404
        },
        "start": 1399,
        "end": 1404
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
          "start": 1406,
          "end": 1407
        },
        "start": 1406,
        "end": 1409
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
                  "start": 1417,
                  "end": 1424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1428
                },
                "optional": false,
                "computed": false,
                "start": 1417,
                "end": 1428
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1429,
                  "end": 1434
                }
              ],
              "optional": false,
              "start": 1417,
              "end": 1435
            },
            "directive": null,
            "start": 1417,
            "end": 1436
          }
        ],
        "start": 1411,
        "end": 1438
      },
      "start": 1369,
      "end": 1438
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 1446,
                    "end": 1450
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1446,
                    "end": 1450
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1446,
                  "end": 1450
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1452
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1455,
                "end": 1463
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1455,
              "end": 1465
            },
            "start": 1444,
            "end": 1465
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1467,
              "end": 1468
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1471,
              "end": 1472
            },
            "start": 1467,
            "end": 1472
          }
        ],
        "start": 1444,
        "end": 1472
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1475
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1478,
          "end": 1479
        },
        "start": 1474,
        "end": 1479
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
          "start": 1481,
          "end": 1482
        },
        "start": 1481,
        "end": 1484
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
                  "start": 1492,
                  "end": 1499
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1500,
                  "end": 1503
                },
                "optional": false,
                "computed": false,
                "start": 1492,
                "end": 1503
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1504,
                  "end": 1509
                }
              ],
              "optional": false,
              "start": 1492,
              "end": 1510
            },
            "directive": null,
            "start": 1492,
            "end": 1511
          }
        ],
        "start": 1486,
        "end": 1513
      },
      "start": 1439,
      "end": 1513
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 1521,
                    "end": 1525
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1525
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1521,
                  "end": 1525
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1519,
              "end": 1527
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1531,
                  "end": 1536
                },
                "typeArguments": null,
                "start": 1531,
                "end": 1536
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
                      "start": 1539,
                      "end": 1543
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1545,
                      "end": 1554
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1539,
                    "end": 1554
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
                      "start": 1556,
                      "end": 1561
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1563,
                      "end": 1573
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1556,
                    "end": 1573
                  }
                ],
                "start": 1537,
                "end": 1575
              },
              "start": 1530,
              "end": 1575
            },
            "start": 1519,
            "end": 1575
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1577,
              "end": 1578
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1581,
              "end": 1582
            },
            "start": 1577,
            "end": 1582
          }
        ],
        "start": 1519,
        "end": 1582
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1585
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1588,
          "end": 1589
        },
        "start": 1584,
        "end": 1589
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
          "start": 1591,
          "end": 1592
        },
        "start": 1591,
        "end": 1594
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
                  "start": 1602,
                  "end": 1609
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1610,
                  "end": 1613
                },
                "optional": false,
                "computed": false,
                "start": 1602,
                "end": 1613
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1614,
                  "end": 1619
                }
              ],
              "optional": false,
              "start": 1602,
              "end": 1620
            },
            "directive": null,
            "start": 1602,
            "end": 1621
          }
        ],
        "start": 1596,
        "end": 1623
      },
      "start": 1514,
      "end": 1623
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1631,
                    "end": 1637
                  },
                  "value": {
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
                          "start": 1641,
                          "end": 1648
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1641,
                          "end": 1648
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1641,
                        "end": 1648
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
                          "start": 1650,
                          "end": 1659
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1650,
                          "end": 1659
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1650,
                        "end": 1659
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1639,
                    "end": 1661
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1631,
                  "end": 1661
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1663
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1666,
              "end": 1676
            },
            "start": 1629,
            "end": 1676
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1678,
              "end": 1679
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1682,
              "end": 1683
            },
            "start": 1678,
            "end": 1683
          }
        ],
        "start": 1629,
        "end": 1683
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1685,
          "end": 1686
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1689,
          "end": 1690
        },
        "start": 1685,
        "end": 1690
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
          "start": 1692,
          "end": 1693
        },
        "start": 1692,
        "end": 1695
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
                  "start": 1703,
                  "end": 1710
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1711,
                  "end": 1714
                },
                "optional": false,
                "computed": false,
                "start": 1703,
                "end": 1714
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1715,
                  "end": 1723
                }
              ],
              "optional": false,
              "start": 1703,
              "end": 1724
            },
            "directive": null,
            "start": 1703,
            "end": 1725
          }
        ],
        "start": 1697,
        "end": 1727
      },
      "start": 1624,
      "end": 1727
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1735,
                    "end": 1741
                  },
                  "value": {
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
                          "start": 1745,
                          "end": 1752
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1745,
                          "end": 1752
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1745,
                        "end": 1752
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
                          "start": 1754,
                          "end": 1763
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1754,
                          "end": 1763
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1754,
                        "end": 1763
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1743,
                    "end": 1765
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1735,
                  "end": 1765
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1733,
              "end": 1767
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1783
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1770,
              "end": 1785
            },
            "start": 1733,
            "end": 1785
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1787,
              "end": 1788
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1791,
              "end": 1792
            },
            "start": 1787,
            "end": 1792
          }
        ],
        "start": 1733,
        "end": 1792
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1794,
          "end": 1795
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1798,
          "end": 1799
        },
        "start": 1794,
        "end": 1799
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
          "start": 1801,
          "end": 1802
        },
        "start": 1801,
        "end": 1804
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
                  "start": 1812,
                  "end": 1819
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1820,
                  "end": 1823
                },
                "optional": false,
                "computed": false,
                "start": 1812,
                "end": 1823
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1832
                }
              ],
              "optional": false,
              "start": 1812,
              "end": 1833
            },
            "directive": null,
            "start": 1812,
            "end": 1834
          }
        ],
        "start": 1806,
        "end": 1836
      },
      "start": 1728,
      "end": 1836
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1844,
                    "end": 1850
                  },
                  "value": {
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
                          "start": 1854,
                          "end": 1861
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1854,
                          "end": 1861
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1854,
                        "end": 1861
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
                          "start": 1863,
                          "end": 1872
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1863,
                          "end": 1872
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1863,
                        "end": 1872
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1852,
                    "end": 1874
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1844,
                  "end": 1874
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1876
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1884,
                  "end": 1894
                },
                "typeArguments": null,
                "start": 1884,
                "end": 1894
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
                      "start": 1897,
                      "end": 1901
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1903,
                      "end": 1912
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1897,
                    "end": 1912
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
                      "start": 1914,
                      "end": 1920
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
                            "start": 1924,
                            "end": 1931
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1933,
                            "end": 1943
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1924,
                          "end": 1943
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
                            "start": 1945,
                            "end": 1954
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1956,
                            "end": 1964
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1945,
                          "end": 1964
                        }
                      ],
                      "start": 1922,
                      "end": 1966
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1914,
                    "end": 1966
                  }
                ],
                "start": 1895,
                "end": 1968
              },
              "start": 1883,
              "end": 1968
            },
            "start": 1842,
            "end": 1968
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1974,
              "end": 1975
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1978,
              "end": 1979
            },
            "start": 1974,
            "end": 1979
          }
        ],
        "start": 1842,
        "end": 1979
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1981,
          "end": 1982
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1985,
          "end": 1986
        },
        "start": 1981,
        "end": 1986
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
          "start": 1988,
          "end": 1989
        },
        "start": 1988,
        "end": 1991
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
                  "start": 1999,
                  "end": 2006
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2007,
                  "end": 2010
                },
                "optional": false,
                "computed": false,
                "start": 1999,
                "end": 2010
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2011,
                  "end": 2019
                }
              ],
              "optional": false,
              "start": 1999,
              "end": 2020
            },
            "directive": null,
            "start": 1999,
            "end": 2021
          }
        ],
        "start": 1993,
        "end": 2023
      },
      "start": 1837,
      "end": 2023
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2033,
                    "end": 2037
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2039,
                    "end": 2044
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2033,
                  "end": 2044
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
                    "start": 2046,
                    "end": 2051
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2053,
                    "end": 2059
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2046,
                  "end": 2059
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2061
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2064,
              "end": 2069
            },
            "start": 2031,
            "end": 2069
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2071,
              "end": 2072
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2075,
              "end": 2076
            },
            "start": 2071,
            "end": 2076
          }
        ],
        "start": 2031,
        "end": 2076
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2078,
          "end": 2079
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2082,
          "end": 2083
        },
        "start": 2078,
        "end": 2083
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
          "start": 2085,
          "end": 2086
        },
        "start": 2085,
        "end": 2088
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
                  "start": 2096,
                  "end": 2103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2107
                },
                "optional": false,
                "computed": false,
                "start": 2096,
                "end": 2107
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2108,
                  "end": 2113
                }
              ],
              "optional": false,
              "start": 2096,
              "end": 2114
            },
            "directive": null,
            "start": 2096,
            "end": 2115
          }
        ],
        "start": 2090,
        "end": 2117
      },
      "start": 2026,
      "end": 2117
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2125,
                    "end": 2129
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2131,
                    "end": 2136
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2125,
                  "end": 2136
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
                    "start": 2138,
                    "end": 2143
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2145,
                    "end": 2151
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2138,
                  "end": 2151
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2153
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2156,
                "end": 2164
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2156,
              "end": 2166
            },
            "start": 2123,
            "end": 2166
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2168,
              "end": 2169
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2172,
              "end": 2173
            },
            "start": 2168,
            "end": 2173
          }
        ],
        "start": 2123,
        "end": 2173
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2175,
          "end": 2176
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2179,
          "end": 2180
        },
        "start": 2175,
        "end": 2180
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
          "start": 2182,
          "end": 2183
        },
        "start": 2182,
        "end": 2185
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
                  "start": 2193,
                  "end": 2200
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2201,
                  "end": 2204
                },
                "optional": false,
                "computed": false,
                "start": 2193,
                "end": 2204
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2205,
                  "end": 2210
                }
              ],
              "optional": false,
              "start": 2193,
              "end": 2211
            },
            "directive": null,
            "start": 2193,
            "end": 2212
          }
        ],
        "start": 2187,
        "end": 2214
      },
      "start": 2118,
      "end": 2214
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2222,
                    "end": 2226
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2228,
                    "end": 2233
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2222,
                  "end": 2233
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
                    "start": 2235,
                    "end": 2240
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2242,
                    "end": 2248
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2235,
                  "end": 2248
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2220,
              "end": 2250
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2254,
                  "end": 2259
                },
                "typeArguments": null,
                "start": 2254,
                "end": 2259
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
                      "start": 2262,
                      "end": 2266
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2268,
                      "end": 2277
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2262,
                    "end": 2277
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
                      "start": 2279,
                      "end": 2284
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2286,
                      "end": 2296
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2279,
                    "end": 2296
                  }
                ],
                "start": 2260,
                "end": 2298
              },
              "start": 2253,
              "end": 2298
            },
            "start": 2220,
            "end": 2298
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2301
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2304,
              "end": 2305
            },
            "start": 2300,
            "end": 2305
          }
        ],
        "start": 2220,
        "end": 2305
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2307,
          "end": 2308
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2311,
          "end": 2312
        },
        "start": 2307,
        "end": 2312
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
          "start": 2314,
          "end": 2315
        },
        "start": 2314,
        "end": 2317
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
                  "start": 2325,
                  "end": 2332
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2333,
                  "end": 2336
                },
                "optional": false,
                "computed": false,
                "start": 2325,
                "end": 2336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2342
                }
              ],
              "optional": false,
              "start": 2325,
              "end": 2343
            },
            "directive": null,
            "start": 2325,
            "end": 2344
          }
        ],
        "start": 2319,
        "end": 2346
      },
      "start": 2215,
      "end": 2346
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2354,
                    "end": 2358
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2365
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2354,
                  "end": 2365
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
                    "start": 2367,
                    "end": 2373
                  },
                  "value": {
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
                          "start": 2377,
                          "end": 2384
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2386,
                          "end": 2394
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2377,
                        "end": 2394
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
                          "start": 2396,
                          "end": 2405
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2407,
                          "end": 2417
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2396,
                        "end": 2417
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2375,
                    "end": 2419
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2367,
                  "end": 2419
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2352,
              "end": 2421
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2424,
              "end": 2434
            },
            "start": 2352,
            "end": 2434
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2436,
              "end": 2437
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2440,
              "end": 2441
            },
            "start": 2436,
            "end": 2441
          }
        ],
        "start": 2352,
        "end": 2441
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2443,
          "end": 2444
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2447,
          "end": 2448
        },
        "start": 2443,
        "end": 2448
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
          "start": 2450,
          "end": 2451
        },
        "start": 2450,
        "end": 2453
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
                  "start": 2461,
                  "end": 2468
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2469,
                  "end": 2472
                },
                "optional": false,
                "computed": false,
                "start": 2461,
                "end": 2472
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2473,
                  "end": 2481
                }
              ],
              "optional": false,
              "start": 2461,
              "end": 2482
            },
            "directive": null,
            "start": 2461,
            "end": 2483
          }
        ],
        "start": 2455,
        "end": 2485
      },
      "start": 2347,
      "end": 2485
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2493,
                    "end": 2497
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2499,
                    "end": 2504
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2493,
                  "end": 2504
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
                    "start": 2506,
                    "end": 2512
                  },
                  "value": {
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
                          "start": 2516,
                          "end": 2523
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2525,
                          "end": 2533
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2516,
                        "end": 2533
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
                          "start": 2535,
                          "end": 2544
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2546,
                          "end": 2556
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2535,
                        "end": 2556
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2514,
                    "end": 2558
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2506,
                  "end": 2558
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2491,
              "end": 2560
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2576
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2563,
              "end": 2578
            },
            "start": 2491,
            "end": 2578
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2580,
              "end": 2581
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2584,
              "end": 2585
            },
            "start": 2580,
            "end": 2585
          }
        ],
        "start": 2491,
        "end": 2585
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2587,
          "end": 2588
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2591,
          "end": 2592
        },
        "start": 2587,
        "end": 2592
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
          "start": 2594,
          "end": 2595
        },
        "start": 2594,
        "end": 2597
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
                  "start": 2605,
                  "end": 2612
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2613,
                  "end": 2616
                },
                "optional": false,
                "computed": false,
                "start": 2605,
                "end": 2616
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2617,
                  "end": 2625
                }
              ],
              "optional": false,
              "start": 2605,
              "end": 2626
            },
            "directive": null,
            "start": 2605,
            "end": 2627
          }
        ],
        "start": 2599,
        "end": 2629
      },
      "start": 2486,
      "end": 2629
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2637,
                    "end": 2641
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2643,
                    "end": 2648
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2637,
                  "end": 2648
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
                    "start": 2650,
                    "end": 2656
                  },
                  "value": {
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
                          "start": 2660,
                          "end": 2667
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2669,
                          "end": 2677
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2660,
                        "end": 2677
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
                          "start": 2679,
                          "end": 2688
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2690,
                          "end": 2700
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2679,
                        "end": 2700
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2658,
                    "end": 2702
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2650,
                  "end": 2702
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2704
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2712,
                  "end": 2722
                },
                "typeArguments": null,
                "start": 2712,
                "end": 2722
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
                      "start": 2725,
                      "end": 2729
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2731,
                      "end": 2740
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2725,
                    "end": 2740
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
                      "start": 2742,
                      "end": 2748
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
                            "start": 2752,
                            "end": 2759
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 2761,
                            "end": 2771
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2752,
                          "end": 2771
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
                            "start": 2773,
                            "end": 2782
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 2784,
                            "end": 2792
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2773,
                          "end": 2792
                        }
                      ],
                      "start": 2750,
                      "end": 2794
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2742,
                    "end": 2794
                  }
                ],
                "start": 2723,
                "end": 2796
              },
              "start": 2711,
              "end": 2796
            },
            "start": 2635,
            "end": 2796
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2802,
              "end": 2803
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2806,
              "end": 2807
            },
            "start": 2802,
            "end": 2807
          }
        ],
        "start": 2635,
        "end": 2807
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2809,
          "end": 2810
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2813,
          "end": 2814
        },
        "start": 2809,
        "end": 2814
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
          "start": 2816,
          "end": 2817
        },
        "start": 2816,
        "end": 2819
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
                  "start": 2827,
                  "end": 2834
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2835,
                  "end": 2838
                },
                "optional": false,
                "computed": false,
                "start": 2827,
                "end": 2838
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2847
                }
              ],
              "optional": false,
              "start": 2827,
              "end": 2848
            },
            "directive": null,
            "start": 2827,
            "end": 2849
          }
        ],
        "start": 2821,
        "end": 2851
      },
      "start": 2630,
      "end": 2851
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2859,
                    "end": 2863
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2859,
                    "end": 2863
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2859,
                  "end": 2863
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
                    "start": 2865,
                    "end": 2870
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2865,
                    "end": 2870
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2865,
                  "end": 2870
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2857,
              "end": 2872
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2880
            },
            "start": 2857,
            "end": 2880
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2882,
              "end": 2883
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2886,
              "end": 2887
            },
            "start": 2882,
            "end": 2887
          }
        ],
        "start": 2857,
        "end": 2887
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2889,
          "end": 2890
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2893,
          "end": 2894
        },
        "start": 2889,
        "end": 2894
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
          "start": 2896,
          "end": 2897
        },
        "start": 2896,
        "end": 2899
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
                  "start": 2907,
                  "end": 2914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2915,
                  "end": 2918
                },
                "optional": false,
                "computed": false,
                "start": 2907,
                "end": 2918
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2919,
                  "end": 2924
                }
              ],
              "optional": false,
              "start": 2907,
              "end": 2925
            },
            "directive": null,
            "start": 2907,
            "end": 2926
          }
        ],
        "start": 2901,
        "end": 2928
      },
      "start": 2852,
      "end": 2928
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 2936,
                    "end": 2940
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2936,
                    "end": 2940
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2936,
                  "end": 2940
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
                    "start": 2942,
                    "end": 2947
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2942,
                    "end": 2947
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2942,
                  "end": 2947
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2934,
              "end": 2949
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2952,
                "end": 2960
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2952,
              "end": 2962
            },
            "start": 2934,
            "end": 2962
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2964,
              "end": 2965
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2968,
              "end": 2969
            },
            "start": 2964,
            "end": 2969
          }
        ],
        "start": 2934,
        "end": 2969
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2971,
          "end": 2972
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2975,
          "end": 2976
        },
        "start": 2971,
        "end": 2976
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
          "start": 2978,
          "end": 2979
        },
        "start": 2978,
        "end": 2981
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
                  "start": 2989,
                  "end": 2996
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2997,
                  "end": 3000
                },
                "optional": false,
                "computed": false,
                "start": 2989,
                "end": 3000
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3001,
                  "end": 3006
                }
              ],
              "optional": false,
              "start": 2989,
              "end": 3007
            },
            "directive": null,
            "start": 2989,
            "end": 3008
          }
        ],
        "start": 2983,
        "end": 3010
      },
      "start": 2929,
      "end": 3010
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 3018,
                    "end": 3022
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3018,
                    "end": 3022
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3018,
                  "end": 3022
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
                    "start": 3024,
                    "end": 3029
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3024,
                    "end": 3029
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3024,
                  "end": 3029
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3031
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3035,
                  "end": 3040
                },
                "typeArguments": null,
                "start": 3035,
                "end": 3040
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
                      "start": 3043,
                      "end": 3047
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 3049,
                      "end": 3058
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3043,
                    "end": 3058
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
                      "start": 3060,
                      "end": 3065
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 3067,
                      "end": 3077
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3060,
                    "end": 3077
                  }
                ],
                "start": 3041,
                "end": 3079
              },
              "start": 3034,
              "end": 3079
            },
            "start": 3016,
            "end": 3079
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3081,
              "end": 3082
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3085,
              "end": 3086
            },
            "start": 3081,
            "end": 3086
          }
        ],
        "start": 3016,
        "end": 3086
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3088,
          "end": 3089
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3092,
          "end": 3093
        },
        "start": 3088,
        "end": 3093
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
          "start": 3095,
          "end": 3096
        },
        "start": 3095,
        "end": 3098
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
                  "start": 3106,
                  "end": 3113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3114,
                  "end": 3117
                },
                "optional": false,
                "computed": false,
                "start": 3106,
                "end": 3117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3118,
                  "end": 3123
                }
              ],
              "optional": false,
              "start": 3106,
              "end": 3124
            },
            "directive": null,
            "start": 3106,
            "end": 3125
          }
        ],
        "start": 3100,
        "end": 3127
      },
      "start": 3011,
      "end": 3127
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 3135,
                    "end": 3139
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3135,
                    "end": 3139
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3135,
                  "end": 3139
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
                    "start": 3141,
                    "end": 3147
                  },
                  "value": {
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
                          "start": 3151,
                          "end": 3158
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3151,
                          "end": 3158
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3151,
                        "end": 3158
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
                          "start": 3160,
                          "end": 3169
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3160,
                          "end": 3169
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3160,
                        "end": 3169
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3149,
                    "end": 3171
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3141,
                  "end": 3171
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3133,
              "end": 3173
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 3176,
              "end": 3186
            },
            "start": 3133,
            "end": 3186
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3188,
              "end": 3189
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3192,
              "end": 3193
            },
            "start": 3188,
            "end": 3193
          }
        ],
        "start": 3133,
        "end": 3193
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3195,
          "end": 3196
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3199,
          "end": 3200
        },
        "start": 3195,
        "end": 3200
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
          "start": 3202,
          "end": 3203
        },
        "start": 3202,
        "end": 3205
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
                  "start": 3213,
                  "end": 3220
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3221,
                  "end": 3224
                },
                "optional": false,
                "computed": false,
                "start": 3213,
                "end": 3224
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3225,
                  "end": 3233
                }
              ],
              "optional": false,
              "start": 3213,
              "end": 3234
            },
            "directive": null,
            "start": 3213,
            "end": 3235
          }
        ],
        "start": 3207,
        "end": 3237
      },
      "start": 3128,
      "end": 3237
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 3245,
                    "end": 3249
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3245,
                    "end": 3249
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3245,
                  "end": 3249
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
                    "start": 3251,
                    "end": 3257
                  },
                  "value": {
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
                          "start": 3261,
                          "end": 3268
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3261,
                          "end": 3268
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3261,
                        "end": 3268
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
                          "start": 3270,
                          "end": 3279
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3270,
                          "end": 3279
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3270,
                        "end": 3279
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3259,
                    "end": 3281
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3251,
                  "end": 3281
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3243,
              "end": 3283
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 3286,
                "end": 3299
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3286,
              "end": 3301
            },
            "start": 3243,
            "end": 3301
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3303,
              "end": 3304
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3307,
              "end": 3308
            },
            "start": 3303,
            "end": 3308
          }
        ],
        "start": 3243,
        "end": 3308
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3310,
          "end": 3311
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3314,
          "end": 3315
        },
        "start": 3310,
        "end": 3315
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
          "start": 3317,
          "end": 3318
        },
        "start": 3317,
        "end": 3320
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
                  "start": 3328,
                  "end": 3335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3336,
                  "end": 3339
                },
                "optional": false,
                "computed": false,
                "start": 3328,
                "end": 3339
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3340,
                  "end": 3348
                }
              ],
              "optional": false,
              "start": 3328,
              "end": 3349
            },
            "directive": null,
            "start": 3328,
            "end": 3350
          }
        ],
        "start": 3322,
        "end": 3352
      },
      "start": 3238,
      "end": 3352
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
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
                    "start": 3360,
                    "end": 3364
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3360,
                    "end": 3364
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3360,
                  "end": 3364
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
                    "start": 3366,
                    "end": 3372
                  },
                  "value": {
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
                          "start": 3376,
                          "end": 3383
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3376,
                          "end": 3383
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3376,
                        "end": 3383
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
                          "start": 3385,
                          "end": 3394
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3385,
                          "end": 3394
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3385,
                        "end": 3394
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3374,
                    "end": 3396
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3366,
                  "end": 3396
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3358,
              "end": 3398
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3406,
                  "end": 3416
                },
                "typeArguments": null,
                "start": 3406,
                "end": 3416
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
                      "start": 3419,
                      "end": 3423
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 3425,
                      "end": 3434
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3419,
                    "end": 3434
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
                      "start": 3436,
                      "end": 3442
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
                            "start": 3446,
                            "end": 3453
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 3455,
                            "end": 3465
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3446,
                          "end": 3465
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
                            "start": 3467,
                            "end": 3476
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 3478,
                            "end": 3486
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3467,
                          "end": 3486
                        }
                      ],
                      "start": 3444,
                      "end": 3488
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3436,
                    "end": 3488
                  }
                ],
                "start": 3417,
                "end": 3490
              },
              "start": 3405,
              "end": 3490
            },
            "start": 3358,
            "end": 3490
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3496,
              "end": 3497
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3500,
              "end": 3501
            },
            "start": 3496,
            "end": 3501
          }
        ],
        "start": 3358,
        "end": 3501
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3503,
          "end": 3504
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3507,
          "end": 3508
        },
        "start": 3503,
        "end": 3508
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
          "start": 3510,
          "end": 3511
        },
        "start": 3510,
        "end": 3513
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
                  "start": 3521,
                  "end": 3528
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3529,
                  "end": 3532
                },
                "optional": false,
                "computed": false,
                "start": 3521,
                "end": 3532
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3533,
                  "end": 3541
                }
              ],
              "optional": false,
              "start": 3521,
              "end": 3542
            },
            "directive": null,
            "start": 3521,
            "end": 3543
          }
        ],
        "start": 3515,
        "end": 3545
      },
      "start": 3353,
      "end": 3545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3545
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
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 229,
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
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 284,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 296,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 317,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 336,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 355,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
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
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 378,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 387,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 404,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 429,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 451,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 477,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 510,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 575,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 618,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 627,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 682,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 717,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 727,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 748,
    "end": 749
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 764,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 786,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 799,
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
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 810,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 824,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 835,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 842,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
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
    "value": "i",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "i",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 903,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 929,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 939,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 950,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "multiRobot",
    "start": 967,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 988,
    "end": 989
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1004,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1044,
    "end": 1045
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
    "value": ",",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1065,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1076,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1093,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "console",
    "start": 1135,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1143,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1147,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1167,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1177,
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
    "value": "primaryA",
    "start": 1186,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1196,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1207,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1229,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1242,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1248,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1269,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1278,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1290,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1301,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1344,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1356,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 1385,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1407,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1417,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1429,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1439,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1455,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1482,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1492,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1504,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
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
    "value": "for",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1521,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 1531,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1539,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1545,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1563,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1592,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1602,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1610,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1614,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1641,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1650,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 1666,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1693,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1703,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1711,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1715,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1735,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1745,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1754,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1770,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1812,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1824,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1844,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1854,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1863,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1884,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1897,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1903,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1914,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1924,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1933,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1945,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1956,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1989,
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
    "value": "console",
    "start": 1999,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2011,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2026,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2033,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2039,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2046,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2053,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 2064,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2086,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2104,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2108,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "for",
    "start": 2118,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2125,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2131,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2138,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2145,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2156,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2183,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2193,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2215,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2222,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2228,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2235,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2242,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 2254,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2262,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2268,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2286,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2315,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2325,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2333,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2337,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2347,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2354,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2360,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2367,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2377,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2386,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2396,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2407,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 2424,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2451,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2461,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2469,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2473,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2486,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2493,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2499,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2506,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2516,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2525,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2535,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2546,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2563,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2595,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2605,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2613,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2617,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2630,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "nameA",
    "start": 2643,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2650,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2660,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2669,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2679,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 2690,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 2712,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2725,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2731,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2742,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2752,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2761,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2773,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2784,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2817,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2827,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2835,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2839,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2852,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2859,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2865,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 2875,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2897,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2907,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2915,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2919,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2929,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2936,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2942,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2952,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2979,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2989,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2997,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3001,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3011,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3018,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3024,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 3035,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3043,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3049,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3060,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3067,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3096,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3106,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3114,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3118,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3128,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3135,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3141,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3151,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3160,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 3176,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3203,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3213,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3221,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3225,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3238,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3245,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3251,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3261,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3270,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 3286,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3318,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3328,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3336,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3340,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3353,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3360,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3366,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3376,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3385,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 3406,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3419,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3425,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3436,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3446,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3455,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3467,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3478,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3511,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3521,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3529,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3533,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3544,
    "end": 3545
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 35,
                    "end": 39
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 52
                      },
                      "typeArguments": null,
                      "start": 43,
                      "end": 52
                    },
                    "start": 43,
                    "end": 52
                  },
                  "start": 35,
                  "end": 52
                },
                "start": 33,
                "end": 52
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 95
                      },
                      "start": 70,
                      "end": 95
                    },
                    "start": 63,
                    "end": 96
                  }
                ],
                "start": 53,
                "end": 102
              },
              "expression": false,
              "start": 31,
              "end": 102
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 23,
            "end": 102
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 117
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 121,
                    "end": 125
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 142
                    },
                    "start": 129,
                    "end": 142
                  },
                  "start": 121,
                  "end": 142
                },
                "start": 119,
                "end": 142
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 160,
                        "end": 164
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 189
                      },
                      "start": 160,
                      "end": 189
                    },
                    "start": 153,
                    "end": 190
                  }
                ],
                "start": 143,
                "end": 196
              },
              "expression": false,
              "start": 117,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 196
          }
        ],
        "start": 17,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 198
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LeadGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 215
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 234
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lead",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 245
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 249,
                  "end": 253
                },
                "start": 247,
                "end": 253
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 254,
                "end": 256
              },
              "expression": false,
              "start": 245,
              "end": 256
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 241,
            "end": 256
          }
        ],
        "start": 235,
        "end": 259
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 259
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FollowerGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 280
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 299
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "follow",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 312
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                },
                "start": 314,
                "end": 320
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 321,
                "end": 323
              },
              "expression": false,
              "start": 312,
              "end": 323
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 306,
            "end": 323
          }
        ],
        "start": 300,
        "end": 326
      },
      "abstract": false,
      "declare": false,
      "start": 261,
      "end": 326
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RoyalGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 345
                },
                "typeArguments": null,
                "start": 335,
                "end": 345
              },
              "start": 333,
              "end": 345
            },
            "start": 332,
            "end": 345
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FollowerGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 365
            },
            "typeArguments": null,
            "arguments": [],
            "start": 348,
            "end": 367
          },
          "definite": false,
          "start": 332,
          "end": 367
        }
      ],
      "declare": false,
      "start": 328,
      "end": 368
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 374
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 383
          },
          "optional": false,
          "computed": false,
          "start": 373,
          "end": 383
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 373,
        "end": 385
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 399
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 399
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 393,
              "end": 401
            },
            "directive": null,
            "start": 393,
            "end": 402
          }
        ],
        "start": 387,
        "end": 404
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 426
            },
            "optional": false,
            "computed": false,
            "start": 414,
            "end": 426
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 414,
          "end": 428
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 436,
                  "end": 444
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 436,
                "end": 446
              },
              "directive": null,
              "start": 436,
              "end": 447
            }
          ],
          "start": 430,
          "end": 449
        },
        "alternate": null,
        "start": 410,
        "end": 449
      },
      "start": 369,
      "end": 449
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GuardInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 475
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RoyalGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 494
          },
          "typeArguments": null,
          "start": 484,
          "end": 494
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 495,
        "end": 497
      },
      "declare": false,
      "start": 451,
      "end": 497
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GuardInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 520
                },
                "typeArguments": null,
                "start": 506,
                "end": 520
              },
              "start": 504,
              "end": 520
            },
            "start": 503,
            "end": 520
          },
          "init": null,
          "definite": false,
          "start": 503,
          "end": 520
        }
      ],
      "declare": false,
      "start": 499,
      "end": 521
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 536
          },
          "optional": false,
          "computed": false,
          "start": 526,
          "end": 536
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 526,
        "end": 538
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
                  "start": 546,
                  "end": 547
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 552
                },
                "optional": false,
                "computed": false,
                "start": 546,
                "end": 552
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 546,
              "end": 554
            },
            "directive": null,
            "start": 546,
            "end": 555
          }
        ],
        "start": 540,
        "end": 557
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 579
            },
            "optional": false,
            "computed": false,
            "start": 567,
            "end": 579
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 567,
          "end": 581
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
                    "start": 589,
                    "end": 590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 597
                  },
                  "optional": false,
                  "computed": false,
                  "start": 589,
                  "end": 597
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 589,
                "end": 599
              },
              "directive": null,
              "start": 589,
              "end": 600
            }
          ],
          "start": 583,
          "end": 602
        },
        "alternate": null,
        "start": 563,
        "end": 602
      },
      "start": 522,
      "end": 602
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
            "name": "holder2",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 837
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
                  "start": 841,
                  "end": 842
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 841,
                "end": 842
              }
            ],
            "start": 840,
            "end": 843
          },
          "definite": false,
          "start": 830,
          "end": 843
        }
      ],
      "declare": false,
      "start": 826,
      "end": 844
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder2",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 857
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 859
            },
            "optional": false,
            "computed": false,
            "start": 850,
            "end": 859
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 860,
            "end": 868
          },
          "optional": false,
          "computed": false,
          "start": 850,
          "end": 868
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 850,
        "end": 870
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 885
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 887
              },
              "optional": false,
              "computed": false,
              "start": 878,
              "end": 887
            },
            "directive": null,
            "start": 878,
            "end": 888
          }
        ],
        "start": 872,
        "end": 890
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 909
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 911
              },
              "optional": false,
              "computed": false,
              "start": 902,
              "end": 911
            },
            "directive": null,
            "start": 902,
            "end": 912
          }
        ],
        "start": 896,
        "end": 914
      },
      "start": 846,
      "end": 914
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 932
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isElite",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 946
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 953,
                    "end": 957
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 971
                      },
                      "typeArguments": null,
                      "start": 961,
                      "end": 971
                    },
                    "start": 961,
                    "end": 971
                  },
                  "start": 953,
                  "end": 971
                },
                "start": 951,
                "end": 971
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 992,
                        "end": 996
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1008,
                        "end": 1018
                      },
                      "start": 992,
                      "end": 1018
                    },
                    "start": 985,
                    "end": 1019
                  }
                ],
                "start": 975,
                "end": 1025
              },
              "id": null,
              "generator": false,
              "start": 949,
              "end": 1025
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 939,
            "end": 1025
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1037
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1044,
                    "end": 1048
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1062
                      },
                      "typeArguments": null,
                      "start": 1052,
                      "end": 1062
                    },
                    "start": 1052,
                    "end": 1062
                  },
                  "start": 1044,
                  "end": 1062
                },
                "start": 1042,
                "end": 1062
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1083,
                        "end": 1087
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1099,
                        "end": 1109
                      },
                      "start": 1083,
                      "end": 1109
                    },
                    "start": 1076,
                    "end": 1110
                  }
                ],
                "start": 1066,
                "end": 1116
              },
              "id": null,
              "generator": false,
              "start": 1040,
              "end": 1116
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1030,
            "end": 1116
          }
        ],
        "start": 933,
        "end": 1118
      },
      "abstract": false,
      "declare": false,
      "start": 916,
      "end": 1118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowElite",
        "optional": false,
        "typeAnnotation": null,
        "start": 1126,
        "end": 1136
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1155
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defend",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1168
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1172,
                  "end": 1176
                },
                "start": 1170,
                "end": 1176
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1177,
                "end": 1179
              },
              "expression": false,
              "start": 1168,
              "end": 1179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1162,
            "end": 1179
          }
        ],
        "start": 1156,
        "end": 1181
      },
      "abstract": false,
      "declare": false,
      "start": 1120,
      "end": 1181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowMedic",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1199
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1218
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "heal",
              "optional": false,
              "typeAnnotation": null,
              "start": 1225,
              "end": 1229
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1233,
                  "end": 1237
                },
                "start": 1231,
                "end": 1237
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1238,
                "end": 1240
              },
              "expression": false,
              "start": 1229,
              "end": 1240
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1225,
            "end": 1240
          }
        ],
        "start": 1219,
        "end": 1242
      },
      "abstract": false,
      "declare": false,
      "start": 1183,
      "end": 1242
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
            "name": "guard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1248,
            "end": 1253
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1270
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1256,
            "end": 1272
          },
          "definite": false,
          "start": 1248,
          "end": 1272
        }
      ],
      "declare": false,
      "start": 1244,
      "end": 1273
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "guard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1278,
            "end": 1283
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isElite",
            "optional": false,
            "typeAnnotation": null,
            "start": 1284,
            "end": 1291
          },
          "optional": false,
          "computed": false,
          "start": 1278,
          "end": 1291
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1278,
        "end": 1293
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
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1306
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defend",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1313
                },
                "optional": false,
                "computed": false,
                "start": 1301,
                "end": 1313
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1301,
              "end": 1315
            },
            "directive": null,
            "start": 1301,
            "end": 1316
          }
        ],
        "start": 1295,
        "end": 1318
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "guard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1333
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1341
            },
            "optional": false,
            "computed": false,
            "start": 1328,
            "end": 1341
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1328,
          "end": 1343
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
                    "name": "guard",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1351,
                    "end": 1356
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "heal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1361
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1351,
                  "end": 1361
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1351,
                "end": 1363
              },
              "directive": null,
              "start": 1351,
              "end": 1364
            }
          ],
          "start": 1345,
          "end": 1366
        },
        "alternate": null,
        "start": 1324,
        "end": 1366
      },
      "start": 1274,
      "end": 1366
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Supplies",
        "optional": false,
        "typeAnnotation": null,
        "start": 1378,
        "end": 1386
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
              "name": "spoiled",
              "optional": false,
              "typeAnnotation": null,
              "start": 1393,
              "end": 1400
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1402,
                "end": 1409
              },
              "start": 1400,
              "end": 1409
            },
            "accessibility": null,
            "static": false,
            "start": 1393,
            "end": 1410
          }
        ],
        "start": 1387,
        "end": 1412
      },
      "declare": false,
      "start": 1368,
      "end": 1412
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sundries",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1432
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
              "name": "broken",
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1447,
                "end": 1454
              },
              "start": 1445,
              "end": 1454
            },
            "accessibility": null,
            "static": false,
            "start": 1439,
            "end": 1455
          }
        ],
        "start": 1433,
        "end": 1457
      },
      "declare": false,
      "start": 1414,
      "end": 1457
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Crate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1469,
        "end": 1474
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
              "start": 1475,
              "end": 1476
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1475,
            "end": 1476
          }
        ],
        "start": 1474,
        "end": 1477
      },
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
              "name": "contents",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1492
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1494,
                  "end": 1495
                },
                "typeArguments": null,
                "start": 1494,
                "end": 1495
              },
              "start": 1492,
              "end": 1495
            },
            "accessibility": null,
            "static": false,
            "start": 1484,
            "end": 1496
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "volume",
              "optional": false,
              "typeAnnotation": null,
              "start": 1501,
              "end": 1507
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1509,
                "end": 1515
              },
              "start": 1507,
              "end": 1515
            },
            "accessibility": null,
            "static": false,
            "start": 1501,
            "end": 1516
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 1521,
              "end": 1531
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1535,
                  "end": 1539
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1543,
                      "end": 1548
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Supplies",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1549,
                            "end": 1557
                          },
                          "typeArguments": null,
                          "start": 1549,
                          "end": 1557
                        }
                      ],
                      "start": 1548,
                      "end": 1558
                    },
                    "start": 1543,
                    "end": 1558
                  },
                  "start": 1543,
                  "end": 1558
                },
                "start": 1535,
                "end": 1558
              },
              "start": 1533,
              "end": 1558
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1521,
            "end": 1559
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSundries",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1574
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1578,
                  "end": 1582
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1586,
                      "end": 1591
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Sundries",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1592,
                            "end": 1600
                          },
                          "typeArguments": null,
                          "start": 1592,
                          "end": 1600
                        }
                      ],
                      "start": 1591,
                      "end": 1601
                    },
                    "start": 1586,
                    "end": 1601
                  },
                  "start": 1586,
                  "end": 1601
                },
                "start": 1578,
                "end": 1601
              },
              "start": 1576,
              "end": 1601
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1564,
            "end": 1602
          }
        ],
        "start": 1478,
        "end": 1604
      },
      "declare": false,
      "start": 1459,
      "end": 1604
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
            "name": "crate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Crate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1617,
                  "end": 1622
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1623,
                      "end": 1625
                    }
                  ],
                  "start": 1622,
                  "end": 1626
                },
                "start": 1617,
                "end": 1626
              },
              "start": 1615,
              "end": 1626
            },
            "start": 1610,
            "end": 1626
          },
          "init": null,
          "definite": false,
          "start": 1610,
          "end": 1626
        }
      ],
      "declare": false,
      "start": 1606,
      "end": 1627
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "crate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1633,
            "end": 1638
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSundries",
            "optional": false,
            "typeAnnotation": null,
            "start": 1639,
            "end": 1649
          },
          "optional": false,
          "computed": false,
          "start": 1633,
          "end": 1649
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1633,
        "end": 1651
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
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "crate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1659,
                    "end": 1664
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contents",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1665,
                    "end": 1673
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1659,
                  "end": 1673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "broken",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1674,
                  "end": 1680
                },
                "optional": false,
                "computed": false,
                "start": 1659,
                "end": 1680
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1683,
                "end": 1687
              },
              "start": 1659,
              "end": 1687
            },
            "directive": null,
            "start": 1659,
            "end": 1688
          }
        ],
        "start": 1653,
        "end": 1690
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "crate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1700,
              "end": 1705
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 1706,
              "end": 1716
            },
            "optional": false,
            "computed": false,
            "start": 1700,
            "end": 1716
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1700,
          "end": 1718
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "crate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1726,
                      "end": 1731
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "contents",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1732,
                      "end": 1740
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1726,
                    "end": 1740
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "spoiled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1741,
                    "end": 1748
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1726,
                  "end": 1748
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1751,
                  "end": 1755
                },
                "start": 1726,
                "end": 1755
              },
              "directive": null,
              "start": 1726,
              "end": 1756
            }
          ],
          "start": 1720,
          "end": 1758
        },
        "alternate": null,
        "start": 1696,
        "end": 1758
      },
      "start": 1629,
      "end": 1758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1801,
            "end": 1802
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 1803,
            "end": 1813
          },
          "optional": false,
          "computed": false,
          "start": 1801,
          "end": 1813
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1816,
            "end": 1817
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 1818,
            "end": 1828
          },
          "optional": false,
          "computed": false,
          "start": 1816,
          "end": 1828
        },
        "start": 1801,
        "end": 1828
      },
      "directive": null,
      "start": 1801,
      "end": 1829
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1830,
            "end": 1831
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 1832,
            "end": 1840
          },
          "optional": false,
          "computed": false,
          "start": 1830,
          "end": 1840
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1843,
            "end": 1844
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 1845,
            "end": 1853
          },
          "optional": false,
          "computed": false,
          "start": 1843,
          "end": 1853
        },
        "start": 1830,
        "end": 1853
      },
      "directive": null,
      "start": 1830,
      "end": 1854
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1872
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null,
              "start": 1879,
              "end": 1887
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1891,
                    "end": 1895
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1899,
                        "end": 1910
                      },
                      "typeArguments": null,
                      "start": 1899,
                      "end": 1910
                    },
                    "start": 1899,
                    "end": 1910
                  },
                  "start": 1891,
                  "end": 1910
                },
                "start": 1889,
                "end": 1910
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 1920,
                        "end": 1924
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1936,
                        "end": 1947
                      },
                      "start": 1920,
                      "end": 1947
                    },
                    "start": 1913,
                    "end": 1948
                  }
                ],
                "start": 1911,
                "end": 1950
              },
              "expression": false,
              "start": 1887,
              "end": 1950
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1879,
            "end": 1950
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 1956,
              "end": 1966
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1970,
                    "end": 1974
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1978,
                        "end": 1991
                      },
                      "typeArguments": null,
                      "start": 1978,
                      "end": 1991
                    },
                    "start": 1978,
                    "end": 1991
                  },
                  "start": 1970,
                  "end": 1991
                },
                "start": 1968,
                "end": 1991
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 2001,
                        "end": 2005
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2017,
                        "end": 2030
                      },
                      "start": 2001,
                      "end": 2030
                    },
                    "start": 1994,
                    "end": 2031
                  }
                ],
                "start": 1992,
                "end": 2033
              },
              "expression": false,
              "start": 1966,
              "end": 2033
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1956,
            "end": 2033
          }
        ],
        "start": 1873,
        "end": 2036
      },
      "abstract": false,
      "declare": false,
      "start": 1856,
      "end": 2036
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicLeader",
        "optional": false,
        "typeAnnotation": null,
        "start": 2044,
        "end": 2055
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 2064,
        "end": 2074
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lead",
              "optional": false,
              "typeAnnotation": null,
              "start": 2081,
              "end": 2085
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2089,
                  "end": 2093
                },
                "start": 2087,
                "end": 2093
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2094,
                "end": 2096
              },
              "expression": false,
              "start": 2085,
              "end": 2096
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2081,
            "end": 2096
          }
        ],
        "start": 2075,
        "end": 2098
      },
      "abstract": false,
      "declare": false,
      "start": 2038,
      "end": 2098
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicFollower",
        "optional": false,
        "typeAnnotation": null,
        "start": 2106,
        "end": 2119
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 2128,
        "end": 2138
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "follow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2145,
              "end": 2151
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2155,
                  "end": 2159
                },
                "start": 2153,
                "end": 2159
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2160,
                "end": 2162
              },
              "expression": false,
              "start": 2151,
              "end": 2162
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2145,
            "end": 2162
          }
        ],
        "start": 2139,
        "end": 2164
      },
      "abstract": false,
      "declare": false,
      "start": 2100,
      "end": 2164
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
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2170,
            "end": 2175
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MimicGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 2182,
              "end": 2192
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2178,
            "end": 2194
          },
          "definite": false,
          "start": 2170,
          "end": 2194
        }
      ],
      "declare": false,
      "start": 2166,
      "end": 2195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2197,
            "end": 2198
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 2199,
            "end": 2207
          },
          "optional": false,
          "computed": false,
          "start": 2197,
          "end": 2207
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2210,
            "end": 2215
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 2216,
            "end": 2224
          },
          "optional": false,
          "computed": false,
          "start": 2210,
          "end": 2224
        },
        "start": 2197,
        "end": 2224
      },
      "directive": null,
      "start": 2197,
      "end": 2225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2226,
            "end": 2227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 2228,
            "end": 2238
          },
          "optional": false,
          "computed": false,
          "start": 2226,
          "end": 2238
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2241,
            "end": 2246
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 2247,
            "end": 2257
          },
          "optional": false,
          "computed": false,
          "start": 2241,
          "end": 2257
        },
        "start": 2226,
        "end": 2257
      },
      "directive": null,
      "start": 2226,
      "end": 2258
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2264,
            "end": 2269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 2270,
            "end": 2280
          },
          "optional": false,
          "computed": false,
          "start": 2264,
          "end": 2280
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2264,
        "end": 2282
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
                  "name": "mimic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2290,
                  "end": 2295
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "follow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2302
                },
                "optional": false,
                "computed": false,
                "start": 2290,
                "end": 2302
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2290,
              "end": 2304
            },
            "directive": null,
            "start": 2290,
            "end": 2305
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mimic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2310,
                  "end": 2315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2316,
                  "end": 2326
                },
                "optional": false,
                "computed": false,
                "start": 2310,
                "end": 2326
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2330
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2341
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2341
              },
              "start": 2310,
              "end": 2341
            },
            "directive": null,
            "start": 2310,
            "end": 2342
          }
        ],
        "start": 2284,
        "end": 2344
      },
      "alternate": null,
      "start": 2260,
      "end": 2344
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuardInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2357,
        "end": 2376
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2391
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 2395,
                  "end": 2399
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LeadGuard",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2403,
                      "end": 2412
                    },
                    "typeArguments": null,
                    "start": 2403,
                    "end": 2412
                  },
                  "start": 2403,
                  "end": 2412
                },
                "start": 2395,
                "end": 2412
              },
              "start": 2393,
              "end": 2412
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2383,
            "end": 2413
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 2418,
              "end": 2428
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 2432,
                  "end": 2436
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FollowerGuard",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2440,
                      "end": 2453
                    },
                    "typeArguments": null,
                    "start": 2440,
                    "end": 2453
                  },
                  "start": 2440,
                  "end": 2453
                },
                "start": 2432,
                "end": 2453
              },
              "start": 2430,
              "end": 2453
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2418,
            "end": 2454
          }
        ],
        "start": 2377,
        "end": 2456
      },
      "declare": false,
      "start": 2347,
      "end": 2456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2456
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 6,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 35,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 40,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 43,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 70,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 75,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 86,
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
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 107,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 121,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 129,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 160,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 165,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 176,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 206,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 224,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
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
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 267,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 281,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 335,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 352,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 375,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "lead",
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
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 405,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 416,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 438,
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
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 451,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "GuardInterface",
    "start": 461,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 476,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 484,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "GuardInterface",
    "start": 506,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 528,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
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
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 558,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 569,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
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
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "holder2",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "holder2",
    "start": 850,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 860,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "holder2",
    "start": 878,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 891,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "holder2",
    "start": 902,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 916,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "ArrowGuard",
    "start": 922,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "isElite",
    "start": 939,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 953,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 958,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "ArrowElite",
    "start": 961,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 985,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 992,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 997,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "ArrowElite",
    "start": 1008,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "isMedic",
    "start": 1030,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "ArrowMedic",
    "start": 1052,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1088,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "ArrowMedic",
    "start": 1099,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1120,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "ArrowElite",
    "start": 1126,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1137,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "ArrowGuard",
    "start": 1145,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "defend",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1183,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "ArrowMedic",
    "start": 1189,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "ArrowGuard",
    "start": 1208,
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
    "value": "heal",
    "start": 1225,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "ArrowGuard",
    "start": 1260,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1274,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "isElite",
    "start": 1284,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "defend",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1319,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "isMedic",
    "start": 1334,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "heal",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1368,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "Supplies",
    "start": 1378,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "spoiled",
    "start": 1393,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1402,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1414,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "Sundries",
    "start": 1424,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1447,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1459,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "Crate",
    "start": 1469,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "contents",
    "start": 1484,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "volume",
    "start": 1501,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1509,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "isSupplies",
    "start": 1521,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1535,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "Crate",
    "start": 1543,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "Supplies",
    "start": 1549,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "isSundries",
    "start": 1564,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1578,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "Crate",
    "start": 1586,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "Sundries",
    "start": 1592,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "crate",
    "start": 1610,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "Crate",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1629,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "crate",
    "start": 1633,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "isSundries",
    "start": 1639,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
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
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "crate",
    "start": 1659,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "contents",
    "start": 1665,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1683,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1691,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "crate",
    "start": 1700,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "isSupplies",
    "start": 1706,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "crate",
    "start": 1726,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "contents",
    "start": 1732,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "spoiled",
    "start": 1741,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1803,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1818,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1832,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1845,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1856,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "MimicGuard",
    "start": 1862,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1879,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1891,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1896,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "MimicLeader",
    "start": 1899,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1913,
    "end": 1919
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1920,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1925,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "MimicLeader",
    "start": 1936,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1956,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1970,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1975,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "MimicFollower",
    "start": 1978,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1994,
    "end": 2000
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2001,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2006,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "MimicFollower",
    "start": 2017,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2038,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "MimicLeader",
    "start": 2044,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2056,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "MimicGuard",
    "start": 2064,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 2081,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2089,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2100,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "MimicFollower",
    "start": 2106,
    "end": 2119
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2120,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "MimicGuard",
    "start": 2128,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 2145,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2155,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2166,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "mimic",
    "start": 2170,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2178,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "MimicGuard",
    "start": 2182,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 2199,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "mimic",
    "start": 2210,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 2216,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 2228,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "mimic",
    "start": 2241,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 2247,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2260,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "mimic",
    "start": 2264,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 2270,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "mimic",
    "start": 2290,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 2296,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "mimic",
    "start": 2310,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 2316,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 2331,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2347,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "MimicGuardInterface",
    "start": 2357,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 2383,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2395,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2400,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 2403,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 2418,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2432,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 2440,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2455,
    "end": 2456
  }
]
```

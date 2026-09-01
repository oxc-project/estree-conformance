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
        "name": "Settings",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "name": "timeout",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 42
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onError",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 54
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 47,
            "end": 64
          }
        ],
        "start": 19,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getDefaultSettings",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 95
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 120
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 122,
                    "end": 126
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 113,
                  "end": 126
                }
              ],
              "start": 111,
              "end": 128
            },
            "start": 104,
            "end": 129
          }
        ],
        "start": 98,
        "end": 131
      },
      "expression": false,
      "start": 68,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CtorOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 150
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "start": 161,
                "end": 170
              }
            ],
            "returnType": {
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
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 182
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1000,
                          "raw": "1000",
                          "start": 184,
                          "end": 188
                        },
                        "start": 184,
                        "end": 188
                      },
                      "start": 182,
                      "end": 188
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 175,
                    "end": 188
                  }
                ],
                "start": 173,
                "end": 190
              },
              "start": 171,
              "end": 190
            },
            "start": 157,
            "end": 190
          }
        ],
        "start": 151,
        "end": 192
      },
      "declare": false,
      "start": 132,
      "end": 192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 214
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "settings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Settings",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 233
              },
              "typeArguments": null,
              "start": 225,
              "end": 233
            },
            "start": 223,
            "end": 233
          },
          "start": 215,
          "end": 233
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 235,
        "end": 248
      },
      "expression": false,
      "start": 194,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 299
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "getDefaultSettings",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 318
          }
        ],
        "optional": false,
        "start": 288,
        "end": 319
      },
      "directive": null,
      "start": 288,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 332
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 349
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 351,
                    "end": 355
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 342,
                  "end": 355
                }
              ],
              "start": 340,
              "end": 357
            },
            "id": null,
            "generator": false,
            "start": 333,
            "end": 358
          }
        ],
        "optional": false,
        "start": 321,
        "end": 359
      },
      "directive": null,
      "start": 321,
      "end": 360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 372
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 373,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CtorOnly",
                "optional": false,
                "typeAnnotation": null,
                "start": 381,
                "end": 389
              },
              "typeArguments": null,
              "start": 381,
              "end": 389
            },
            "start": 373,
            "end": 389
          }
        ],
        "optional": false,
        "start": 361,
        "end": 390
      },
      "directive": null,
      "start": 361,
      "end": 391
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 392,
          "end": 403
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 404,
            "end": 406
          }
        ],
        "optional": false,
        "start": 392,
        "end": 407
      },
      "directive": null,
      "start": 392,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "completely wrong",
            "raw": "'completely wrong'",
            "start": 421,
            "end": 439
          }
        ],
        "optional": false,
        "start": 409,
        "end": 440
      },
      "directive": null,
      "start": 409,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 453
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 454,
            "end": 459
          }
        ],
        "optional": false,
        "start": 442,
        "end": 460
      },
      "directive": null,
      "start": 442,
      "end": 461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableStart",
        "optional": false,
        "typeAnnotation": null,
        "start": 569,
        "end": 586
      },
      "typeParameters": null,
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
              "name": "useStart",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 602,
                "end": 609
              },
              "start": 600,
              "end": 609
            },
            "accessibility": null,
            "static": false,
            "start": 591,
            "end": 609
          }
        ],
        "start": 589,
        "end": 611
      },
      "declare": false,
      "start": 564,
      "end": 611
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableEnd",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 632
      },
      "typeParameters": null,
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
              "name": "useEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 643
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 646,
                "end": 653
              },
              "start": 644,
              "end": 653
            },
            "accessibility": null,
            "static": false,
            "start": 637,
            "end": 653
          }
        ],
        "start": 635,
        "end": 655
      },
      "declare": false,
      "start": 612,
      "end": 655
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigurableStartEnd",
        "optional": false,
        "typeAnnotation": null,
        "start": 661,
        "end": 681
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableStart",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 701
            },
            "typeArguments": null,
            "start": 684,
            "end": 701
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 719
            },
            "typeArguments": null,
            "start": 704,
            "end": 719
          }
        ],
        "start": 684,
        "end": 719
      },
      "declare": false,
      "start": 656,
      "end": 719
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InsertOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 743
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
              "name": "prefix",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 756
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 759,
                "end": 765
              },
              "start": 757,
              "end": 765
            },
            "accessibility": null,
            "static": false,
            "start": 750,
            "end": 765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "suffix",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 776
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 779,
                "end": 785
              },
              "start": 777,
              "end": 785
            },
            "accessibility": null,
            "static": false,
            "start": 770,
            "end": 785
          }
        ],
        "start": 744,
        "end": 787
      },
      "declare": false,
      "start": 720,
      "end": 787
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChangeOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 793,
        "end": 806
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConfigurableStartEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 829
            },
            "typeArguments": null,
            "start": 809,
            "end": 829
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InsertOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 845
            },
            "typeArguments": null,
            "start": 832,
            "end": 845
          }
        ],
        "start": 809,
        "end": 845
      },
      "declare": false,
      "start": 788,
      "end": 846
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "del",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 860
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
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConfigurableStartEnd",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 870,
                  "end": 890
                },
                "typeArguments": null,
                "start": 870,
                "end": 890
              },
              "start": 868,
              "end": 890
            },
            "start": 861,
            "end": 890
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 893,
            "end": 895
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 861,
          "end": 895
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
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
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 924
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 927,
                        "end": 933
                      },
                      "start": 925,
                      "end": 933
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 919,
                    "end": 933
                  }
                ],
                "start": 917,
                "end": 935
              },
              "start": 915,
              "end": 935
            },
            "start": 910,
            "end": 935
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 938,
            "end": 940
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 940
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
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
                          "name": "ChangeOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 961,
                          "end": 974
                        },
                        "typeArguments": null,
                        "start": 961,
                        "end": 974
                      },
                      "start": 961,
                      "end": 976
                    },
                    "start": 959,
                    "end": 976
                  },
                  "start": 952,
                  "end": 976
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 979,
                  "end": 981
                },
                "definite": false,
                "start": 952,
                "end": 981
              }
            ],
            "declare": false,
            "start": 948,
            "end": 982
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 987,
                  "end": 994
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 999
                },
                "optional": false,
                "computed": false,
                "start": 987,
                "end": 999
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1007
                }
              ],
              "optional": false,
              "start": 987,
              "end": 1008
            },
            "directive": null,
            "start": 987,
            "end": 1009
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "changes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1021
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1026
                },
                "optional": false,
                "computed": false,
                "start": 1014,
                "end": 1026
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1027,
                  "end": 1032
                }
              ],
              "optional": false,
              "start": 1014,
              "end": 1033
            },
            "directive": null,
            "start": 1014,
            "end": 1034
          }
        ],
        "start": 942,
        "end": 1036
      },
      "expression": false,
      "start": 848,
      "end": 1036
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 1044,
        "end": 1045
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1063
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1067,
                      "end": 1073
                    },
                    "start": 1065,
                    "end": 1073
                  },
                  "start": 1064,
                  "end": 1073
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1075,
                "end": 1078
              },
              "expression": false,
              "start": 1063,
              "end": 1078
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1052,
            "end": 1078
          }
        ],
        "start": 1046,
        "end": 1080
      },
      "abstract": false,
      "declare": false,
      "start": 1038,
      "end": 1080
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1154,
        "end": 1158
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1173,
                    "end": 1179
                  },
                  "start": 1171,
                  "end": 1179
                },
                "start": 1170,
                "end": 1179
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1182,
                  "end": 1183
                },
                "typeArguments": null,
                "start": 1182,
                "end": 1183
              },
              "start": 1180,
              "end": 1183
            },
            "start": 1165,
            "end": 1183
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1189
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1192,
                "end": 1198
              },
              "start": 1190,
              "end": 1198
            },
            "accessibility": null,
            "static": false,
            "start": 1188,
            "end": 1198
          }
        ],
        "start": 1159,
        "end": 1200
      },
      "declare": false,
      "start": 1144,
      "end": 1200
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
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ctor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1211,
                  "end": 1215
                },
                "typeArguments": null,
                "start": 1211,
                "end": 1215
              },
              "start": 1209,
              "end": 1215
            },
            "start": 1205,
            "end": 1215
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1219
          },
          "definite": false,
          "start": 1205,
          "end": 1219
        }
      ],
      "declare": false,
      "start": 1201,
      "end": 1219
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spoiler",
        "optional": false,
        "typeAnnotation": null,
        "start": 1226,
        "end": 1233
      },
      "typeParameters": null,
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
              "name": "nope",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1245,
                "end": 1251
              },
              "start": 1243,
              "end": 1251
            },
            "accessibility": null,
            "static": false,
            "start": 1238,
            "end": 1251
          }
        ],
        "start": 1236,
        "end": 1253
      },
      "declare": false,
      "start": 1221,
      "end": 1253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weak",
        "optional": false,
        "typeAnnotation": null,
        "start": 1259,
        "end": 1263
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1273
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1276,
                "end": 1282
              },
              "start": 1274,
              "end": 1282
            },
            "accessibility": null,
            "static": false,
            "start": 1272,
            "end": 1282
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 1287,
              "end": 1297
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1310,
                      "end": 1311
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1314,
                        "end": 1320
                      },
                      "start": 1312,
                      "end": 1320
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1310,
                    "end": 1320
                  }
                ],
                "start": 1300,
                "end": 1326
              },
              "start": 1298,
              "end": 1326
            },
            "accessibility": null,
            "static": false,
            "start": 1287,
            "end": 1326
          }
        ],
        "start": 1266,
        "end": 1328
      },
      "declare": false,
      "start": 1254,
      "end": 1328
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
            "name": "propertiesWrong",
            "optional": false,
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
                      "name": "properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1364,
                      "end": 1374
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
                              "name": "wrong",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1386,
                              "end": 1391
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1393,
                                "end": 1399
                              },
                              "start": 1391,
                              "end": 1399
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1386,
                            "end": 1399
                          }
                        ],
                        "start": 1376,
                        "end": 1405
                      },
                      "start": 1374,
                      "end": 1405
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1364,
                    "end": 1405
                  }
                ],
                "start": 1358,
                "end": 1407
              },
              "start": 1356,
              "end": 1407
            },
            "start": 1341,
            "end": 1407
          },
          "init": null,
          "definite": false,
          "start": 1341,
          "end": 1407
        }
      ],
      "declare": true,
      "start": 1329,
      "end": 1407
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
            "name": "weak",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Weak",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1418,
                      "end": 1422
                    },
                    "typeArguments": null,
                    "start": 1418,
                    "end": 1422
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Spoiler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1425,
                      "end": 1432
                    },
                    "typeArguments": null,
                    "start": 1425,
                    "end": 1432
                  }
                ],
                "start": 1418,
                "end": 1432
              },
              "start": 1416,
              "end": 1432
            },
            "start": 1412,
            "end": 1432
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "propertiesWrong",
            "optional": false,
            "typeAnnotation": null,
            "start": 1435,
            "end": 1450
          },
          "definite": false,
          "start": 1412,
          "end": 1450
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1450
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1451
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
    "value": "Settings",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "onError",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "getDefaultSettings",
    "start": 77,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "CtorOnly",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 161,
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
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 194,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 203,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 225,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 288,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "getDefaultSettings",
    "start": 300,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 321,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "timeout",
    "start": 342,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Null",
    "value": "null",
    "start": 373,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 378,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "CtorOnly",
    "start": 381,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 392,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 409,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "String",
    "value": "'completely wrong'",
    "start": 421,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 442,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 564,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStart",
    "start": 569,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "useStart",
    "start": 591,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 602,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 612,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "ConfigurableEnd",
    "start": 617,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "useEnd",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 646,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 656,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 661,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStart",
    "start": 684,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "ConfigurableEnd",
    "start": 704,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 720,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "InsertOptions",
    "start": 730,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "prefix",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "suffix",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 788,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "ChangeOptions",
    "start": 793,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 809,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "InsertOptions",
    "start": 832,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 848,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "del",
    "start": 857,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 861,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "ConfigurableStartEnd",
    "start": 870,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 952,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "ChangeOptions",
    "start": 961,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 987,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 995,
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
    "value": "options",
    "start": 1000,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "changes",
    "start": 1014,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1027,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1038,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1052,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1067,
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
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1144,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 1154,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1165,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1173,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 1211,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1221,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "Spoiler",
    "start": 1226,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1242,
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
    "value": "string",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "Weak",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1276,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1287,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1329,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "propertiesWrong",
    "start": 1341,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1364,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 1386,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1393,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "weak",
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
    "type": "Identifier",
    "value": "Weak",
    "start": 1418,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "Spoiler",
    "start": 1425,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "propertiesWrong",
    "start": 1435,
    "end": 1450
  }
]
```

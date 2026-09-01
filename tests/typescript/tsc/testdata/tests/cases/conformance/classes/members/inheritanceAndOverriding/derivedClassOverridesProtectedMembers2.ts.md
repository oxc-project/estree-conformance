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
            "name": "x",
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9,
                      "end": 12
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 14,
                        "end": 20
                      },
                      "start": 12,
                      "end": 20
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 9,
                    "end": 21
                  }
                ],
                "start": 7,
                "end": 23
              },
              "start": 5,
              "end": 23
            },
            "start": 4,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
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
            "name": "y",
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 36
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 38,
                        "end": 44
                      },
                      "start": 36,
                      "end": 44
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 33,
                    "end": 45
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 49
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      },
                      "start": 49,
                      "end": 57
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 46,
                    "end": 58
                  }
                ],
                "start": 31,
                "end": 60
              },
              "start": 29,
              "end": 60
            },
            "start": 28,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 28,
          "end": 60
        }
      ],
      "declare": false,
      "start": 24,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 72
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 92,
                "end": 100
              },
              "start": 90,
              "end": 100
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 79,
            "end": 101
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 129
                    },
                    "start": 119,
                    "end": 129
                  },
                  "start": 118,
                  "end": 129
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 131,
                "end": 134
              },
              "expression": false,
              "start": 117,
              "end": 134
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 106,
            "end": 134
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "start": 159,
                    "end": 168
                  }
                ],
                "start": 157,
                "end": 170
              },
              "expression": false,
              "start": 154,
              "end": 170
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 139,
            "end": 170
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 202
                      },
                      "typeArguments": null,
                      "start": 194,
                      "end": 202
                    },
                    "start": 192,
                    "end": 202
                  },
                  "start": 191,
                  "end": 202
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 204,
                "end": 207
              },
              "expression": false,
              "start": 190,
              "end": 207
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 175,
            "end": 207
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 237
                        },
                        "typeArguments": null,
                        "start": 229,
                        "end": 237
                      },
                      "start": 227,
                      "end": 237
                    },
                    "start": 226,
                    "end": 237
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 242,
                    "end": 246
                  },
                  "start": 239,
                  "end": 246
                },
                "start": 225,
                "end": 246
              },
              "start": 223,
              "end": 246
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 212,
            "end": 248
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "typeArguments": null,
                "start": 274,
                "end": 282
              },
              "start": 272,
              "end": 282
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 254,
            "end": 283
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 318
                      },
                      "typeArguments": null,
                      "start": 310,
                      "end": 318
                    },
                    "start": 308,
                    "end": 318
                  },
                  "start": 307,
                  "end": 318
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 320,
                "end": 323
              },
              "expression": false,
              "start": 306,
              "end": 323
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 288,
            "end": 323
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 363
                    },
                    "start": 355,
                    "end": 364
                  }
                ],
                "start": 353,
                "end": 366
              },
              "expression": false,
              "start": 350,
              "end": 366
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 328,
            "end": 366
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 405
                      },
                      "typeArguments": null,
                      "start": 397,
                      "end": 405
                    },
                    "start": 395,
                    "end": 405
                  },
                  "start": 394,
                  "end": 405
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 407,
                "end": 410
              },
              "expression": false,
              "start": 393,
              "end": 410
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 371,
            "end": 410
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 447
                        },
                        "typeArguments": null,
                        "start": 439,
                        "end": 447
                      },
                      "start": 437,
                      "end": 447
                    },
                    "start": 436,
                    "end": 447
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 452,
                    "end": 456
                  },
                  "start": 449,
                  "end": 456
                },
                "start": 435,
                "end": 456
              },
              "start": 433,
              "end": 456
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 415,
            "end": 458
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 471
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 483
                      },
                      "typeArguments": null,
                      "start": 475,
                      "end": 483
                    },
                    "start": 473,
                    "end": 483
                  },
                  "start": 472,
                  "end": 483
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 485,
                "end": 488
              },
              "expression": false,
              "start": 471,
              "end": 488
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 460,
            "end": 488
          }
        ],
        "start": 73,
        "end": 490
      },
      "abstract": false,
      "declare": false,
      "start": 62,
      "end": 490
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 563
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 576
      },
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 594
                },
                "typeArguments": null,
                "start": 586,
                "end": 594
              },
              "start": 584,
              "end": 594
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 583,
            "end": 595
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 601
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 612,
                        "end": 613
                      },
                      "typeArguments": null,
                      "start": 605,
                      "end": 613
                    },
                    "start": 603,
                    "end": 613
                  },
                  "start": 602,
                  "end": 613
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 615,
                "end": 618
              },
              "expression": false,
              "start": 601,
              "end": 618
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 600,
            "end": 618
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 628
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 640,
                      "end": 641
                    },
                    "start": 633,
                    "end": 642
                  }
                ],
                "start": 631,
                "end": 644
              },
              "expression": false,
              "start": 628,
              "end": 644
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 623,
            "end": 644
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 666
                      },
                      "typeArguments": null,
                      "start": 658,
                      "end": 666
                    },
                    "start": 656,
                    "end": 666
                  },
                  "start": 655,
                  "end": 666
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 668,
                "end": 671
              },
              "expression": false,
              "start": 654,
              "end": 671
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 649,
            "end": 671
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 677
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 690,
                          "end": 691
                        },
                        "typeArguments": null,
                        "start": 683,
                        "end": 691
                      },
                      "start": 681,
                      "end": 691
                    },
                    "start": 680,
                    "end": 691
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 696,
                    "end": 700
                  },
                  "start": 693,
                  "end": 700
                },
                "start": 679,
                "end": 700
              },
              "start": 677,
              "end": 700
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 676,
            "end": 701
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 715
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 725
                },
                "typeArguments": null,
                "start": 717,
                "end": 725
              },
              "start": 715,
              "end": 725
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 707,
            "end": 726
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 739
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 750,
                        "end": 751
                      },
                      "typeArguments": null,
                      "start": 743,
                      "end": 751
                    },
                    "start": 741,
                    "end": 751
                  },
                  "start": 740,
                  "end": 751
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 753,
                "end": 756
              },
              "expression": false,
              "start": 739,
              "end": 756
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 731,
            "end": 756
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 785,
                      "end": 786
                    },
                    "start": 778,
                    "end": 787
                  }
                ],
                "start": 776,
                "end": 789
              },
              "expression": false,
              "start": 773,
              "end": 789
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 761,
            "end": 789
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 806
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 817,
                        "end": 818
                      },
                      "typeArguments": null,
                      "start": 810,
                      "end": 818
                    },
                    "start": 808,
                    "end": 818
                  },
                  "start": 807,
                  "end": 818
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 820,
                "end": 823
              },
              "expression": false,
              "start": 806,
              "end": 823
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 794,
            "end": 823
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 836
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 849,
                          "end": 850
                        },
                        "typeArguments": null,
                        "start": 842,
                        "end": 850
                      },
                      "start": 840,
                      "end": 850
                    },
                    "start": 839,
                    "end": 850
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 855,
                    "end": 859
                  },
                  "start": 852,
                  "end": 859
                },
                "start": 838,
                "end": 859
              },
              "start": 836,
              "end": 859
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 828,
            "end": 860
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 877
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 888,
                        "end": 889
                      },
                      "typeArguments": null,
                      "start": 881,
                      "end": 889
                    },
                    "start": 879,
                    "end": 889
                  },
                  "start": 878,
                  "end": 889
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
                        "type": "Super",
                        "start": 893,
                        "end": 898
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 900
                        }
                      ],
                      "optional": false,
                      "start": 893,
                      "end": 901
                    },
                    "directive": null,
                    "start": 893,
                    "end": 902
                  }
                ],
                "start": 891,
                "end": 904
              },
              "expression": false,
              "start": 877,
              "end": 904
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 866,
            "end": 904
          }
        ],
        "start": 577,
        "end": 906
      },
      "abstract": false,
      "declare": false,
      "start": 550,
      "end": 906
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 922
                },
                "typeArguments": null,
                "start": 915,
                "end": 922
              },
              "start": 913,
              "end": 922
            },
            "start": 912,
            "end": 922
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 936
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 938
              }
            ],
            "start": 925,
            "end": 939
          },
          "definite": false,
          "start": 912,
          "end": 939
        }
      ],
      "declare": false,
      "start": 908,
      "end": 940
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 947
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 951
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
            },
            "optional": false,
            "computed": false,
            "start": 950,
            "end": 953
          },
          "definite": false,
          "start": 945,
          "end": 953
        }
      ],
      "declare": false,
      "start": 941,
      "end": 954
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 959,
            "end": 961
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 964,
                "end": 965
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 966,
                "end": 967
              },
              "optional": false,
              "computed": false,
              "start": 964,
              "end": 967
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 969
              }
            ],
            "optional": false,
            "start": 964,
            "end": 970
          },
          "definite": false,
          "start": 959,
          "end": 970
        }
      ],
      "declare": false,
      "start": 955,
      "end": 971
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 978
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 982
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 983,
              "end": 984
            },
            "optional": false,
            "computed": false,
            "start": 981,
            "end": 984
          },
          "definite": false,
          "start": 976,
          "end": 984
        }
      ],
      "declare": false,
      "start": 972,
      "end": 985
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
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 990,
            "end": 993
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 997
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 999
            },
            "optional": false,
            "computed": false,
            "start": 996,
            "end": 999
          },
          "definite": false,
          "start": 990,
          "end": 999
        }
      ],
      "declare": false,
      "start": 986,
      "end": 1000
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1002
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1004
          },
          "optional": false,
          "computed": false,
          "start": 1001,
          "end": 1004
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1007,
          "end": 1008
        },
        "start": 1001,
        "end": 1008
      },
      "directive": null,
      "start": 1001,
      "end": 1009
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1016
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1026
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1028
            },
            "optional": false,
            "computed": false,
            "start": 1019,
            "end": 1028
          },
          "definite": false,
          "start": 1014,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 1010,
      "end": 1029
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1034,
            "end": 1036
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1046
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1047,
                "end": 1048
              },
              "optional": false,
              "computed": false,
              "start": 1039,
              "end": 1048
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1049,
                "end": 1050
              }
            ],
            "optional": false,
            "start": 1039,
            "end": 1051
          },
          "definite": false,
          "start": 1034,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 1030,
      "end": 1052
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1059
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1069
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1071
            },
            "optional": false,
            "computed": false,
            "start": 1062,
            "end": 1071
          },
          "definite": false,
          "start": 1057,
          "end": 1071
        }
      ],
      "declare": false,
      "start": 1053,
      "end": 1072
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
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1077,
            "end": 1080
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1083,
              "end": 1090
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 1091,
              "end": 1092
            },
            "optional": false,
            "computed": false,
            "start": 1083,
            "end": 1092
          },
          "definite": false,
          "start": 1077,
          "end": 1092
        }
      ],
      "declare": false,
      "start": 1073,
      "end": 1093
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
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 1094,
            "end": 1101
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 1102,
            "end": 1103
          },
          "optional": false,
          "computed": false,
          "start": 1094,
          "end": 1103
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1106,
          "end": 1107
        },
        "start": 1094,
        "end": 1107
      },
      "directive": null,
      "start": 1094,
      "end": 1108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1121
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1132,
                    "end": 1138
                  },
                  "start": 1130,
                  "end": 1138
                },
                "start": 1129,
                "end": 1138
              }
            ],
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
                  "start": 1141,
                  "end": 1147
                },
                "typeArguments": null,
                "start": 1141,
                "end": 1147
              },
              "start": 1139,
              "end": 1147
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1128,
            "end": 1148
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1157,
                    "end": 1163
                  },
                  "start": 1155,
                  "end": 1163
                },
                "start": 1154,
                "end": 1163
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1174
                },
                "typeArguments": null,
                "start": 1166,
                "end": 1174
              },
              "start": 1164,
              "end": 1174
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1153,
            "end": 1175
          }
        ],
        "start": 1122,
        "end": 1177
      },
      "abstract": false,
      "declare": false,
      "start": 1110,
      "end": 1177
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1193
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1207
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1218,
                    "end": 1224
                  },
                  "start": 1216,
                  "end": 1224
                },
                "start": 1215,
                "end": 1224
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1234,
                  "end": 1235
                },
                "typeArguments": null,
                "start": 1227,
                "end": 1235
              },
              "start": 1225,
              "end": 1235
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1214,
            "end": 1236
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1245,
                    "end": 1251
                  },
                  "start": 1243,
                  "end": 1251
                },
                "start": 1242,
                "end": 1251
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1261,
                  "end": 1262
                },
                "typeArguments": null,
                "start": 1254,
                "end": 1262
              },
              "start": 1252,
              "end": 1262
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1241,
            "end": 1263
          }
        ],
        "start": 1208,
        "end": 1265
      },
      "abstract": false,
      "declare": false,
      "start": 1179,
      "end": 1265
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1283
                },
                "typeArguments": null,
                "start": 1275,
                "end": 1283
              },
              "start": 1273,
              "end": 1283
            },
            "start": 1271,
            "end": 1283
          },
          "init": null,
          "definite": false,
          "start": 1271,
          "end": 1283
        }
      ],
      "declare": false,
      "start": 1267,
      "end": 1284
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1289,
            "end": 1291
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1296
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1297,
              "end": 1299
            },
            "optional": false,
            "computed": true,
            "start": 1294,
            "end": 1300
          },
          "definite": false,
          "start": 1289,
          "end": 1300
        }
      ],
      "declare": false,
      "start": 1285,
      "end": 1301
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1306,
            "end": 1308
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1313
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1314,
              "end": 1315
            },
            "optional": false,
            "computed": true,
            "start": 1311,
            "end": 1316
          },
          "definite": false,
          "start": 1306,
          "end": 1316
        }
      ],
      "declare": false,
      "start": 1302,
      "end": 1317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1318
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 24,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 92,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 116,
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
    "value": "a",
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
    "value": "typeof",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 139,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
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
    "start": 159,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 175,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 185,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 194,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 212,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 236,
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
    "value": "=>",
    "start": 239,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 254,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 274,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 288,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 298,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 310,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
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
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 328,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 338,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 355,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "protected",
    "start": 371,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 381,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 415,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 425,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 439,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 460,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 475,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "class",
    "start": 550,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 556,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 564,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 586,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 605,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
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
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 633,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 658,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 683,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 693,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 707,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 717,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 731,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 743,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 761,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 778,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 794,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 810,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 828,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 842,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 852,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 855,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 866,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 881,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 908,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 915,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 945,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 955,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Keyword",
    "value": "var",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "var",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1019,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1030,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1034,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1039,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1083,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1141,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1185,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1194,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "[",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "value": "number",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1254,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1271,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1275,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "String",
    "value": "''",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1311,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  }
]
```

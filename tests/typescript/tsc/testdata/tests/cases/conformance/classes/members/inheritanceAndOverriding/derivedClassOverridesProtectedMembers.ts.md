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
            "end": 247
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
              "start": 270,
              "end": 271
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
                  "start": 280,
                  "end": 281
                },
                "typeArguments": null,
                "start": 273,
                "end": 281
              },
              "start": 271,
              "end": 281
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
            "start": 253,
            "end": 282
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
              "start": 304,
              "end": 305
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
                        "start": 316,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 317
                    },
                    "start": 307,
                    "end": 317
                  },
                  "start": 306,
                  "end": 317
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 319,
                "end": 322
              },
              "expression": false,
              "start": 305,
              "end": 322
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 287,
            "end": 322
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
              "start": 348,
              "end": 349
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
                      "start": 361,
                      "end": 362
                    },
                    "start": 354,
                    "end": 363
                  }
                ],
                "start": 352,
                "end": 365
              },
              "expression": false,
              "start": 349,
              "end": 365
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 327,
            "end": 365
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
              "start": 391,
              "end": 392
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
                        "start": 403,
                        "end": 404
                      },
                      "typeArguments": null,
                      "start": 396,
                      "end": 404
                    },
                    "start": 394,
                    "end": 404
                  },
                  "start": 393,
                  "end": 404
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 406,
                "end": 409
              },
              "expression": false,
              "start": 392,
              "end": 409
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 370,
            "end": 409
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
              "start": 431,
              "end": 432
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
                          "start": 445,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 438,
                        "end": 446
                      },
                      "start": 436,
                      "end": 446
                    },
                    "start": 435,
                    "end": 446
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 451,
                    "end": 455
                  },
                  "start": 448,
                  "end": 455
                },
                "start": 434,
                "end": 455
              },
              "start": 432,
              "end": 455
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
            "start": 414,
            "end": 456
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
              "start": 462,
              "end": 473
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
                        "start": 484,
                        "end": 485
                      },
                      "typeArguments": null,
                      "start": 477,
                      "end": 485
                    },
                    "start": 475,
                    "end": 485
                  },
                  "start": 474,
                  "end": 485
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 487,
                "end": 490
              },
              "expression": false,
              "start": 473,
              "end": 490
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 462,
            "end": 490
          }
        ],
        "start": 73,
        "end": 492
      },
      "abstract": false,
      "declare": false,
      "start": 62,
      "end": 492
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
        "start": 500,
        "end": 507
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
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
              "start": 537,
              "end": 538
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
                  "start": 547,
                  "end": 548
                },
                "typeArguments": null,
                "start": 540,
                "end": 548
              },
              "start": 538,
              "end": 548
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
            "start": 527,
            "end": 549
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
              "start": 564,
              "end": 565
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
                        "start": 576,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 569,
                      "end": 577
                    },
                    "start": 567,
                    "end": 577
                  },
                  "start": 566,
                  "end": 577
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 579,
                "end": 582
              },
              "expression": false,
              "start": 565,
              "end": 582
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 554,
            "end": 582
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
              "start": 601,
              "end": 602
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
                      "start": 614,
                      "end": 615
                    },
                    "start": 607,
                    "end": 616
                  }
                ],
                "start": 605,
                "end": 618
              },
              "expression": false,
              "start": 602,
              "end": 618
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 587,
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
              "start": 637,
              "end": 638
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
                        "start": 649,
                        "end": 650
                      },
                      "typeArguments": null,
                      "start": 642,
                      "end": 650
                    },
                    "start": 640,
                    "end": 650
                  },
                  "start": 639,
                  "end": 650
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 652,
                "end": 655
              },
              "expression": false,
              "start": 638,
              "end": 655
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 623,
            "end": 655
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
              "start": 670,
              "end": 671
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
                          "start": 684,
                          "end": 685
                        },
                        "typeArguments": null,
                        "start": 677,
                        "end": 685
                      },
                      "start": 675,
                      "end": 685
                    },
                    "start": 674,
                    "end": 685
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 690,
                    "end": 694
                  },
                  "start": 687,
                  "end": 694
                },
                "start": 673,
                "end": 694
              },
              "start": 671,
              "end": 694
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
            "start": 660,
            "end": 695
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
              "start": 718,
              "end": 719
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
                  "start": 728,
                  "end": 729
                },
                "typeArguments": null,
                "start": 721,
                "end": 729
              },
              "start": 719,
              "end": 729
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
            "start": 701,
            "end": 730
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
              "start": 752,
              "end": 753
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
                        "start": 764,
                        "end": 765
                      },
                      "typeArguments": null,
                      "start": 757,
                      "end": 765
                    },
                    "start": 755,
                    "end": 765
                  },
                  "start": 754,
                  "end": 765
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 767,
                "end": 770
              },
              "expression": false,
              "start": 753,
              "end": 770
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 735,
            "end": 770
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
              "start": 796,
              "end": 797
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
                      "start": 809,
                      "end": 810
                    },
                    "start": 802,
                    "end": 811
                  }
                ],
                "start": 800,
                "end": 813
              },
              "expression": false,
              "start": 797,
              "end": 813
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 775,
            "end": 813
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
              "start": 839,
              "end": 840
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
                        "start": 851,
                        "end": 852
                      },
                      "typeArguments": null,
                      "start": 844,
                      "end": 852
                    },
                    "start": 842,
                    "end": 852
                  },
                  "start": 841,
                  "end": 852
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 854,
                "end": 857
              },
              "expression": false,
              "start": 840,
              "end": 857
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 818,
            "end": 857
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
              "start": 879,
              "end": 880
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
                          "start": 893,
                          "end": 894
                        },
                        "typeArguments": null,
                        "start": 886,
                        "end": 894
                      },
                      "start": 884,
                      "end": 894
                    },
                    "start": 883,
                    "end": 894
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 899,
                    "end": 903
                  },
                  "start": 896,
                  "end": 903
                },
                "start": 882,
                "end": 903
              },
              "start": 880,
              "end": 903
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
            "start": 862,
            "end": 904
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
              "start": 910,
              "end": 921
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
                        "start": 932,
                        "end": 933
                      },
                      "typeArguments": null,
                      "start": 925,
                      "end": 933
                    },
                    "start": 923,
                    "end": 933
                  },
                  "start": 922,
                  "end": 933
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
                        "start": 937,
                        "end": 942
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 944
                        }
                      ],
                      "optional": false,
                      "start": 937,
                      "end": 945
                    },
                    "directive": null,
                    "start": 937,
                    "end": 945
                  }
                ],
                "start": 935,
                "end": 947
              },
              "expression": false,
              "start": 921,
              "end": 947
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 910,
            "end": 947
          }
        ],
        "start": 521,
        "end": 949
      },
      "abstract": false,
      "declare": false,
      "start": 494,
      "end": 949
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 949
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
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 253,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 263,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 273,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 287,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 297,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 309,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "protected",
    "start": 327,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 337,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 354,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 370,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 380,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 396,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 414,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 424,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 438,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 448,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 462,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 477,
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
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 500,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 508,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 527,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 540,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 554,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 569,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 587,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 607,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 623,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 633,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 642,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 660,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 677,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 687,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 701,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 711,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 721,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 735,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 745,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 757,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 775,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 785,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 802,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 818,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 828,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 835,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 844,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 862,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 872,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 886,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 896,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 899,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 910,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 925,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 937,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  }
]
```

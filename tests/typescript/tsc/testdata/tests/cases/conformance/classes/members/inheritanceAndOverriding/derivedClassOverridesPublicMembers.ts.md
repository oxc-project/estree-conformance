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
              "start": 79,
              "end": 80
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
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 82,
                "end": 90
              },
              "start": 80,
              "end": 90
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
            "start": 79,
            "end": 91
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
              "start": 96,
              "end": 97
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
                        "start": 108,
                        "end": 109
                      },
                      "typeArguments": null,
                      "start": 101,
                      "end": 109
                    },
                    "start": 99,
                    "end": 109
                  },
                  "start": 98,
                  "end": 109
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 111,
                "end": 114
              },
              "expression": false,
              "start": 97,
              "end": 114
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 96,
            "end": 114
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
              "start": 123,
              "end": 124
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
                      "start": 136,
                      "end": 137
                    },
                    "start": 129,
                    "end": 138
                  }
                ],
                "start": 127,
                "end": 140
              },
              "expression": false,
              "start": 124,
              "end": 140
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 119,
            "end": 140
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
              "start": 149,
              "end": 150
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
                        "start": 161,
                        "end": 162
                      },
                      "typeArguments": null,
                      "start": 154,
                      "end": 162
                    },
                    "start": 152,
                    "end": 162
                  },
                  "start": 151,
                  "end": 162
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 164,
                "end": 167
              },
              "expression": false,
              "start": 150,
              "end": 167
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 167
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
              "start": 172,
              "end": 173
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
                          "start": 186,
                          "end": 187
                        },
                        "typeArguments": null,
                        "start": 179,
                        "end": 187
                      },
                      "start": 177,
                      "end": 187
                    },
                    "start": 176,
                    "end": 187
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 192,
                    "end": 196
                  },
                  "start": 189,
                  "end": 196
                },
                "start": 175,
                "end": 196
              },
              "start": 173,
              "end": 196
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
            "start": 172,
            "end": 197
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
              "start": 210,
              "end": 211
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
                  "start": 220,
                  "end": 221
                },
                "typeArguments": null,
                "start": 213,
                "end": 221
              },
              "start": 211,
              "end": 221
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
            "start": 203,
            "end": 222
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
              "start": 234,
              "end": 235
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
                        "start": 246,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 239,
                      "end": 247
                    },
                    "start": 237,
                    "end": 247
                  },
                  "start": 236,
                  "end": 247
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 249,
                "end": 252
              },
              "expression": false,
              "start": 235,
              "end": 252
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 227,
            "end": 252
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
              "start": 268,
              "end": 269
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
                      "start": 281,
                      "end": 282
                    },
                    "start": 274,
                    "end": 283
                  }
                ],
                "start": 272,
                "end": 285
              },
              "expression": false,
              "start": 269,
              "end": 285
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 257,
            "end": 285
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
              "start": 301,
              "end": 302
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
                        "start": 313,
                        "end": 314
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 314
                    },
                    "start": 304,
                    "end": 314
                  },
                  "start": 303,
                  "end": 314
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 316,
                "end": 319
              },
              "expression": false,
              "start": 302,
              "end": 319
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 290,
            "end": 319
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
              "start": 331,
              "end": 332
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
                          "start": 345,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 338,
                        "end": 346
                      },
                      "start": 336,
                      "end": 346
                    },
                    "start": 335,
                    "end": 346
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 351,
                    "end": 355
                  },
                  "start": 348,
                  "end": 355
                },
                "start": 334,
                "end": 355
              },
              "start": 332,
              "end": 355
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
            "start": 324,
            "end": 356
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
              "start": 362,
              "end": 373
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
                        "start": 384,
                        "end": 385
                      },
                      "typeArguments": null,
                      "start": 377,
                      "end": 385
                    },
                    "start": 375,
                    "end": 385
                  },
                  "start": 374,
                  "end": 385
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 387,
                "end": 390
              },
              "expression": false,
              "start": 373,
              "end": 390
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 362,
            "end": 390
          }
        ],
        "start": 73,
        "end": 392
      },
      "abstract": false,
      "declare": false,
      "start": 62,
      "end": 392
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
        "start": 400,
        "end": 407
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 420
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
              "start": 427,
              "end": 428
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
                  "start": 437,
                  "end": 438
                },
                "typeArguments": null,
                "start": 430,
                "end": 438
              },
              "start": 428,
              "end": 438
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
            "start": 427,
            "end": 439
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
              "start": 444,
              "end": 445
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
                        "start": 456,
                        "end": 457
                      },
                      "typeArguments": null,
                      "start": 449,
                      "end": 457
                    },
                    "start": 447,
                    "end": 457
                  },
                  "start": 446,
                  "end": 457
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 459,
                "end": 462
              },
              "expression": false,
              "start": 445,
              "end": 462
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 444,
            "end": 462
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
              "start": 471,
              "end": 472
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
                      "start": 484,
                      "end": 485
                    },
                    "start": 477,
                    "end": 486
                  }
                ],
                "start": 475,
                "end": 488
              },
              "expression": false,
              "start": 472,
              "end": 488
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 467,
            "end": 488
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
              "start": 497,
              "end": 498
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
                        "start": 509,
                        "end": 510
                      },
                      "typeArguments": null,
                      "start": 502,
                      "end": 510
                    },
                    "start": 500,
                    "end": 510
                  },
                  "start": 499,
                  "end": 510
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 512,
                "end": 515
              },
              "expression": false,
              "start": 498,
              "end": 515
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 493,
            "end": 515
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
              "start": 520,
              "end": 521
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
                          "start": 534,
                          "end": 535
                        },
                        "typeArguments": null,
                        "start": 527,
                        "end": 535
                      },
                      "start": 525,
                      "end": 535
                    },
                    "start": 524,
                    "end": 535
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 540,
                    "end": 544
                  },
                  "start": 537,
                  "end": 544
                },
                "start": 523,
                "end": 544
              },
              "start": 521,
              "end": 544
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
            "start": 520,
            "end": 545
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
              "start": 558,
              "end": 559
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
                  "start": 568,
                  "end": 569
                },
                "typeArguments": null,
                "start": 561,
                "end": 569
              },
              "start": 559,
              "end": 569
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
            "start": 551,
            "end": 570
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
              "start": 582,
              "end": 583
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
                        "start": 594,
                        "end": 595
                      },
                      "typeArguments": null,
                      "start": 587,
                      "end": 595
                    },
                    "start": 585,
                    "end": 595
                  },
                  "start": 584,
                  "end": 595
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 597,
                "end": 600
              },
              "expression": false,
              "start": 583,
              "end": 600
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 575,
            "end": 600
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
              "start": 616,
              "end": 617
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
                      "start": 629,
                      "end": 630
                    },
                    "start": 622,
                    "end": 631
                  }
                ],
                "start": 620,
                "end": 633
              },
              "expression": false,
              "start": 617,
              "end": 633
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 605,
            "end": 633
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
              "start": 649,
              "end": 650
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
                        "start": 661,
                        "end": 662
                      },
                      "typeArguments": null,
                      "start": 654,
                      "end": 662
                    },
                    "start": 652,
                    "end": 662
                  },
                  "start": 651,
                  "end": 662
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 664,
                "end": 667
              },
              "expression": false,
              "start": 650,
              "end": 667
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 638,
            "end": 667
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
              "start": 679,
              "end": 680
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
                          "start": 693,
                          "end": 694
                        },
                        "typeArguments": null,
                        "start": 686,
                        "end": 694
                      },
                      "start": 684,
                      "end": 694
                    },
                    "start": 683,
                    "end": 694
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 699,
                    "end": 703
                  },
                  "start": 696,
                  "end": 703
                },
                "start": 682,
                "end": 703
              },
              "start": 680,
              "end": 703
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
            "start": 672,
            "end": 704
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
              "start": 710,
              "end": 721
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
                        "start": 732,
                        "end": 733
                      },
                      "typeArguments": null,
                      "start": 725,
                      "end": 733
                    },
                    "start": 723,
                    "end": 733
                  },
                  "start": 722,
                  "end": 733
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
                        "start": 737,
                        "end": 742
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 743,
                          "end": 744
                        }
                      ],
                      "optional": false,
                      "start": 737,
                      "end": 745
                    },
                    "directive": null,
                    "start": 737,
                    "end": 745
                  }
                ],
                "start": 735,
                "end": 747
              },
              "expression": false,
              "start": 721,
              "end": 747
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 710,
            "end": 747
          }
        ],
        "start": 421,
        "end": 749
      },
      "abstract": false,
      "declare": false,
      "start": 394,
      "end": 749
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
                  "start": 758,
                  "end": 765
                },
                "typeArguments": null,
                "start": 758,
                "end": 765
              },
              "start": 756,
              "end": 765
            },
            "start": 755,
            "end": 765
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 779
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 781
              }
            ],
            "start": 768,
            "end": 782
          },
          "definite": false,
          "start": 755,
          "end": 782
        }
      ],
      "declare": false,
      "start": 751,
      "end": 783
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
            "start": 788,
            "end": 790
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 794
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "optional": false,
            "computed": false,
            "start": 793,
            "end": 796
          },
          "definite": false,
          "start": 788,
          "end": 796
        }
      ],
      "declare": false,
      "start": 784,
      "end": 797
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
            "start": 802,
            "end": 804
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
                "start": 807,
                "end": 808
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 809,
                "end": 810
              },
              "optional": false,
              "computed": false,
              "start": 807,
              "end": 810
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 812
              }
            ],
            "optional": false,
            "start": 807,
            "end": 813
          },
          "definite": false,
          "start": 802,
          "end": 813
        }
      ],
      "declare": false,
      "start": 798,
      "end": 814
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
            "start": 819,
            "end": 821
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 825
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 827
            },
            "optional": false,
            "computed": false,
            "start": 824,
            "end": 827
          },
          "definite": false,
          "start": 819,
          "end": 827
        }
      ],
      "declare": false,
      "start": 815,
      "end": 828
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
            "start": 833,
            "end": 836
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 839,
              "end": 840
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 842
            },
            "optional": false,
            "computed": false,
            "start": 839,
            "end": 842
          },
          "definite": false,
          "start": 833,
          "end": 842
        }
      ],
      "declare": false,
      "start": 829,
      "end": 843
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
            "start": 844,
            "end": 845
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 846,
            "end": 847
          },
          "optional": false,
          "computed": false,
          "start": 844,
          "end": 847
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 851
        },
        "start": 844,
        "end": 851
      },
      "directive": null,
      "start": 844,
      "end": 852
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
            "start": 857,
            "end": 859
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 869
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 871
            },
            "optional": false,
            "computed": false,
            "start": 862,
            "end": 871
          },
          "definite": false,
          "start": 857,
          "end": 871
        }
      ],
      "declare": false,
      "start": 853,
      "end": 872
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
            "start": 877,
            "end": 879
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
                "start": 882,
                "end": 889
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 891
              },
              "optional": false,
              "computed": false,
              "start": 882,
              "end": 891
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 892,
                "end": 893
              }
            ],
            "optional": false,
            "start": 882,
            "end": 894
          },
          "definite": false,
          "start": 877,
          "end": 894
        }
      ],
      "declare": false,
      "start": 873,
      "end": 895
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
            "start": 900,
            "end": 902
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 912
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 914
            },
            "optional": false,
            "computed": false,
            "start": 905,
            "end": 914
          },
          "definite": false,
          "start": 900,
          "end": 914
        }
      ],
      "declare": false,
      "start": 896,
      "end": 915
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
            "start": 920,
            "end": 923
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 933
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 934,
              "end": 935
            },
            "optional": false,
            "computed": false,
            "start": 926,
            "end": 935
          },
          "definite": false,
          "start": 920,
          "end": 935
        }
      ],
      "declare": false,
      "start": 916,
      "end": 936
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
            "start": 937,
            "end": 944
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 946
          },
          "optional": false,
          "computed": false,
          "start": 937,
          "end": 946
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 950
        },
        "start": 937,
        "end": 950
      },
      "directive": null,
      "start": 937,
      "end": 951
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
        "start": 959,
        "end": 964
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
                    "start": 975,
                    "end": 981
                  },
                  "start": 973,
                  "end": 981
                },
                "start": 972,
                "end": 981
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
                  "start": 984,
                  "end": 990
                },
                "typeArguments": null,
                "start": 984,
                "end": 990
              },
              "start": 982,
              "end": 990
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 971,
            "end": 991
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
                    "start": 1000,
                    "end": 1006
                  },
                  "start": 998,
                  "end": 1006
                },
                "start": 997,
                "end": 1006
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
                  "start": 1016,
                  "end": 1017
                },
                "typeArguments": null,
                "start": 1009,
                "end": 1017
              },
              "start": 1007,
              "end": 1017
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 996,
            "end": 1018
          }
        ],
        "start": 965,
        "end": 1020
      },
      "abstract": false,
      "declare": false,
      "start": 953,
      "end": 1020
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
        "start": 1028,
        "end": 1036
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1050
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
                    "start": 1061,
                    "end": 1067
                  },
                  "start": 1059,
                  "end": 1067
                },
                "start": 1058,
                "end": 1067
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
                  "start": 1077,
                  "end": 1078
                },
                "typeArguments": null,
                "start": 1070,
                "end": 1078
              },
              "start": 1068,
              "end": 1078
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1057,
            "end": 1079
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
                    "start": 1088,
                    "end": 1094
                  },
                  "start": 1086,
                  "end": 1094
                },
                "start": 1085,
                "end": 1094
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
                  "start": 1104,
                  "end": 1105
                },
                "typeArguments": null,
                "start": 1097,
                "end": 1105
              },
              "start": 1095,
              "end": 1105
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1084,
            "end": 1106
          }
        ],
        "start": 1051,
        "end": 1108
      },
      "abstract": false,
      "declare": false,
      "start": 1022,
      "end": 1108
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
                  "start": 1118,
                  "end": 1126
                },
                "typeArguments": null,
                "start": 1118,
                "end": 1126
              },
              "start": 1116,
              "end": 1126
            },
            "start": 1114,
            "end": 1126
          },
          "init": null,
          "definite": false,
          "start": 1114,
          "end": 1126
        }
      ],
      "declare": false,
      "start": 1110,
      "end": 1127
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
            "start": 1132,
            "end": 1134
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1139
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1140,
              "end": 1142
            },
            "optional": false,
            "computed": true,
            "start": 1137,
            "end": 1143
          },
          "definite": false,
          "start": 1132,
          "end": 1143
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1144
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
            "start": 1149,
            "end": 1151
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1156
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1157,
              "end": 1158
            },
            "optional": false,
            "computed": true,
            "start": 1154,
            "end": 1159
          },
          "definite": false,
          "start": 1149,
          "end": 1159
        }
      ],
      "declare": false,
      "start": 1145,
      "end": 1160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1161
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
    "type": "Identifier",
    "value": "a",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 101,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 154,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 189,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 203,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 239,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 257,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
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
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
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
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 290,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 306,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 331,
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
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 338,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 362,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 394,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 400,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 408,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 427,
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
    "value": "typeof",
    "start": 430,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 449,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 456,
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
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 477,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "set",
    "start": 493,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 502,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 527,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 534,
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
    "value": "=>",
    "start": 537,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 540,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 551,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 575,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 587,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 605,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 622,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 638,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 649,
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
    "value": "a",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 654,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 672,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 686,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 696,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 710,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 725,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 737,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "var",
    "start": 751,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 758,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 772,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 780,
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
    "type": "Keyword",
    "value": "var",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 798,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "r3",
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
    "type": "Identifier",
    "value": "d",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 826,
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
    "value": "var",
    "start": 829,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 853,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 857,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 862,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 873,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 877,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 882,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 896,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 900,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 905,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 916,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 926,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 937,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 953,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 984,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1022,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1028,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1037,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1045,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1114,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1118,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1132,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "String",
    "value": "''",
    "start": 1140,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1149,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  }
]
```

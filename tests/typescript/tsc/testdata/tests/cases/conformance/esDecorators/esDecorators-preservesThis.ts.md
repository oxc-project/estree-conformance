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
        "name": "DecoratorProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 88
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
              "name": "decorate",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 103
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 104,
                      "end": 105
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 104,
                    "end": 105
                  }
                ],
                "start": 103,
                "end": 106
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecoratorProvider",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 130
                    },
                    "start": 111,
                    "end": 130
                  },
                  "start": 107,
                  "end": 130
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 133,
                    "end": 136
                  },
                  "start": 132,
                  "end": 136
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecoratorContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 143,
                      "end": 159
                    },
                    "start": 141,
                    "end": 159
                  },
                  "start": 138,
                  "end": 159
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 163
                },
                "start": 160,
                "end": 163
              },
              "body": null,
              "expression": false,
              "start": 103,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 95,
            "end": 164
          }
        ],
        "start": 89,
        "end": 166
      },
      "abstract": false,
      "declare": true,
      "start": 57,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecoratorProvider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 209
                },
                "typeArguments": null,
                "start": 192,
                "end": 209
              },
              "start": 190,
              "end": 209
            },
            "start": 182,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 209
        }
      ],
      "declare": true,
      "start": 168,
      "end": 210
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 249
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 265
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 274
                  },
                  "optional": false,
                  "computed": false,
                  "start": 257,
                  "end": 274
                },
                "start": 256,
                "end": 274
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 286
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
                "body": [],
                "start": 289,
                "end": 292
              },
              "expression": false,
              "start": 286,
              "end": 292
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 292
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 308
                  },
                  "property": {
                    "type": "Literal",
                    "value": "decorate",
                    "raw": "\"decorate\"",
                    "start": 309,
                    "end": 319
                  },
                  "optional": false,
                  "computed": true,
                  "start": 300,
                  "end": 320
                },
                "start": 298,
                "end": 321
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 333
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
                "body": [],
                "start": 336,
                "end": 339
              },
              "expression": false,
              "start": 333,
              "end": 339
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 339
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 378
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 387
                  },
                  "optional": false,
                  "computed": false,
                  "start": 370,
                  "end": 387
                },
                "start": 367,
                "end": 389
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 401
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
                "body": [],
                "start": 404,
                "end": 407
              },
              "expression": false,
              "start": 401,
              "end": 407
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 367,
            "end": 407
          }
        ],
        "start": 250,
        "end": 409
      },
      "abstract": false,
      "declare": false,
      "start": 242,
      "end": 409
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 456
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "DecoratorProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 482
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 510
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
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 527,
                                  "end": 532
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 533,
                                  "end": 541
                                },
                                "optional": false,
                                "computed": false,
                                "start": 527,
                                "end": 541
                              },
                              "start": 525,
                              "end": 542
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 562
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
                              "body": [],
                              "start": 565,
                              "end": 568
                            },
                            "expression": false,
                            "start": 562,
                            "end": 568
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 525,
                          "end": 568
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 584,
                                  "end": 589
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "decorate",
                                  "raw": "\"decorate\"",
                                  "start": 590,
                                  "end": 600
                                },
                                "optional": false,
                                "computed": true,
                                "start": 584,
                                "end": 601
                              },
                              "start": 582,
                              "end": 602
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 615,
                            "end": 622
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
                              "body": [],
                              "start": 625,
                              "end": 628
                            },
                            "expression": false,
                            "start": 622,
                            "end": 628
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 582,
                          "end": 628
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 645,
                                  "end": 650
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 651,
                                  "end": 659
                                },
                                "optional": false,
                                "computed": false,
                                "start": 645,
                                "end": 659
                              },
                              "start": 642,
                              "end": 661
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 674,
                            "end": 681
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
                              "body": [],
                              "start": 684,
                              "end": 687
                            },
                            "expression": false,
                            "start": 681,
                            "end": 687
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 642,
                          "end": 687
                        }
                      ],
                      "start": 511,
                      "end": 697
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 503,
                    "end": 697
                  }
                ],
                "start": 493,
                "end": 703
              },
              "expression": false,
              "start": 490,
              "end": 703
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 489,
            "end": 703
          }
        ],
        "start": 483,
        "end": 705
      },
      "abstract": false,
      "declare": false,
      "start": 449,
      "end": 705
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 705
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "DecoratorProvider",
    "start": 71,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "DecoratorProvider",
    "start": 113,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "DecoratorContext",
    "start": 143,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 168,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 182,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "DecoratorProvider",
    "start": 192,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 257,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 279,
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
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 298,
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
    "value": "instance",
    "start": 300,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"decorate\"",
    "start": 309,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 326,
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
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 370,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 379,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 394,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 457,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "DecoratorProvider",
    "start": 465,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 503,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 533,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "@",
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
    "type": "Keyword",
    "value": "super",
    "start": 584,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "String",
    "value": "\"decorate\"",
    "start": 590,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 615,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 645,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "decorate",
    "start": 651,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 674,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  }
]
```

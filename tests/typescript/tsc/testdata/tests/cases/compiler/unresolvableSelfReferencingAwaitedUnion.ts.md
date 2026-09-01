__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnvFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 33
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 37,
                "end": 38
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 37,
              "end": 38
            }
          ],
          "start": 36,
          "end": 39
        },
        "params": [],
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
              "start": 45,
              "end": 46
            },
            "typeArguments": null,
            "start": 45,
            "end": 46
          },
          "start": 42,
          "end": 46
        },
        "start": 36,
        "end": 46
      },
      "declare": false,
      "start": 17,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SimpleType",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 64
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 83
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SimpleType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 84,
                  "end": 94
                }
              ],
              "start": 83,
              "end": 95
            },
            "start": 76,
            "end": 95
          }
        ],
        "start": 67,
        "end": 95
      },
      "declare": false,
      "start": 49,
      "end": 96
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
            "name": "simple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SimpleType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 130
                },
                "typeArguments": null,
                "start": 120,
                "end": 130
              },
              "start": 118,
              "end": 130
            },
            "start": 112,
            "end": 130
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 130
        }
      ],
      "declare": true,
      "start": 98,
      "end": 131
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
            "name": "env",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnvFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 155
                },
                "typeArguments": null,
                "start": 144,
                "end": 155
              },
              "start": 142,
              "end": 155
            },
            "start": 139,
            "end": 155
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "simple",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 170
            },
            "id": null,
            "generator": false,
            "start": 158,
            "end": 170
          },
          "definite": false,
          "start": 139,
          "end": 170
        }
      ],
      "declare": false,
      "start": 133,
      "end": 171
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 197
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 200,
              "end": 201
            },
            "start": 200,
            "end": 201
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 211
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 214
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 214
                }
              ],
              "start": 211,
              "end": 215
            },
            "start": 204,
            "end": 215
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 220
              },
              "typeArguments": null,
              "start": 218,
              "end": 220
            },
            "start": 218,
            "end": 222
          }
        ],
        "start": 200,
        "end": 222
      },
      "declare": false,
      "start": 190,
      "end": 223
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 257
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 267
                },
                "typeArguments": null,
                "start": 265,
                "end": 267
              },
              "start": 263,
              "end": 267
            },
            "start": 258,
            "end": 267
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "awaited",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 286
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 300
                    },
                    "start": 289,
                    "end": 300
                  },
                  "definite": false,
                  "start": 279,
                  "end": 300
                }
              ],
              "declare": false,
              "start": 273,
              "end": 300
            }
          ],
          "start": 269,
          "end": 302
        },
        "expression": false,
        "start": 232,
        "end": 302
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 225,
      "end": 302
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EffectResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 338
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 364
                },
                "typeArguments": null,
                "start": 352,
                "end": 364
              },
              "start": 349,
              "end": 364
            },
            "start": 346,
            "end": 364
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 377
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EffectResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 390
                  },
                  "typeArguments": null,
                  "start": 378,
                  "end": 390
                }
              ],
              "start": 377,
              "end": 391
            },
            "start": 370,
            "end": 391
          }
        ],
        "start": 343,
        "end": 391
      },
      "declare": false,
      "start": 321,
      "end": 392
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handleEffectResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 434
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 455
                },
                "typeArguments": null,
                "start": 443,
                "end": 455
              },
              "start": 441,
              "end": 455
            },
            "start": 435,
            "end": 455
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 471
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 491
                },
                "start": 465,
                "end": 491
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "handleEffectResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 505,
                          "end": 523
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 530
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 524,
                            "end": 532
                          }
                        ],
                        "optional": false,
                        "start": 505,
                        "end": 533
                      },
                      "start": 499,
                      "end": 533
                    },
                    "directive": null,
                    "start": 499,
                    "end": 534
                  }
                ],
                "start": 493,
                "end": 538
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 554
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 573
                  },
                  "start": 548,
                  "end": 573
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handleEffectResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 587,
                            "end": 605
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 612,
                                "end": 618
                              },
                              "start": 606,
                              "end": 618
                            }
                          ],
                          "optional": false,
                          "start": 587,
                          "end": 619
                        },
                        "start": 581,
                        "end": 619
                      },
                      "directive": null,
                      "start": 581,
                      "end": 620
                    }
                  ],
                  "start": 575,
                  "end": 624
                },
                "alternate": null,
                "start": 544,
                "end": 624
              },
              "start": 461,
              "end": 624
            }
          ],
          "start": 457,
          "end": 626
        },
        "expression": false,
        "start": 401,
        "end": 626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 394,
      "end": 626
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 17,
  "end": 626
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 17,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "EnvFunction",
    "start": 22,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 49,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "SimpleType",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "SimpleType",
    "start": 84,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 98,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "simple",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "SimpleType",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "env",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "EnvFunction",
    "start": 144,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
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
    "value": "=>",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "simple",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 190,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 204,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "export",
    "start": 225,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 232,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 238,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "myFunction",
    "start": 247,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 265,
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
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "awaited",
    "start": 279,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 289,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 321,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "EffectResult",
    "start": 326,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "EffectResult",
    "start": 352,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "EffectResult",
    "start": 378,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 394,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 401,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 407,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "handleEffectResult",
    "start": 416,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "EffectResult",
    "start": 443,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 465,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 472,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 483,
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
    "type": "Identifier",
    "value": "await",
    "start": 499,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "handleEffectResult",
    "start": 505,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 539,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 548,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 555,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 566,
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
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 581,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "handleEffectResult",
    "start": 587,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 606,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 612,
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
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  }
]
```

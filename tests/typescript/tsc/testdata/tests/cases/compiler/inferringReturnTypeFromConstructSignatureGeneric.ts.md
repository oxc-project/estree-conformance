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
        "name": "GenericObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 30,
              "end": 32
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 35,
              "end": 37
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 37
          }
        ],
        "start": 19,
        "end": 38
      },
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
              "name": "give",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 47
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
                  "name": "value",
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
                        "start": 55,
                        "end": 56
                      },
                      "typeArguments": null,
                      "start": 55,
                      "end": 56
                    },
                    "start": 53,
                    "end": 56
                  },
                  "start": 48,
                  "end": 56
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 76
                    },
                    "start": 64,
                    "end": 77
                  }
                ],
                "start": 58,
                "end": 81
              },
              "expression": false,
              "start": 47,
              "end": 81
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 81
          }
        ],
        "start": 39,
        "end": 83
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 103
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
              "start": 104,
              "end": 105
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 114,
              "end": 120
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 120
          }
        ],
        "start": 103,
        "end": 121
      },
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
              "name": "give",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
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
                  "name": "value",
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
                        "start": 138,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 138,
                      "end": 139
                    },
                    "start": 136,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 159
                    },
                    "start": 147,
                    "end": 160
                  }
                ],
                "start": 141,
                "end": 164
              },
              "expression": false,
              "start": 130,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 126,
            "end": 164
          }
        ],
        "start": 122,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 84,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericNumberOrString",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 194
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
              "start": 195,
              "end": 196
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 205,
                  "end": 211
                },
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              ],
              "start": 205,
              "end": 220
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 195,
            "end": 220
          }
        ],
        "start": 194,
        "end": 221
      },
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
              "name": "give",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 230
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
                  "name": "value",
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
                        "start": 238,
                        "end": 239
                      },
                      "typeArguments": null,
                      "start": 238,
                      "end": 239
                    },
                    "start": 236,
                    "end": 239
                  },
                  "start": 231,
                  "end": 239
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 259
                    },
                    "start": 247,
                    "end": 260
                  }
                ],
                "start": 241,
                "end": 264
              },
              "expression": false,
              "start": 230,
              "end": 264
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 226,
            "end": 264
          }
        ],
        "start": 222,
        "end": 266
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
      },
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
              "start": 279,
              "end": 280
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 279,
            "end": 280
          }
        ],
        "start": 278,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
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
                    "start": 298,
                    "end": 299
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 299
                },
                "start": 295,
                "end": 299
              },
              "start": 288,
              "end": 299
            },
            "start": 286,
            "end": 299
          },
          "start": 282,
          "end": 299
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
            "start": 302,
            "end": 303
          },
          "typeArguments": null,
          "start": 302,
          "end": 303
        },
        "start": 300,
        "end": 303
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 325
              },
              "typeArguments": null,
              "arguments": [],
              "start": 317,
              "end": 327
            },
            "start": 310,
            "end": 328
          }
        ],
        "start": 304,
        "end": 330
      },
      "expression": false,
      "start": 268,
      "end": 330
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 358
              }
            ],
            "optional": false,
            "start": 343,
            "end": 359
          },
          "definite": false,
          "start": 338,
          "end": 359
        }
      ],
      "declare": false,
      "start": 332,
      "end": 360
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 368
          },
          "optional": false,
          "computed": false,
          "start": 361,
          "end": 368
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 369,
            "end": 371
          }
        ],
        "optional": false,
        "start": 361,
        "end": 372
      },
      "directive": null,
      "start": 361,
      "end": 373
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 383
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 401
              }
            ],
            "optional": false,
            "start": 386,
            "end": 402
          },
          "definite": false,
          "start": 381,
          "end": 402
        }
      ],
      "declare": false,
      "start": 375,
      "end": 403
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
            "name": "g2",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 406
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 411
          },
          "optional": false,
          "computed": false,
          "start": 404,
          "end": 411
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 412,
            "end": 413
          }
        ],
        "optional": false,
        "start": 404,
        "end": 414
      },
      "directive": null,
      "start": 404,
      "end": 415
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 425
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericNumberOrString",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 451
              }
            ],
            "optional": false,
            "start": 428,
            "end": 452
          },
          "definite": false,
          "start": 423,
          "end": 452
        }
      ],
      "declare": false,
      "start": 417,
      "end": 453
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 456
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 461
          },
          "optional": false,
          "computed": false,
          "start": 454,
          "end": 461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 462,
            "end": 463
          }
        ],
        "optional": false,
        "start": 454,
        "end": 464
      },
      "directive": null,
      "start": 454,
      "end": 465
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
            "name": "g3",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 468
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 473
          },
          "optional": false,
          "computed": false,
          "start": 466,
          "end": 473
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 474,
            "end": 477
          }
        ],
        "optional": false,
        "start": 466,
        "end": 478
      },
      "directive": null,
      "start": 466,
      "end": 479
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
        "start": 508,
        "end": 509
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
              "start": 510,
              "end": 511
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 510,
            "end": 511
          }
        ],
        "start": 509,
        "end": 512
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 513,
        "end": 515
      },
      "abstract": false,
      "declare": false,
      "start": 502,
      "end": 515
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
            "name": "g4",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 524
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              }
            ],
            "optional": false,
            "start": 527,
            "end": 531
          },
          "definite": false,
          "start": 522,
          "end": 531
        }
      ],
      "declare": false,
      "start": 516,
      "end": 532
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 532
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
    "value": "GenericObject",
    "start": 6,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 64,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "GenericNumber",
    "start": 90,
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
    "type": "Keyword",
    "value": "extends",
    "start": 106,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "GenericNumberOrString",
    "start": 173,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 197,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "value": "T",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 310,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "GenericObject",
    "start": 345,
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
    "value": "g1",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 364,
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
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "GenericNumber",
    "start": 388,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 417,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "GenericNumberOrString",
    "start": 430,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 457,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "give",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 502,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 516,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  }
]
```

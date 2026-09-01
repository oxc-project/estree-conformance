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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
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
            "start": 74,
            "end": 84
          }
        ],
        "start": 68,
        "end": 86
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 86
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
        "start": 94,
        "end": 101
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 132
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
                "start": 135,
                "end": 151
              },
              "expression": false,
              "start": 132,
              "end": 151
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 121,
            "end": 151
          }
        ],
        "start": 115,
        "end": 153
      },
      "abstract": false,
      "declare": false,
      "start": 88,
      "end": 153
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
        "start": 161,
        "end": 166
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
              "start": 167,
              "end": 168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 167,
            "end": 168
          }
        ],
        "start": 166,
        "end": 169
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
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
                  "start": 179,
                  "end": 180
                },
                "typeArguments": null,
                "start": 179,
                "end": 180
              },
              "start": 177,
              "end": 180
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
            "start": 176,
            "end": 181
          }
        ],
        "start": 170,
        "end": 183
      },
      "abstract": false,
      "declare": false,
      "start": 155,
      "end": 183
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
        "start": 191,
        "end": 199
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
              "start": 200,
              "end": 201
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 201
          }
        ],
        "start": 199,
        "end": 202
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 216
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "typeArguments": null,
            "start": 217,
            "end": 218
          }
        ],
        "start": 216,
        "end": 219
      },
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
              "start": 226,
              "end": 237
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
                          "start": 309,
                          "end": 311
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 320,
                              "end": 325
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 320,
                            "end": 327
                          },
                          "id": null,
                          "generator": false,
                          "start": 314,
                          "end": 327
                        },
                        "definite": false,
                        "start": 309,
                        "end": 327
                      }
                    ],
                    "declare": false,
                    "start": 305,
                    "end": 328
                  }
                ],
                "start": 240,
                "end": 386
              },
              "expression": false,
              "start": 237,
              "end": 386
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 226,
            "end": 386
          }
        ],
        "start": 220,
        "end": 388
      },
      "abstract": false,
      "declare": false,
      "start": 185,
      "end": 388
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 404
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
              "start": 405,
              "end": 406
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 405,
            "end": 406
          }
        ],
        "start": 404,
        "end": 407
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 421
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
            },
            "typeArguments": null,
            "start": 422,
            "end": 423
          }
        ],
        "start": 421,
        "end": 424
      },
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
              "start": 431,
              "end": 442
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 468,
                          "end": 469
                        },
                        "init": {
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Super",
                                    "start": 486,
                                    "end": 491
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 486,
                                  "end": 493
                                },
                                "directive": null,
                                "start": 486,
                                "end": 493
                              }
                            ],
                            "start": 484,
                            "end": 495
                          },
                          "expression": false,
                          "start": 472,
                          "end": 495
                        },
                        "definite": false,
                        "start": 468,
                        "end": 495
                      }
                    ],
                    "declare": false,
                    "start": 464,
                    "end": 495
                  }
                ],
                "start": 445,
                "end": 510
              },
              "expression": false,
              "start": 442,
              "end": 510
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 510
          }
        ],
        "start": 425,
        "end": 512
      },
      "abstract": false,
      "declare": false,
      "start": 390,
      "end": 512
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 528
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
              "start": 529,
              "end": 530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 529,
            "end": 530
          }
        ],
        "start": 528,
        "end": 531
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 545
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
            },
            "typeArguments": null,
            "start": 546,
            "end": 547
          }
        ],
        "start": 545,
        "end": 548
      },
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
              "start": 555,
              "end": 566
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 583,
                          "end": 584
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Super",
                            "start": 587,
                            "end": 592
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 587,
                          "end": 594
                        },
                        "definite": false,
                        "start": 583,
                        "end": 594
                      }
                    ],
                    "declare": false,
                    "start": 579,
                    "end": 595
                  }
                ],
                "start": 569,
                "end": 607
              },
              "expression": false,
              "start": 566,
              "end": 607
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 555,
            "end": 607
          }
        ],
        "start": 549,
        "end": 609
      },
      "abstract": false,
      "declare": false,
      "start": 514,
      "end": 609
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 609
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 94,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 155,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 185,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 203,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 226,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 317,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 320,
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
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 396,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
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
    "value": "Base2",
    "start": 416,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 431,
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
    "value": "var",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 472,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 514,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 520,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 532,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 540,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 555,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 587,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  }
]
```

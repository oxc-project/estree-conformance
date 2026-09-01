__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
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
              "start": 33,
              "end": 34
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
                    "start": 45,
                    "end": 46
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 48,
                      "end": 54
                    },
                    "start": 46,
                    "end": 54
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
                  "start": 45,
                  "end": 55
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 69
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
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 93,
                            "end": 94
                          },
                          "start": 86,
                          "end": 95
                        }
                      ],
                      "start": 72,
                      "end": 105
                    },
                    "expression": false,
                    "start": 69,
                    "end": 105
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 64,
                  "end": 105
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
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
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 121
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 123,
                      "end": 126
                    },
                    "expression": false,
                    "start": 119,
                    "end": 126
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 114,
                  "end": 126
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 137
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
                            "type": "ThisExpression",
                            "start": 149,
                            "end": 153
                          },
                          "start": 142,
                          "end": 154
                        }
                      ],
                      "start": 140,
                      "end": 156
                    },
                    "expression": false,
                    "start": 137,
                    "end": 156
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 135,
                  "end": 156
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
                    "start": 165,
                    "end": 176
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            },
                            "start": 185,
                            "end": 193
                          },
                          "start": 184,
                          "end": 193
                        },
                        "readonly": false,
                        "static": false,
                        "start": 177,
                        "end": 193
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 206,
                              "end": 212
                            },
                            "start": 204,
                            "end": 212
                          },
                          "start": 203,
                          "end": 212
                        },
                        "readonly": false,
                        "static": false,
                        "start": 195,
                        "end": 212
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 214,
                      "end": 217
                    },
                    "expression": false,
                    "start": 176,
                    "end": 217
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 165,
                  "end": 217
                }
              ],
              "start": 35,
              "end": 223
            },
            "abstract": false,
            "declare": false,
            "start": 27,
            "end": 223
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 243,
                      "end": 244
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 246,
                      "end": 247
                    }
                  ],
                  "start": 237,
                  "end": 248
                },
                "definite": false,
                "start": 233,
                "end": 248
              }
            ],
            "declare": false,
            "start": 229,
            "end": 249
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 259
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 266
                    },
                    "optional": false,
                    "computed": false,
                    "start": 262,
                    "end": 266
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 262,
                  "end": 268
                },
                "definite": false,
                "start": 258,
                "end": 268
              }
            ],
            "declare": false,
            "start": 254,
            "end": 269
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
                  "start": 278,
                  "end": 280
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 286
                  },
                  "optional": false,
                  "computed": false,
                  "start": 283,
                  "end": 286
                },
                "definite": false,
                "start": 278,
                "end": 286
              }
            ],
            "declare": false,
            "start": 274,
            "end": 287
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
                  "start": 296,
                  "end": 298
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 304
                  },
                  "optional": false,
                  "computed": false,
                  "start": 301,
                  "end": 304
                },
                "definite": false,
                "start": 296,
                "end": 304
              }
            ],
            "declare": false,
            "start": 292,
            "end": 305
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "optional": false,
                "computed": false,
                "start": 310,
                "end": 313
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 316,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "directive": null,
            "start": 310,
            "end": 318
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
                  "start": 327,
                  "end": 329
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 333
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 335
                    },
                    "optional": false,
                    "computed": false,
                    "start": 332,
                    "end": 335
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 332,
                  "end": 337
                },
                "definite": false,
                "start": 327,
                "end": 337
              }
            ],
            "declare": false,
            "start": 323,
            "end": 338
          }
        ],
        "start": 21,
        "end": 350
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 350
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 369
      },
      "body": {
        "type": "TSModuleBlock",
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
              "start": 382,
              "end": 383
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
                    "start": 384,
                    "end": 385
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 384,
                  "end": 385
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 386,
                  "end": 387
                }
              ],
              "start": 383,
              "end": 388
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
                    "start": 399,
                    "end": 400
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
                        "start": 402,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 402,
                      "end": 403
                    },
                    "start": 400,
                    "end": 403
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
                  "start": 399,
                  "end": 404
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
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
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 442,
                            "end": 446
                          },
                          "start": 435,
                          "end": 447
                        }
                      ],
                      "start": 421,
                      "end": 457
                    },
                    "expression": false,
                    "start": 418,
                    "end": 457
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 413,
                  "end": 457
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 476
                            },
                            "typeArguments": null,
                            "start": 475,
                            "end": 476
                          },
                          "start": 473,
                          "end": 476
                        },
                        "start": 472,
                        "end": 476
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 478,
                      "end": 481
                    },
                    "expression": false,
                    "start": 471,
                    "end": 481
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 466,
                  "end": 481
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 492
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
                            "type": "ThisExpression",
                            "start": 504,
                            "end": 508
                          },
                          "start": 497,
                          "end": 509
                        }
                      ],
                      "start": 495,
                      "end": 511
                    },
                    "expression": false,
                    "start": 492,
                    "end": 511
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 490,
                  "end": 511
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
                    "start": 520,
                    "end": 531
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 542,
                                "end": 543
                              },
                              "typeArguments": null,
                              "start": 542,
                              "end": 543
                            },
                            "start": 540,
                            "end": 543
                          },
                          "start": 539,
                          "end": 543
                        },
                        "readonly": false,
                        "static": false,
                        "start": 532,
                        "end": 543
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 556,
                                "end": 557
                              },
                              "typeArguments": null,
                              "start": 556,
                              "end": 557
                            },
                            "start": 554,
                            "end": 557
                          },
                          "start": 553,
                          "end": 557
                        },
                        "readonly": false,
                        "static": false,
                        "start": 545,
                        "end": 557
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 559,
                      "end": 562
                    },
                    "expression": false,
                    "start": 531,
                    "end": 562
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 520,
                  "end": 562
                }
              ],
              "start": 389,
              "end": 568
            },
            "abstract": false,
            "declare": false,
            "start": 376,
            "end": 568
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 586,
                    "end": 587
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 588,
                      "end": 589
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 591,
                      "end": 593
                    }
                  ],
                  "start": 582,
                  "end": 594
                },
                "definite": false,
                "start": 578,
                "end": 594
              }
            ],
            "declare": false,
            "start": 574,
            "end": 595
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 608,
                      "end": 609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 612
                    },
                    "optional": false,
                    "computed": false,
                    "start": 608,
                    "end": 612
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 608,
                  "end": 614
                },
                "definite": false,
                "start": 604,
                "end": 614
              }
            ],
            "declare": false,
            "start": 600,
            "end": 615
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
                  "start": 624,
                  "end": 626
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 630
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 631,
                    "end": 632
                  },
                  "optional": false,
                  "computed": false,
                  "start": 629,
                  "end": 632
                },
                "definite": false,
                "start": 624,
                "end": 632
              }
            ],
            "declare": false,
            "start": 620,
            "end": 633
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
                  "start": 642,
                  "end": 644
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "optional": false,
                  "computed": false,
                  "start": 647,
                  "end": 650
                },
                "definite": false,
                "start": 642,
                "end": 650
              }
            ],
            "declare": false,
            "start": 638,
            "end": 651
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 657
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 659
                },
                "optional": false,
                "computed": false,
                "start": 656,
                "end": 659
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 662,
                "end": 664
              },
              "start": 656,
              "end": 664
            },
            "directive": null,
            "start": 656,
            "end": 665
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
                  "start": 674,
                  "end": 676
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 680
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 682
                    },
                    "optional": false,
                    "computed": false,
                    "start": 679,
                    "end": 682
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 679,
                  "end": 684
                },
                "definite": false,
                "start": 674,
                "end": 684
              }
            ],
            "declare": false,
            "start": 670,
            "end": 685
          }
        ],
        "start": 370,
        "end": 696
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 352,
      "end": 696
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 696
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "NonGeneric",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 86,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 142,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 165,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 177,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 195,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
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
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 352,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Generic",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 435,
    "end": 441
  },
  {
    "type": "Null",
    "value": "null",
    "start": 442,
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
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 470,
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
    "value": "v",
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
    "type": "Identifier",
    "value": "U",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 497,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 520,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 532,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 545,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 582,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "String",
    "value": "''",
    "start": 591,
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
    "type": "Keyword",
    "value": "var",
    "start": 600,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 638,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "String",
    "value": "''",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  }
]
```

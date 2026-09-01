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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
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
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 63
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 75,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 72,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 98
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 98
                        },
                        "start": 93,
                        "end": 98
                      },
                      "start": 89,
                      "end": 98
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 117,
                            "end": 121
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 122,
                            "end": 123
                          },
                          "optional": false,
                          "computed": false,
                          "start": 117,
                          "end": 123
                        },
                        "start": 110,
                        "end": 124
                      }
                    ],
                    "start": 108,
                    "end": 126
                  },
                  "expression": false,
                  "start": 88,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 83,
                "end": 126
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 147
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 147
                        },
                        "start": 142,
                        "end": 147
                      },
                      "start": 138,
                      "end": 147
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 152,
                          "end": 158
                        },
                        "start": 150,
                        "end": 158
                      },
                      "start": 149,
                      "end": 158
                    }
                  ],
                  "returnType": null,
                  "body": {
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
                              "type": "ThisExpression",
                              "start": 162,
                              "end": 166
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 168
                            },
                            "optional": false,
                            "computed": false,
                            "start": 162,
                            "end": 168
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 172
                          },
                          "start": 162,
                          "end": 172
                        },
                        "directive": null,
                        "start": 162,
                        "end": 173
                      }
                    ],
                    "start": 160,
                    "end": 175
                  },
                  "expression": false,
                  "start": 137,
                  "end": 175
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 132,
                "end": 175
              }
            ],
            "start": 66,
            "end": 177
          },
          "definite": false,
          "start": 55,
          "end": 177
        }
      ],
      "declare": false,
      "start": 49,
      "end": 177
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
            "name": "copiedFromGetter",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 200
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "value": {
                  "type": "Literal",
                  "value": 14,
                  "raw": "14",
                  "start": 212,
                  "end": 214
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 214
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 232,
                            "end": 235
                          },
                          "typeArguments": null,
                          "start": 232,
                          "end": 235
                        },
                        "start": 230,
                        "end": 235
                      },
                      "start": 226,
                      "end": 235
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 238,
                      "end": 244
                    },
                    "start": 236,
                    "end": 244
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 254,
                            "end": 258
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 260
                          },
                          "optional": false,
                          "computed": false,
                          "start": 254,
                          "end": 260
                        },
                        "start": 247,
                        "end": 261
                      }
                    ],
                    "start": 245,
                    "end": 263
                  },
                  "expression": false,
                  "start": 225,
                  "end": 263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 220,
                "end": 263
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 276
                    }
                  ],
                  "returnType": null,
                  "body": {
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
                              "type": "ThisExpression",
                              "start": 280,
                              "end": 284
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 286
                            },
                            "optional": false,
                            "computed": false,
                            "start": 280,
                            "end": 286
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 289,
                            "end": 290
                          },
                          "start": 280,
                          "end": 290
                        },
                        "directive": null,
                        "start": 280,
                        "end": 291
                      }
                    ],
                    "start": 278,
                    "end": 293
                  },
                  "expression": false,
                  "start": 274,
                  "end": 293
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 269,
                "end": 293
              }
            ],
            "start": 203,
            "end": 295
          },
          "definite": false,
          "start": 184,
          "end": 295
        }
      ],
      "declare": false,
      "start": 178,
      "end": 295
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
            "name": "copiedFromSetter",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 318
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 328
                },
                "value": {
                  "type": "Literal",
                  "value": 15,
                  "raw": "15",
                  "start": 330,
                  "end": 332
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 327,
                "end": 332
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 355,
                            "end": 359
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 360,
                            "end": 361
                          },
                          "optional": false,
                          "computed": false,
                          "start": 355,
                          "end": 361
                        },
                        "start": 348,
                        "end": 361
                      }
                    ],
                    "start": 346,
                    "end": 363
                  },
                  "expression": false,
                  "start": 343,
                  "end": 363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 338,
                "end": 363
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 374
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 384
                          },
                          "typeArguments": null,
                          "start": 381,
                          "end": 384
                        },
                        "start": 379,
                        "end": 384
                      },
                      "start": 375,
                      "end": 384
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 389,
                          "end": 395
                        },
                        "start": 387,
                        "end": 395
                      },
                      "start": 386,
                      "end": 395
                    }
                  ],
                  "returnType": null,
                  "body": {
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
                              "type": "ThisExpression",
                              "start": 399,
                              "end": 403
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 405
                            },
                            "optional": false,
                            "computed": false,
                            "start": 399,
                            "end": 405
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 409
                          },
                          "start": 399,
                          "end": 409
                        },
                        "directive": null,
                        "start": 399,
                        "end": 410
                      }
                    ],
                    "start": 397,
                    "end": 412
                  },
                  "expression": false,
                  "start": 374,
                  "end": 412
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 369,
                "end": 412
              }
            ],
            "start": 321,
            "end": 414
          },
          "definite": false,
          "start": 302,
          "end": 414
        }
      ],
      "declare": false,
      "start": 296,
      "end": 414
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
            "name": "copiedFromGetterUnannotated",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 448
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 458
                },
                "value": {
                  "type": "Literal",
                  "value": 16,
                  "raw": "16",
                  "start": 460,
                  "end": 462
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 457,
                "end": 462
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 480,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 480,
                          "end": 483
                        },
                        "start": 478,
                        "end": 483
                      },
                      "start": 474,
                      "end": 483
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 494,
                            "end": 498
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 499,
                            "end": 500
                          },
                          "optional": false,
                          "computed": false,
                          "start": 494,
                          "end": 500
                        },
                        "start": 487,
                        "end": 500
                      }
                    ],
                    "start": 485,
                    "end": 502
                  },
                  "expression": false,
                  "start": 473,
                  "end": 502
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 468,
                "end": 502
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 518
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 521
                    }
                  ],
                  "returnType": null,
                  "body": {
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
                              "type": "ThisExpression",
                              "start": 525,
                              "end": 529
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 530,
                              "end": 531
                            },
                            "optional": false,
                            "computed": false,
                            "start": 525,
                            "end": 531
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 534,
                            "end": 535
                          },
                          "start": 525,
                          "end": 535
                        },
                        "directive": null,
                        "start": 525,
                        "end": 536
                      }
                    ],
                    "start": 523,
                    "end": 538
                  },
                  "expression": false,
                  "start": 513,
                  "end": 538
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 508,
                "end": 538
              }
            ],
            "start": 451,
            "end": 540
          },
          "definite": false,
          "start": 421,
          "end": 540
        }
      ],
      "declare": false,
      "start": 415,
      "end": 540
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 556
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 564
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 17,
              "raw": "17",
              "start": 567,
              "end": 569
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 563,
            "end": 570
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 580
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 587,
                      "end": 590
                    },
                    "start": 585,
                    "end": 590
                  },
                  "start": 581,
                  "end": 590
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 593,
                  "end": 599
                },
                "start": 591,
                "end": 599
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 609,
                        "end": 613
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 615
                      },
                      "optional": false,
                      "computed": false,
                      "start": 609,
                      "end": 615
                    },
                    "start": 602,
                    "end": 616
                  }
                ],
                "start": 600,
                "end": 618
              },
              "expression": false,
              "start": 580,
              "end": 618
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 575,
            "end": 618
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
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
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 635,
                        "end": 638
                      },
                      "typeArguments": null,
                      "start": 635,
                      "end": 638
                    },
                    "start": 633,
                    "end": 638
                  },
                  "start": 629,
                  "end": 638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 643,
                      "end": 649
                    },
                    "start": 641,
                    "end": 649
                  },
                  "start": 640,
                  "end": 649
                }
              ],
              "returnType": null,
              "body": {
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
                          "type": "ThisExpression",
                          "start": 653,
                          "end": 657
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 658,
                          "end": 659
                        },
                        "optional": false,
                        "computed": false,
                        "start": 653,
                        "end": 659
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 663
                      },
                      "start": 653,
                      "end": 663
                    },
                    "directive": null,
                    "start": 653,
                    "end": 664
                  }
                ],
                "start": 651,
                "end": 666
              },
              "expression": false,
              "start": 628,
              "end": 666
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 623,
            "end": 666
          }
        ],
        "start": 557,
        "end": 668
      },
      "abstract": false,
      "declare": false,
      "start": 542,
      "end": 668
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contextual",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 685
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 693
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 21,
              "raw": "21",
              "start": 696,
              "end": 698
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 692,
            "end": 699
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 709
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 721,
                        "end": 725
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 726,
                        "end": 727
                      },
                      "optional": false,
                      "computed": false,
                      "start": 721,
                      "end": 727
                    },
                    "start": 714,
                    "end": 727
                  }
                ],
                "start": 712,
                "end": 729
              },
              "expression": false,
              "start": 709,
              "end": 729
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 704,
            "end": 729
          }
        ],
        "start": 686,
        "end": 769
      },
      "abstract": false,
      "declare": false,
      "start": 669,
      "end": 769
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 769
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
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
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
    "value": "number",
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
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 55,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 110,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 132,
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
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 138,
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
    "value": "Foo",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "copiedFromGetter",
    "start": 184,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
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
    "value": "number",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 280,
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
    "value": "n",
    "start": 285,
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
    "value": "n",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "copiedFromSetter",
    "start": 302,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 348,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 415,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "copiedFromGetterUnannotated",
    "start": 421,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
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
    "value": "this",
    "start": 474,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 480,
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
    "type": "Keyword",
    "value": "return",
    "start": 487,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 542,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Explicit",
    "start": 548,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 575,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 602,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "set",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "this",
    "start": 629,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 653,
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
    "value": "n",
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
    "type": "Identifier",
    "value": "n",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 669,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Contextual",
    "start": 675,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 704,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 714,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  }
]
```

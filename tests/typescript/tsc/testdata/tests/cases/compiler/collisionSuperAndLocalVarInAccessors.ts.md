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
            "name": "_super",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 54
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                },
                "start": 56,
                "end": 64
              },
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
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 85
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 88,
                          "end": 90
                        },
                        "definite": false,
                        "start": 79,
                        "end": 90
                      }
                    ],
                    "declare": false,
                    "start": 75,
                    "end": 91
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 119,
                      "end": 121
                    },
                    "start": 112,
                    "end": 122
                  }
                ],
                "start": 65,
                "end": 128
              },
              "expression": false,
              "start": 54,
              "end": 128
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 128
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 142
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    },
                    "start": 146,
                    "end": 154
                  },
                  "start": 143,
                  "end": 154
                }
              ],
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
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 176
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 179,
                          "end": 181
                        },
                        "definite": false,
                        "start": 170,
                        "end": 181
                      }
                    ],
                    "declare": false,
                    "start": 166,
                    "end": 182
                  }
                ],
                "start": 156,
                "end": 200
              },
              "expression": false,
              "start": 142,
              "end": 200
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 133,
            "end": 200
          }
        ],
        "start": 39,
        "end": 202
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 202
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 210
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 222
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
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 238
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 242,
                  "end": 248
                },
                "start": 240,
                "end": 248
              },
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
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 269
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 272,
                          "end": 274
                        },
                        "definite": false,
                        "start": 263,
                        "end": 274
                      }
                    ],
                    "declare": false,
                    "start": 259,
                    "end": 275
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 310,
                      "end": 312
                    },
                    "start": 303,
                    "end": 313
                  }
                ],
                "start": 249,
                "end": 319
              },
              "expression": false,
              "start": 238,
              "end": 319
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 229,
            "end": 319
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 333
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    },
                    "start": 337,
                    "end": 345
                  },
                  "start": 334,
                  "end": 345
                }
              ],
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
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 367
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 370,
                          "end": 372
                        },
                        "definite": false,
                        "start": 361,
                        "end": 372
                      }
                    ],
                    "declare": false,
                    "start": 357,
                    "end": 373
                  }
                ],
                "start": 347,
                "end": 398
              },
              "expression": false,
              "start": 333,
              "end": 398
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 324,
            "end": 398
          }
        ],
        "start": 223,
        "end": 400
      },
      "abstract": false,
      "declare": false,
      "start": 203,
      "end": 400
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 408
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 420
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
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 436
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 440,
                  "end": 446
                },
                "start": 438,
                "end": 446
              },
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 461,
                          "end": 462
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                      "name": "_super",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 489,
                                      "end": 495
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 498,
                                      "end": 500
                                    },
                                    "definite": false,
                                    "start": 489,
                                    "end": 500
                                  }
                                ],
                                "declare": false,
                                "start": 485,
                                "end": 501
                              }
                            ],
                            "start": 471,
                            "end": 530
                          },
                          "id": null,
                          "generator": false,
                          "start": 465,
                          "end": 530
                        },
                        "definite": false,
                        "start": 461,
                        "end": 530
                      }
                    ],
                    "declare": false,
                    "start": 457,
                    "end": 530
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 546,
                      "end": 548
                    },
                    "start": 539,
                    "end": 549
                  }
                ],
                "start": 447,
                "end": 555
              },
              "expression": false,
              "start": 436,
              "end": 555
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 427,
            "end": 555
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 569
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    },
                    "start": 573,
                    "end": 581
                  },
                  "start": 570,
                  "end": 581
                }
              ],
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 598
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                      "name": "_super",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 625,
                                      "end": 631
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 634,
                                      "end": 636
                                    },
                                    "definite": false,
                                    "start": 625,
                                    "end": 636
                                  }
                                ],
                                "declare": false,
                                "start": 621,
                                "end": 637
                              }
                            ],
                            "start": 607,
                            "end": 666
                          },
                          "id": null,
                          "generator": false,
                          "start": 601,
                          "end": 666
                        },
                        "definite": false,
                        "start": 597,
                        "end": 666
                      }
                    ],
                    "declare": false,
                    "start": 593,
                    "end": 666
                  }
                ],
                "start": 583,
                "end": 672
              },
              "expression": false,
              "start": 569,
              "end": 672
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 560,
            "end": 672
          }
        ],
        "start": 421,
        "end": 674
      },
      "abstract": false,
      "declare": false,
      "start": 401,
      "end": 674
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 674
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
    "value": "_super",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 35,
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
    "value": "get",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 112,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 211,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 401,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 409,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 417,
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
    "value": "get",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 539,
    "end": 545
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
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
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  }
]
```

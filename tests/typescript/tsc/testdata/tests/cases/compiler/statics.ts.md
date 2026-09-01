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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "start": 43,
                      "end": 44
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 46,
                        "end": 52
                      },
                      "start": 44,
                      "end": 52
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
                    "start": 43,
                    "end": 53
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
                      "start": 62,
                      "end": 73
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
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 85,
                                "end": 91
                              },
                              "start": 83,
                              "end": 91
                            },
                            "start": 81,
                            "end": 91
                          },
                          "readonly": false,
                          "static": false,
                          "start": 74,
                          "end": 91
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              },
                              "start": 102,
                              "end": 110
                            },
                            "start": 100,
                            "end": 110
                          },
                          "readonly": false,
                          "static": false,
                          "start": 93,
                          "end": 110
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 116,
                              "end": 122
                            },
                            "start": 114,
                            "end": 122
                          },
                          "start": 112,
                          "end": 122
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
                                  "start": 138,
                                  "end": 142
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 143,
                                  "end": 144
                                },
                                "optional": false,
                                "computed": false,
                                "start": 138,
                                "end": 144
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 147,
                                        "end": 148
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 149,
                                        "end": 150
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 147,
                                      "end": 150
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 151,
                                        "end": 155
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 156,
                                        "end": 158
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 151,
                                      "end": 158
                                    },
                                    "start": 147,
                                    "end": 158
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 159,
                                      "end": 163
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 164,
                                      "end": 166
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 159,
                                    "end": 166
                                  },
                                  "start": 147,
                                  "end": 166
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 167,
                                  "end": 169
                                },
                                "start": 147,
                                "end": 169
                              },
                              "start": 138,
                              "end": 169
                            },
                            "directive": null,
                            "start": 138,
                            "end": 170
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 183,
                                  "end": 187
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "g",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 189
                                },
                                "optional": false,
                                "computed": false,
                                "start": 183,
                                "end": 189
                              },
                              "right": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
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
                                        "type": "TSNumberKeyword",
                                        "start": 195,
                                        "end": 201
                                      },
                                      "start": 194,
                                      "end": 201
                                    },
                                    "start": 193,
                                    "end": 201
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 206,
                                      "end": 207
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "f",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 208,
                                      "end": 209
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 206,
                                    "end": 209
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 210,
                                                  "end": 214
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "x",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 215,
                                                  "end": 216
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 210,
                                                "end": 216
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "C",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 217,
                                                  "end": 218
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 219,
                                                  "end": 220
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 217,
                                                "end": 220
                                              },
                                              "start": 210,
                                              "end": 220
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "v",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 221,
                                              "end": 222
                                            },
                                            "start": 210,
                                            "end": 222
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 223,
                                              "end": 227
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "c1",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 228,
                                              "end": 230
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 223,
                                            "end": 230
                                          },
                                          "start": 210,
                                          "end": 230
                                        },
                                        "operator": "+",
                                        "right": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 231,
                                            "end": 235
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "c2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 236,
                                            "end": 238
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 231,
                                          "end": 238
                                        },
                                        "start": 210,
                                        "end": 238
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 239,
                                          "end": 240
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "pub",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 241,
                                          "end": 244
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 239,
                                        "end": 244
                                      },
                                      "start": 210,
                                      "end": 244
                                    }
                                  ],
                                  "optional": false,
                                  "start": 206,
                                  "end": 245
                                },
                                "id": null,
                                "generator": false,
                                "start": 192,
                                "end": 245
                              },
                              "start": 183,
                              "end": 245
                            },
                            "directive": null,
                            "start": 183,
                            "end": 246
                          }
                        ],
                        "start": 124,
                        "end": 256
                      },
                      "expression": false,
                      "start": 73,
                      "end": 256
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 62,
                    "end": 256
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "priv",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 277
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 278,
                      "end": 279
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 266,
                    "end": 280
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pub",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 299
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 300,
                      "end": 301
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 289,
                    "end": 302
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 320,
                        "end": 321
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 326
                      },
                      "optional": false,
                      "computed": false,
                      "start": 320,
                      "end": 326
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 311,
                    "end": 327
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 347,
                              "end": 353
                            },
                            "start": 346,
                            "end": 353
                          },
                          "start": 345,
                          "end": 353
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Literal",
                                "value": "wow: ",
                                "raw": "\"wow: \"",
                                "start": 376,
                                "end": 383
                              },
                              "operator": "+",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 385,
                                      "end": 386
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 387,
                                        "end": 388
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 389,
                                        "end": 390
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 387,
                                      "end": 390
                                    },
                                    "start": 385,
                                    "end": 390
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 391,
                                      "end": 392
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "pub",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 393,
                                      "end": 396
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 391,
                                    "end": 396
                                  },
                                  "start": 385,
                                  "end": 396
                                },
                                "operator": "+",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 397,
                                    "end": 398
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "priv",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 399,
                                    "end": 403
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 397,
                                  "end": 403
                                },
                                "start": 385,
                                "end": 403
                              },
                              "start": 376,
                              "end": 404
                            },
                            "start": 369,
                            "end": 405
                          }
                        ],
                        "start": 355,
                        "end": 416
                      },
                      "expression": false,
                      "start": 344,
                      "end": 416
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 336,
                    "end": 416
                  }
                ],
                "start": 33,
                "end": 430
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 430
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 430
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
                  "start": 439,
                  "end": 440
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 441,
                  "end": 444
                },
                "definite": false,
                "start": 439,
                "end": 444
              }
            ],
            "declare": false,
            "start": 435,
            "end": 445
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 467
              },
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 490
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 491,
                          "end": 493
                        },
                        "definite": false,
                        "start": 484,
                        "end": 493
                      }
                    ],
                    "declare": false,
                    "start": 480,
                    "end": 494
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 509
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 513
                      },
                      "start": 503,
                      "end": 514
                    },
                    "directive": null,
                    "start": 503,
                    "end": 515
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 530
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 537,
                            "end": 538
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 539,
                              "end": 540
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 541,
                              "end": 542
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 543,
                              "end": 544
                            }
                          ],
                          "start": 533,
                          "end": 545
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 546,
                          "end": 547
                        },
                        "optional": false,
                        "computed": false,
                        "start": 533,
                        "end": 547
                      },
                      "start": 524,
                      "end": 548
                    },
                    "directive": null,
                    "start": 524,
                    "end": 549
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 564
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 567,
                            "end": 568
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 569,
                            "end": 570
                          },
                          "optional": false,
                          "computed": false,
                          "start": 567,
                          "end": 570
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 571,
                            "end": 573
                          }
                        ],
                        "optional": false,
                        "start": 567,
                        "end": 574
                      },
                      "start": 558,
                      "end": 575
                    },
                    "directive": null,
                    "start": 558,
                    "end": 576
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 591
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 598,
                              "end": 599
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 600,
                                "end": 601
                              },
                              {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 602,
                                "end": 604
                              },
                              {
                                "type": "Literal",
                                "value": 20,
                                "raw": "20",
                                "start": 605,
                                "end": 607
                              }
                            ],
                            "start": 594,
                            "end": 608
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "g",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 609,
                            "end": 610
                          },
                          "optional": false,
                          "computed": false,
                          "start": 594,
                          "end": 610
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 611,
                              "end": 612
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 613,
                              "end": 614
                            },
                            "optional": false,
                            "computed": false,
                            "start": 611,
                            "end": 614
                          }
                        ],
                        "optional": false,
                        "start": 594,
                        "end": 615
                      },
                      "start": 585,
                      "end": 616
                    },
                    "directive": null,
                    "start": 585,
                    "end": 617
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 639
                    },
                    "start": 626,
                    "end": 640
                  }
                ],
                "start": 470,
                "end": 646
              },
              "expression": false,
              "start": 457,
              "end": 646
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 450,
            "end": 646
          }
        ],
        "start": 12,
        "end": 648
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 648
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 651
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 653
          },
          "optional": false,
          "computed": false,
          "start": 650,
          "end": 653
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 650,
        "end": 655
      },
      "directive": null,
      "start": 650,
      "end": 656
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 658
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
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 62,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 289,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 311,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 336,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "n",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 369,
    "end": 375
  },
  {
    "type": "String",
    "value": "\"wow: \"",
    "start": 376,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "pub",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "priv",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 450,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "result",
    "start": 558,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 571,
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
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 591,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 626,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  }
]
```

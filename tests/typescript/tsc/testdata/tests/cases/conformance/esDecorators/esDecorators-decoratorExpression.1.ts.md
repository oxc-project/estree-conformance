__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 24,
                    "end": 25
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 24,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "optional": false,
                "computed": false,
                "start": 24,
                "end": 29
              },
              "start": 23,
              "end": 29
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 38,
            "end": 40
          },
          "abstract": false,
          "declare": false,
          "start": 23,
          "end": 40
        }
      ],
      "start": 21,
      "end": 42
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "typeArguments": null,
                "arguments": [],
                "start": 47,
                "end": 52
              },
              "start": 46,
              "end": 52
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 60
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 61,
            "end": 63
          },
          "abstract": false,
          "declare": false,
          "start": 46,
          "end": 63
        }
      ],
      "start": 44,
      "end": 65
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 71
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 70,
                    "end": 73
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 75
                  },
                  "optional": false,
                  "computed": false,
                  "start": 70,
                  "end": 75
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 70,
                "end": 77
              },
              "start": 69,
              "end": 77
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 86,
            "end": 88
          },
          "abstract": false,
          "declare": false,
          "start": 69,
          "end": 88
        }
      ],
      "start": 67,
      "end": 90
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  },
                  "optional": true,
                  "computed": false,
                  "start": 95,
                  "end": 99
                },
                "start": 95,
                "end": 99
              },
              "start": 94,
              "end": 99
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 107
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 108,
            "end": 110
          },
          "abstract": false,
          "declare": false,
          "start": 94,
          "end": 110
        }
      ],
      "start": 92,
      "end": 112
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 121
                    },
                    "optional": true,
                    "computed": false,
                    "start": 117,
                    "end": 121
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 117,
                  "end": 123
                },
                "start": 117,
                "end": 123
              },
              "start": 116,
              "end": 123
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 131
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 132,
            "end": 134
          },
          "abstract": false,
          "declare": false,
          "start": 116,
          "end": 134
        }
      ],
      "start": 114,
      "end": 136
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 142
                  },
                  "property": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 145,
                    "end": 148
                  },
                  "optional": true,
                  "computed": true,
                  "start": 141,
                  "end": 149
                },
                "start": 141,
                "end": 149
              },
              "start": 140,
              "end": 149
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 158,
            "end": 160
          },
          "abstract": false,
          "declare": false,
          "start": 140,
          "end": 160
        }
      ],
      "start": 138,
      "end": 162
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": true,
                  "start": 167,
                  "end": 172
                },
                "start": 167,
                "end": 172
              },
              "start": 166,
              "end": 172
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 180
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 181,
            "end": 183
          },
          "abstract": false,
          "declare": false,
          "start": 166,
          "end": 183
        }
      ],
      "start": 164,
      "end": 185
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 191,
                      "end": 193
                    }
                  ],
                  "expressions": [],
                  "start": 191,
                  "end": 193
                },
                "start": 190,
                "end": 193
              },
              "start": 189,
              "end": 193
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 202,
            "end": 204
          },
          "abstract": false,
          "declare": false,
          "start": 189,
          "end": 204
        }
      ],
      "start": 187,
      "end": 206
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 212
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 212,
                        "end": 214
                      }
                    ],
                    "expressions": [],
                    "start": 212,
                    "end": 214
                  },
                  "start": 211,
                  "end": 214
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 211,
                "end": 216
              },
              "start": 210,
              "end": 216
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 225,
            "end": 227
          },
          "abstract": false,
          "declare": false,
          "start": 210,
          "end": 227
        }
      ],
      "start": 208,
      "end": 229
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 237
                  },
                  "optional": false,
                  "computed": false,
                  "start": 234,
                  "end": 237
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 237,
                      "end": 239
                    }
                  ],
                  "expressions": [],
                  "start": 237,
                  "end": 239
                },
                "start": 234,
                "end": 239
              },
              "start": 233,
              "end": 239
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 247
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 248,
            "end": 250
          },
          "abstract": false,
          "declare": false,
          "start": 233,
          "end": 250
        }
      ],
      "start": 231,
      "end": 252
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ClassDeclaration",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 258
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "optional": false,
                    "computed": false,
                    "start": 257,
                    "end": 260
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 260,
                        "end": 262
                      }
                    ],
                    "expressions": [],
                    "start": 260,
                    "end": 262
                  },
                  "start": 257,
                  "end": 262
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 257,
                "end": 264
              },
              "start": 256,
              "end": 264
            }
          ],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 272
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 273,
            "end": 275
          },
          "abstract": false,
          "declare": false,
          "start": 256,
          "end": 275
        }
      ],
      "start": 254,
      "end": 277
    },
    {
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
            "start": 287,
            "end": 288
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 293
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 292,
                        "end": 295
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 297
                      },
                      "optional": false,
                      "computed": false,
                      "start": 292,
                      "end": 297
                    },
                    "start": 291,
                    "end": 297
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
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
                    "start": 302,
                    "end": 304
                  },
                  "expression": false,
                  "start": 299,
                  "end": 304
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 291,
                "end": 304
              }
            ],
            "start": 289,
            "end": 306
          },
          "abstract": false,
          "declare": false,
          "start": 281,
          "end": 306
        }
      ],
      "start": 279,
      "end": 308
    },
    {
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
            "start": 318,
            "end": 319
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 328
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 323,
                      "end": 328
                    },
                    "start": 322,
                    "end": 328
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
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
                    "start": 333,
                    "end": 335
                  },
                  "expression": false,
                  "start": 330,
                  "end": 335
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 322,
                "end": 335
              }
            ],
            "start": 320,
            "end": 337
          },
          "abstract": false,
          "declare": false,
          "start": 312,
          "end": 337
        }
      ],
      "start": 310,
      "end": 339
    },
    {
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
            "start": 349,
            "end": 350
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 354,
                            "end": 355
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 354,
                          "end": 357
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 359
                        },
                        "optional": false,
                        "computed": false,
                        "start": 354,
                        "end": 359
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 354,
                      "end": 361
                    },
                    "start": 353,
                    "end": 361
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
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
                    "start": 366,
                    "end": 368
                  },
                  "expression": false,
                  "start": 363,
                  "end": 368
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 353,
                "end": 368
              }
            ],
            "start": 351,
            "end": 370
          },
          "abstract": false,
          "declare": false,
          "start": 343,
          "end": 370
        }
      ],
      "start": 341,
      "end": 372
    },
    {
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
            "start": 382,
            "end": 383
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
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                          "start": 390,
                          "end": 391
                        },
                        "optional": true,
                        "computed": false,
                        "start": 387,
                        "end": 391
                      },
                      "start": 387,
                      "end": 391
                    },
                    "start": 386,
                    "end": 391
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
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
                    "start": 396,
                    "end": 398
                  },
                  "expression": false,
                  "start": 393,
                  "end": 398
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 386,
                "end": 398
              }
            ],
            "start": 384,
            "end": 400
          },
          "abstract": false,
          "declare": false,
          "start": 376,
          "end": 400
        }
      ],
      "start": 374,
      "end": 402
    },
    {
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
            "start": 412,
            "end": 413
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
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 417,
                            "end": 418
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 420,
                            "end": 421
                          },
                          "optional": true,
                          "computed": false,
                          "start": 417,
                          "end": 421
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 417,
                        "end": 423
                      },
                      "start": 417,
                      "end": 423
                    },
                    "start": 416,
                    "end": 423
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
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
                    "start": 428,
                    "end": 430
                  },
                  "expression": false,
                  "start": 425,
                  "end": 430
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 416,
                "end": 430
              }
            ],
            "start": 414,
            "end": 432
          },
          "abstract": false,
          "declare": false,
          "start": 406,
          "end": 432
        }
      ],
      "start": 404,
      "end": 434
    },
    {
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
            "start": 444,
            "end": 445
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
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 450
                        },
                        "property": {
                          "type": "Literal",
                          "value": "y",
                          "raw": "\"y\"",
                          "start": 453,
                          "end": 456
                        },
                        "optional": true,
                        "computed": true,
                        "start": 449,
                        "end": 457
                      },
                      "start": 449,
                      "end": 457
                    },
                    "start": 448,
                    "end": 457
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 459
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
                    "start": 462,
                    "end": 464
                  },
                  "expression": false,
                  "start": 459,
                  "end": 464
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 448,
                "end": 464
              }
            ],
            "start": 446,
            "end": 466
          },
          "abstract": false,
          "declare": false,
          "start": 438,
          "end": 466
        }
      ],
      "start": 436,
      "end": 468
    },
    {
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
            "start": 478,
            "end": 479
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
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 483,
                          "end": 484
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 483,
                        "end": 488
                      },
                      "start": 483,
                      "end": 488
                    },
                    "start": 482,
                    "end": 488
                  }
                ],
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
                    "body": [],
                    "start": 493,
                    "end": 495
                  },
                  "expression": false,
                  "start": 490,
                  "end": 495
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 482,
                "end": 495
              }
            ],
            "start": 480,
            "end": 497
          },
          "abstract": false,
          "declare": false,
          "start": 472,
          "end": 497
        }
      ],
      "start": 470,
      "end": 499
    },
    {
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
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 515
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 515,
                            "end": 517
                          }
                        ],
                        "expressions": [],
                        "start": 515,
                        "end": 517
                      },
                      "start": 514,
                      "end": 517
                    },
                    "start": 513,
                    "end": 517
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 519
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
                    "start": 522,
                    "end": 524
                  },
                  "expression": false,
                  "start": 519,
                  "end": 524
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 513,
                "end": 524
              }
            ],
            "start": 511,
            "end": 526
          },
          "abstract": false,
          "declare": false,
          "start": 503,
          "end": 526
        }
      ],
      "start": 501,
      "end": 528
    },
    {
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
            "start": 538,
            "end": 539
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "TaggedTemplateExpression",
                        "tag": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 543,
                          "end": 544
                        },
                        "typeArguments": null,
                        "quasi": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 544,
                              "end": 546
                            }
                          ],
                          "expressions": [],
                          "start": 544,
                          "end": 546
                        },
                        "start": 543,
                        "end": 546
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 543,
                      "end": 548
                    },
                    "start": 542,
                    "end": 548
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
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
                    "start": 553,
                    "end": 555
                  },
                  "expression": false,
                  "start": 550,
                  "end": 555
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 542,
                "end": 555
              }
            ],
            "start": 540,
            "end": 557
          },
          "abstract": false,
          "declare": false,
          "start": 532,
          "end": 557
        }
      ],
      "start": 530,
      "end": 559
    },
    {
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
            "start": 569,
            "end": 570
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
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 575
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 577
                        },
                        "optional": false,
                        "computed": false,
                        "start": 574,
                        "end": 577
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 577,
                            "end": 579
                          }
                        ],
                        "expressions": [],
                        "start": 577,
                        "end": 579
                      },
                      "start": 574,
                      "end": 579
                    },
                    "start": 573,
                    "end": 579
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 581
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
                    "start": 584,
                    "end": 586
                  },
                  "expression": false,
                  "start": 581,
                  "end": 586
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 573,
                "end": 586
              }
            ],
            "start": 571,
            "end": 588
          },
          "abstract": false,
          "declare": false,
          "start": 563,
          "end": 588
        }
      ],
      "start": 561,
      "end": 590
    },
    {
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
            "start": 600,
            "end": 601
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "TaggedTemplateExpression",
                        "tag": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 605,
                            "end": 606
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 607,
                            "end": 608
                          },
                          "optional": false,
                          "computed": false,
                          "start": 605,
                          "end": 608
                        },
                        "typeArguments": null,
                        "quasi": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 608,
                              "end": 610
                            }
                          ],
                          "expressions": [],
                          "start": 608,
                          "end": 610
                        },
                        "start": 605,
                        "end": 610
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 605,
                      "end": 612
                    },
                    "start": 604,
                    "end": 612
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 613,
                  "end": 614
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
                    "start": 617,
                    "end": 619
                  },
                  "expression": false,
                  "start": 614,
                  "end": 619
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 604,
                "end": 619
              }
            ],
            "start": 602,
            "end": 621
          },
          "abstract": false,
          "declare": false,
          "start": 594,
          "end": 621
        }
      ],
      "start": 592,
      "end": 623
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 623
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 118,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 173,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Template",
    "value": "``",
    "start": 191,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 211,
    "end": 212
  },
  {
    "type": "Template",
    "value": "``",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
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
    "value": "y",
    "start": 236,
    "end": 237
  },
  {
    "type": "Template",
    "value": "``",
    "start": 237,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 240,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
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
    "value": "y",
    "start": 259,
    "end": 260
  },
  {
    "type": "Template",
    "value": "``",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "@",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 312,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
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
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
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
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 388,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
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
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 418,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 472,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
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
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
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
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 514,
    "end": 515
  },
  {
    "type": "Template",
    "value": "``",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 532,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 543,
    "end": 544
  },
  {
    "type": "Template",
    "value": "``",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "m",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 563,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 576,
    "end": 577
  },
  {
    "type": "Template",
    "value": "``",
    "start": 577,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 594,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 607,
    "end": 608
  },
  {
    "type": "Template",
    "value": "``",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  }
]
```

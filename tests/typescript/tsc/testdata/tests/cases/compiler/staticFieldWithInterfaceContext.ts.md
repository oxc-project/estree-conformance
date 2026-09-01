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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 24
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 26,
                          "end": 29
                        },
                        "start": 26,
                        "end": 29
                      },
                      "start": 24,
                      "end": 29
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 23,
                    "end": 29
                  }
                ],
                "start": 21,
                "end": 31
              },
              "start": 19,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 32
          }
        ],
        "start": 12,
        "end": 34
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "typeArguments": null,
                "start": 42,
                "end": 43
              },
              "start": 40,
              "end": 43
            },
            "start": 39,
            "end": 43
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 115,
                    "end": 116
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 122
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 124,
                          "end": 127
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 121,
                        "end": 127
                      }
                    ],
                    "start": 119,
                    "end": 129
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 108,
                  "end": 130
                }
              ],
              "start": 52,
              "end": 132
            },
            "abstract": false,
            "declare": false,
            "start": 46,
            "end": 132
          },
          "definite": false,
          "start": 39,
          "end": 132
        }
      ],
      "declare": false,
      "start": 35,
      "end": 133
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 134,
          "end": 137
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 145,
                "end": 148
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 142,
              "end": 148
            }
          ],
          "start": 140,
          "end": 150
        },
        "start": 134,
        "end": 150
      },
      "directive": null,
      "start": 134,
      "end": 151
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
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 164,
            "end": 167
          },
          "definite": false,
          "start": 159,
          "end": 167
        }
      ],
      "declare": false,
      "start": 153,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "typeArguments": null,
                "start": 177,
                "end": 178
              },
              "start": 175,
              "end": 178
            },
            "start": 173,
            "end": 178
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "ex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 199
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 208,
                          "end": 211
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 205,
                        "end": 211
                      }
                    ],
                    "start": 203,
                    "end": 213
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 189,
                  "end": 214
                }
              ],
              "start": 187,
              "end": 216
            },
            "abstract": false,
            "declare": false,
            "start": 181,
            "end": 216
          },
          "definite": false,
          "start": 173,
          "end": 216
        }
      ],
      "declare": false,
      "start": 169,
      "end": 217
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 222
          },
          "optional": false,
          "computed": true,
          "start": 218,
          "end": 223
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 231,
                "end": 234
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 228,
              "end": 234
            }
          ],
          "start": 226,
          "end": 236
        },
        "start": 218,
        "end": 236
      },
      "directive": null,
      "start": 218,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 249
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "typeArguments": null,
                "start": 253,
                "end": 254
              },
              "start": 251,
              "end": 254
            },
            "start": 250,
            "end": 254
          },
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 272,
                    "end": 273
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 278,
                          "end": 279
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 281,
                          "end": 284
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 278,
                        "end": 284
                      }
                    ],
                    "start": 276,
                    "end": 286
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 265,
                  "end": 286
                }
              ],
              "start": 263,
              "end": 288
            },
            "abstract": false,
            "declare": false,
            "start": 257,
            "end": 288
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 290,
        "end": 293
      },
      "expression": false,
      "start": 239,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 302
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 301,
                "end": 306
              }
            ],
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 313
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 316
                        },
                        "typeArguments": null,
                        "start": 315,
                        "end": 316
                      },
                      "start": 313,
                      "end": 316
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 312,
                    "end": 316
                  }
                ],
                "start": 310,
                "end": 318
              },
              "start": 308,
              "end": 318
            },
            "start": 299,
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 324
                },
                "value": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 341,
                          "end": 342
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 347,
                                "end": 348
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 350,
                                "end": 353
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 347,
                              "end": 353
                            }
                          ],
                          "start": 345,
                          "end": 355
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 334,
                        "end": 355
                      }
                    ],
                    "start": 332,
                    "end": 357
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 326,
                  "end": 357
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 323,
                "end": 357
              }
            ],
            "start": 321,
            "end": 359
          },
          "definite": false,
          "start": 299,
          "end": 359
        }
      ],
      "declare": false,
      "start": 295,
      "end": 360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 372
                  },
                  "right": {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
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
                            "start": 390,
                            "end": 391
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 396,
                                  "end": 397
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 399,
                                  "end": 402
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 396,
                                "end": 402
                              }
                            ],
                            "start": 394,
                            "end": 404
                          },
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 383,
                          "end": 404
                        }
                      ],
                      "start": 381,
                      "end": 406
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 375,
                    "end": 406
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 367,
                "end": 406
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 412
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 416
                        },
                        "typeArguments": null,
                        "start": 415,
                        "end": 416
                      },
                      "start": 413,
                      "end": 416
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 411,
                    "end": 416
                  }
                ],
                "start": 409,
                "end": 418
              },
              "start": 407,
              "end": 418
            },
            "start": 365,
            "end": 418
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 421,
            "end": 424
          },
          "definite": false,
          "start": 365,
          "end": 424
        }
      ],
      "declare": false,
      "start": 361,
      "end": 425
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 437
                  },
                  "right": {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
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
                            "start": 455,
                            "end": 456
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 461,
                                  "end": 462
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 464,
                                  "end": 467
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 461,
                                "end": 467
                              }
                            ],
                            "start": 459,
                            "end": 469
                          },
                          "computed": false,
                          "static": true,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 448,
                          "end": 469
                        }
                      ],
                      "start": 446,
                      "end": 471
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 440,
                    "end": 471
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 471
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 432,
                "end": 471
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 480,
                          "end": 481
                        },
                        "typeArguments": null,
                        "start": 480,
                        "end": 481
                      },
                      "start": 478,
                      "end": 481
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 476,
                    "end": 481
                  }
                ],
                "start": 474,
                "end": 483
              },
              "start": 472,
              "end": 483
            },
            "start": 430,
            "end": 483
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 489
                },
                "value": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 506,
                          "end": 507
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 512,
                                "end": 513
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 515,
                                "end": 518
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 512,
                              "end": 518
                            }
                          ],
                          "start": 510,
                          "end": 520
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 499,
                        "end": 520
                      }
                    ],
                    "start": 497,
                    "end": 522
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 491,
                  "end": 522
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 488,
                "end": 522
              }
            ],
            "start": 486,
            "end": 524
          },
          "definite": false,
          "start": 430,
          "end": 524
        }
      ],
      "declare": false,
      "start": 426,
      "end": 525
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c6",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 534
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 539,
                    "end": 540
                  }
                ],
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "start": 530,
            "end": 541
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "start": 560,
                        "end": 561
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 566,
                              "end": 567
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 569,
                              "end": 572
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 566,
                            "end": 572
                          }
                        ],
                        "start": 564,
                        "end": 574
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 553,
                      "end": 574
                    }
                  ],
                  "start": 551,
                  "end": 576
                },
                "abstract": false,
                "declare": false,
                "start": 545,
                "end": 576
              }
            ],
            "start": 544,
            "end": 577
          },
          "definite": false,
          "start": 530,
          "end": 577
        }
      ],
      "declare": false,
      "start": 526,
      "end": 578
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c7",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 587
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 592
                  },
                  "typeArguments": null,
                  "start": 591,
                  "end": 592
                },
                "start": 591,
                "end": 594
              },
              "start": 589,
              "end": 594
            },
            "start": 583,
            "end": 594
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "start": 613,
                        "end": 614
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 619,
                              "end": 620
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 622,
                              "end": 625
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 619,
                            "end": 625
                          }
                        ],
                        "start": 617,
                        "end": 627
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 606,
                      "end": 627
                    }
                  ],
                  "start": 604,
                  "end": 629
                },
                "abstract": false,
                "declare": false,
                "start": 598,
                "end": 629
              }
            ],
            "start": 597,
            "end": 630
          },
          "definite": false,
          "start": 583,
          "end": 630
        }
      ],
      "declare": false,
      "start": 579,
      "end": 631
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 641
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 659,
                          "end": 660
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 665,
                                "end": 666
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 668,
                                "end": 671
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 665,
                              "end": 671
                            }
                          ],
                          "start": 663,
                          "end": 673
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 652,
                        "end": 673
                      }
                    ],
                    "start": 650,
                    "end": 675
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 644,
                  "end": 675
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 675
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "typeArguments": null,
                      "start": 680,
                      "end": 681
                    },
                    "start": 680,
                    "end": 682
                  }
                ],
                "start": 679,
                "end": 683
              },
              "start": 677,
              "end": 683
            },
            "start": 637,
            "end": 683
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 686,
            "end": 688
          },
          "definite": false,
          "start": 637,
          "end": 688
        }
      ],
      "declare": false,
      "start": 633,
      "end": 689
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 698
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 716,
                          "end": 717
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 722,
                                "end": 723
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 725,
                                "end": 728
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 722,
                              "end": 728
                            }
                          ],
                          "start": 720,
                          "end": 730
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 709,
                        "end": 730
                      }
                    ],
                    "start": 707,
                    "end": 732
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 701,
                  "end": 732
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 732
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 736,
                    "end": 737
                  },
                  "typeArguments": null,
                  "start": 736,
                  "end": 737
                },
                "start": 736,
                "end": 739
              },
              "start": 734,
              "end": 739
            },
            "start": 694,
            "end": 739
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 742,
            "end": 744
          },
          "definite": false,
          "start": 694,
          "end": 744
        }
      ],
      "declare": false,
      "start": 690,
      "end": 745
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 755
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 773,
                          "end": 774
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 779,
                                "end": 780
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 782,
                                "end": 785
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 779,
                              "end": 785
                            }
                          ],
                          "start": 777,
                          "end": 787
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 766,
                        "end": 787
                      }
                    ],
                    "start": 764,
                    "end": 789
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 758,
                  "end": 789
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 789
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 795
                      },
                      "typeArguments": null,
                      "start": 794,
                      "end": 795
                    },
                    "start": 794,
                    "end": 796
                  }
                ],
                "start": 793,
                "end": 797
              },
              "start": 791,
              "end": 797
            },
            "start": 750,
            "end": 797
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "start": 816,
                        "end": 817
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 822,
                              "end": 823
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 825,
                              "end": 828
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 822,
                            "end": 828
                          }
                        ],
                        "start": 820,
                        "end": 830
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 809,
                      "end": 830
                    }
                  ],
                  "start": 807,
                  "end": 832
                },
                "abstract": false,
                "declare": false,
                "start": 801,
                "end": 832
              }
            ],
            "start": 800,
            "end": 833
          },
          "definite": false,
          "start": 750,
          "end": 833
        }
      ],
      "declare": false,
      "start": 746,
      "end": 834
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 844
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "start": 862,
                          "end": 863
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 868,
                                "end": 869
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 871,
                                "end": 874
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 868,
                              "end": 874
                            }
                          ],
                          "start": 866,
                          "end": 876
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 855,
                        "end": 876
                      }
                    ],
                    "start": 853,
                    "end": 878
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 847,
                  "end": 878
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 878
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 882,
                    "end": 883
                  },
                  "typeArguments": null,
                  "start": 882,
                  "end": 883
                },
                "start": 882,
                "end": 885
              },
              "start": 880,
              "end": 885
            },
            "start": 839,
            "end": 885
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
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
                        "start": 904,
                        "end": 905
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 910,
                              "end": 911
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 913,
                              "end": 916
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 910,
                            "end": 916
                          }
                        ],
                        "start": 908,
                        "end": 918
                      },
                      "computed": false,
                      "static": true,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 897,
                      "end": 918
                    }
                  ],
                  "start": 895,
                  "end": 920
                },
                "abstract": false,
                "declare": false,
                "start": 889,
                "end": 920
              }
            ],
            "start": 888,
            "end": 921
          },
          "definite": false,
          "start": 839,
          "end": 921
        }
      ],
      "declare": false,
      "start": 835,
      "end": 922
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 922
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
    "value": "I",
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
    "type": "Identifier",
    "value": "x",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
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
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 239,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 265,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "let",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 304,
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
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
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
    "value": "c",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 334,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "let",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 383,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 448,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 477,
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
    "value": "I",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 491,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 499,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 553,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 606,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 644,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 652,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 709,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
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
    "type": "String",
    "value": "\"a\"",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 746,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 758,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 766,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 801,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 809,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 855,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 889,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 897,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 913,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  }
]
```

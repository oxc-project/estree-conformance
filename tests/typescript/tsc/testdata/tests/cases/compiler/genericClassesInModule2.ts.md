__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 17
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 15,
              "end": 17
            }
          ],
          "start": 14,
          "end": 18
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 35
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
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 61,
                                    "end": 62
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
                                          "start": 63,
                                          "end": 65
                                        },
                                        "typeArguments": null,
                                        "start": 63,
                                        "end": 65
                                      }
                                    ],
                                    "start": 62,
                                    "end": 66
                                  },
                                  "start": 61,
                                  "end": 66
                                },
                                "start": 59,
                                "end": 66
                              },
                              "start": 55,
                              "end": 66
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 71,
                              "end": 75
                            },
                            "start": 68,
                            "end": 75
                          },
                          "start": 54,
                          "end": 75
                        },
                        "start": 52,
                        "end": 75
                      },
                      "start": 44,
                      "end": 75
                    },
                    "readonly": false,
                    "static": false,
                    "start": 37,
                    "end": 75
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
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 91,
                            "end": 96
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 103,
                              "end": 104
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 105,
                                "end": 109
                              }
                            ],
                            "start": 99,
                            "end": 110
                          },
                          "definite": false,
                          "start": 91,
                          "end": 110
                        }
                      ],
                      "declare": false,
                      "start": 87,
                      "end": 111
                    }
                  ],
                  "start": 77,
                  "end": 117
                },
                "expression": false,
                "start": 35,
                "end": 117
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 24,
              "end": 117
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "AAA",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 125
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
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 144,
                                  "end": 145
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
                                        "start": 146,
                                        "end": 148
                                      },
                                      "typeArguments": null,
                                      "start": 146,
                                      "end": 148
                                    }
                                  ],
                                  "start": 145,
                                  "end": 149
                                },
                                "start": 144,
                                "end": 149
                              },
                              "start": 142,
                              "end": 149
                            },
                            "start": 138,
                            "end": 149
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 154,
                            "end": 158
                          },
                          "start": 151,
                          "end": 158
                        },
                        "start": 137,
                        "end": 158
                      },
                      "start": 135,
                      "end": 158
                    },
                    "start": 127,
                    "end": 158
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
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 179
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 188,
                                "end": 192
                              }
                            ],
                            "start": 182,
                            "end": 193
                          },
                          "definite": false,
                          "start": 174,
                          "end": 193
                        }
                      ],
                      "declare": false,
                      "start": 170,
                      "end": 194
                    }
                  ],
                  "start": 160,
                  "end": 200
                },
                "expression": false,
                "start": 125,
                "end": 200
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 122,
              "end": 200
            }
          ],
          "start": 18,
          "end": 202
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 202
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 225
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 223,
              "end": 225
            }
          ],
          "start": 222,
          "end": 226
        },
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
                "name": "child",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 237
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
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
                          "start": 241,
                          "end": 243
                        },
                        "typeArguments": null,
                        "start": 241,
                        "end": 243
                      }
                    ],
                    "start": 240,
                    "end": 244
                  },
                  "start": 239,
                  "end": 244
                },
                "start": 237,
                "end": 244
              },
              "accessibility": null,
              "static": false,
              "start": 232,
              "end": 245
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 258
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
                              "start": 259,
                              "end": 261
                            },
                            "typeArguments": null,
                            "start": 259,
                            "end": 261
                          }
                        ],
                        "start": 258,
                        "end": 262
                      },
                      "start": 257,
                      "end": 262
                    },
                    "start": 255,
                    "end": 262
                  },
                  "start": 251,
                  "end": 262
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 265,
                  "end": 269
                },
                "start": 263,
                "end": 269
              },
              "start": 250,
              "end": 270
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 296,
                                "end": 297
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
                                      "start": 298,
                                      "end": 300
                                    },
                                    "typeArguments": null,
                                    "start": 298,
                                    "end": 300
                                  }
                                ],
                                "start": 297,
                                "end": 301
                              },
                              "start": 296,
                              "end": 301
                            },
                            "start": 294,
                            "end": 301
                          },
                          "start": 290,
                          "end": 301
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 306,
                          "end": 310
                        },
                        "start": 303,
                        "end": 310
                      },
                      "start": 289,
                      "end": 310
                    },
                    "start": 287,
                    "end": 310
                  },
                  "start": 279,
                  "end": 310
                }
              ],
              "returnType": null,
              "start": 275,
              "end": 311
            }
          ],
          "start": 226,
          "end": 313
        },
        "declare": false,
        "start": 211,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 204,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 328,
          "end": 329
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 332
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 330,
              "end": 332
            }
          ],
          "start": 329,
          "end": 333
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 351
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
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 369
                          },
                          "typeArguments": null,
                          "start": 367,
                          "end": 369
                        },
                        "start": 365,
                        "end": 369
                      },
                      "start": 359,
                      "end": 369
                    },
                    "readonly": false,
                    "static": false,
                    "start": 352,
                    "end": 369
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 371,
                  "end": 374
                },
                "expression": false,
                "start": 351,
                "end": 374
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 340,
              "end": 374
            }
          ],
          "start": 334,
          "end": 376
        },
        "abstract": false,
        "declare": false,
        "start": 322,
        "end": 376
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 315,
      "end": 376
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 377
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 24,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 44,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 68,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "AAA",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "self",
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
    "value": "A",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 151,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 154,
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
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
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
    "value": "export",
    "start": 204,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 303,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 315,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 322,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 340,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 352,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  }
]
```

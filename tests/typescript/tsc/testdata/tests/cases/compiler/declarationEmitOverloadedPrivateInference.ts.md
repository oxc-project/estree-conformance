__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 19,
          "end": 25
        },
        "start": 17,
        "end": 25
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 39,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              },
              "start": 39,
              "end": 50
            },
            "start": 32,
            "end": 51
          }
        ],
        "start": 26,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneArg",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 70
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            },
            "start": 76,
            "end": 84
          },
          "start": 71,
          "end": 84
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 87,
          "end": 93
        },
        "start": 85,
        "end": 93
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 107,
                "end": 111
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 115,
                "end": 118
              },
              "start": 107,
              "end": 118
            },
            "start": 100,
            "end": 119
          }
        ],
        "start": 94,
        "end": 121
      },
      "expression": false,
      "start": 55,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Wrapper",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 143
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
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 163
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "start": 164,
                        "end": 165
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 164,
                      "end": 165
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
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
                  "start": 163,
                  "end": 169
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
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
                            "name": "options",
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
                                  "start": 184,
                                  "end": 185
                                },
                                "typeArguments": null,
                                "start": 184,
                                "end": 185
                              },
                              "start": 182,
                              "end": 185
                            },
                            "start": 175,
                            "end": 185
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 190,
                              "end": 191
                            },
                            "typeArguments": null,
                            "start": 190,
                            "end": 191
                          },
                          "start": 187,
                          "end": 191
                        },
                        "start": 174,
                        "end": 191
                      },
                      "start": 172,
                      "end": 191
                    },
                    "start": 170,
                    "end": 191
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
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
                              "start": 204,
                              "end": 205
                            },
                            "typeArguments": null,
                            "start": 204,
                            "end": 205
                          },
                          "start": 202,
                          "end": 205
                        },
                        "start": 195,
                        "end": 205
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 211
                        },
                        "typeArguments": null,
                        "start": 210,
                        "end": 211
                      },
                      "start": 207,
                      "end": 211
                    },
                    "start": 194,
                    "end": 211
                  },
                  "start": 192,
                  "end": 211
                },
                "body": null,
                "expression": false,
                "start": 163,
                "end": 212
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 150,
              "end": 212
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 230
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "start": 231,
                        "end": 232
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 231,
                      "end": 232
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 235
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 234,
                      "end": 235
                    }
                  ],
                  "start": 230,
                  "end": 236
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
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
                            "name": "options",
                            "optional": true,
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
                                  "start": 252,
                                  "end": 253
                                },
                                "typeArguments": null,
                                "start": 252,
                                "end": 253
                              },
                              "start": 250,
                              "end": 253
                            },
                            "start": 242,
                            "end": 253
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 258,
                              "end": 259
                            },
                            "typeArguments": null,
                            "start": 258,
                            "end": 259
                          },
                          "start": 255,
                          "end": 259
                        },
                        "start": 241,
                        "end": 259
                      },
                      "start": 239,
                      "end": 259
                    },
                    "start": 237,
                    "end": 259
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noArgs",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 269,
                          "end": 273
                        },
                        "start": 269,
                        "end": 273
                      },
                      "start": 267,
                      "end": 273
                    },
                    "start": 261,
                    "end": 273
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
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
                              "start": 287,
                              "end": 288
                            },
                            "typeArguments": null,
                            "start": 287,
                            "end": 288
                          },
                          "start": 285,
                          "end": 288
                        },
                        "start": 277,
                        "end": 288
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 294
                        },
                        "typeArguments": null,
                        "start": 293,
                        "end": 294
                      },
                      "start": 290,
                      "end": 294
                    },
                    "start": 276,
                    "end": 294
                  },
                  "start": 274,
                  "end": 294
                },
                "body": null,
                "expression": false,
                "start": 230,
                "end": 295
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 217,
              "end": 295
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "proxy",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 314
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 315,
                        "end": 316
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 315,
                      "end": 316
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 318,
                        "end": 319
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 318,
                      "end": 319
                    }
                  ],
                  "start": 314,
                  "end": 320
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
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
                            "name": "options",
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
                                  "start": 335,
                                  "end": 336
                                },
                                "typeArguments": null,
                                "start": 335,
                                "end": 336
                              },
                              "start": 333,
                              "end": 336
                            },
                            "start": 326,
                            "end": 336
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 341,
                              "end": 342
                            },
                            "typeArguments": null,
                            "start": 341,
                            "end": 342
                          },
                          "start": 338,
                          "end": 342
                        },
                        "start": 325,
                        "end": 342
                      },
                      "start": 323,
                      "end": 342
                    },
                    "start": 321,
                    "end": 342
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 361,
                          "end": 365
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 369,
                          "end": 372
                        },
                        "start": 361,
                        "end": 372
                      },
                      "start": 354,
                      "end": 373
                    }
                  ],
                  "start": 344,
                  "end": 379
                },
                "expression": false,
                "start": 314,
                "end": 379
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 301,
              "end": 379
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Proxies",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 399
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
                      "name": "Failure",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 419
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 421,
                          "end": 425
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "proxy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 431
                        },
                        "optional": false,
                        "computed": false,
                        "start": 421,
                        "end": 431
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "noArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 438
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 440,
                          "end": 444
                        }
                      ],
                      "optional": false,
                      "start": 421,
                      "end": 445
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 412,
                    "end": 445
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Success",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 462
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 464,
                          "end": 468
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "proxy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 474
                        },
                        "optional": false,
                        "computed": false,
                        "start": 464,
                        "end": 474
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "oneArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 481
                        }
                      ],
                      "optional": false,
                      "start": 464,
                      "end": 482
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 455,
                    "end": 482
                  }
                ],
                "start": 402,
                "end": 489
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 385,
              "end": 490
            }
          ],
          "start": 144,
          "end": 492
        },
        "abstract": false,
        "declare": false,
        "start": 130,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 492
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 492
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 32,
    "end": 38
  },
  {
    "type": "Null",
    "value": "null",
    "start": 39,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "oneArg",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 100,
    "end": 106
  },
  {
    "type": "Null",
    "value": "null",
    "start": 107,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 112,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 123,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 150,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "proxy",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 187,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 217,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "proxy",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 255,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 290,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 301,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "proxy",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 354,
    "end": 360
  },
  {
    "type": "Null",
    "value": "null",
    "start": 361,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 366,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 369,
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
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 385,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Proxies",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Failure",
    "start": 412,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "proxy",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "noArgs",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Success",
    "start": 455,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 464,
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
    "value": "proxy",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "oneArg",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  }
]
```

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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 28
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 27,
                  "end": 28
                }
              ],
              "start": 26,
              "end": 29
            },
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
                              "start": 48,
                              "end": 49
                            },
                            "typeArguments": null,
                            "start": 48,
                            "end": 49
                          },
                          "start": 46,
                          "end": 49
                        },
                        "start": 41,
                        "end": 49
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
                          "start": 54,
                          "end": 55
                        },
                        "typeArguments": null,
                        "start": 54,
                        "end": 55
                      },
                      "start": 51,
                      "end": 55
                    },
                    "start": 40,
                    "end": 55
                  },
                  "start": 38,
                  "end": 55
                },
                "start": 30,
                "end": 55
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "typeArguments": {
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
                        "start": 61,
                        "end": 62
                      },
                      "typeArguments": null,
                      "start": 61,
                      "end": 62
                    }
                  ],
                  "start": 60,
                  "end": 63
                },
                "start": 58,
                "end": 63
              },
              "start": 56,
              "end": 63
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 64
          }
        ],
        "start": 16,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 87
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 88,
                      "end": 94
                    }
                  ],
                  "start": 87,
                  "end": 95
                },
                "start": 85,
                "end": 95
              },
              "start": 83,
              "end": 95
            },
            "start": 81,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 95
        }
      ],
      "declare": true,
      "start": 69,
      "end": 96
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 110
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 115
                      },
                      "optional": false,
                      "computed": false,
                      "start": 108,
                      "end": 115
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 119
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
                              "name": "num",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 123,
                              "end": 126
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 127,
                              "end": 135
                            },
                            "optional": false,
                            "computed": false,
                            "start": 123,
                            "end": 135
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 123,
                          "end": 137
                        },
                        "id": null,
                        "generator": false,
                        "start": 116,
                        "end": 137
                      }
                    ],
                    "optional": false,
                    "start": 108,
                    "end": 138
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 156
                  },
                  "optional": false,
                  "computed": false,
                  "start": 108,
                  "end": 156
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 160
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 167
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 174
                      },
                      "optional": false,
                      "computed": false,
                      "start": 164,
                      "end": 174
                    },
                    "id": null,
                    "generator": false,
                    "start": 157,
                    "end": 174
                  }
                ],
                "optional": false,
                "start": 108,
                "end": 175
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 231
              },
              "optional": false,
              "computed": false,
              "start": 108,
              "end": 231
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 235
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 242
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 251
                    },
                    "optional": false,
                    "computed": false,
                    "start": 239,
                    "end": 251
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 239,
                  "end": 253
                },
                "id": null,
                "generator": false,
                "start": 232,
                "end": 253
              }
            ],
            "optional": false,
            "start": 108,
            "end": 254
          },
          "definite": false,
          "start": 103,
          "end": 254
        }
      ],
      "declare": false,
      "start": 99,
      "end": 254
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "v1",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 277
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 284
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 293
                    },
                    "optional": false,
                    "computed": false,
                    "start": 281,
                    "end": 293
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 281,
                  "end": 295
                },
                "id": null,
                "generator": false,
                "start": 274,
                "end": 295
              }
            ],
            "optional": false,
            "start": 266,
            "end": 296
          },
          "definite": false,
          "start": 261,
          "end": 296
        }
      ],
      "declare": false,
      "start": 257,
      "end": 296
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 304
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 309
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 314
              },
              "optional": false,
              "computed": false,
              "start": 307,
              "end": 314
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 318
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 325
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 332
                  },
                  "optional": false,
                  "computed": false,
                  "start": 322,
                  "end": 332
                },
                "id": null,
                "generator": false,
                "start": 315,
                "end": 332
              }
            ],
            "optional": false,
            "start": 307,
            "end": 333
          },
          "definite": false,
          "start": 302,
          "end": 333
        }
      ],
      "declare": false,
      "start": 298,
      "end": 333
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 361
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 371
              },
              "optional": false,
              "computed": false,
              "start": 364,
              "end": 371
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 375
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 382
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 391
                    },
                    "optional": false,
                    "computed": false,
                    "start": 379,
                    "end": 391
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 379,
                  "end": 393
                },
                "id": null,
                "generator": false,
                "start": 372,
                "end": 393
              }
            ],
            "optional": false,
            "start": 364,
            "end": 394
          },
          "definite": false,
          "start": 359,
          "end": 394
        }
      ],
      "declare": false,
      "start": 355,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 394
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
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 30,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 41,
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
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "I1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 69,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "v1",
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
    "value": "I1",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 120,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 278,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 281,
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
    "value": "toString",
    "start": 285,
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
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 319,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 376,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 383,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  }
]
```

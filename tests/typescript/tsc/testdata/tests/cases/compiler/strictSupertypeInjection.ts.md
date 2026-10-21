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
        "name": "Reference",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 25
          }
        ],
        "start": 19,
        "end": 26
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 51
                },
                "typeArguments": null,
                "start": 46,
                "end": 51
              },
              "start": 44,
              "end": 51
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 33,
            "end": 52
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 66
            },
            "computed": false,
            "optional": false,
            "kind": "set",
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
                      "name": "Value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 79
                    },
                    "typeArguments": null,
                    "start": 74,
                    "end": 79
                  },
                  "start": 72,
                  "end": 79
                },
                "start": 67,
                "end": 79
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 81
          }
        ],
        "start": 27,
        "end": 83
      },
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComputedReference",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 111
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 112,
            "end": 117
          }
        ],
        "start": 111,
        "end": 118
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reference",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 136
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 142
                },
                "typeArguments": null,
                "start": 137,
                "end": 142
              }
            ],
            "start": 136,
            "end": 143
          },
          "start": 127,
          "end": 143
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 171
                },
                "typeArguments": null,
                "start": 166,
                "end": 171
              },
              "start": 164,
              "end": 171
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 172
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "effect",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 185,
                "end": 192
              },
              "start": 183,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 193
          }
        ],
        "start": 144,
        "end": 195
      },
      "declare": false,
      "start": 84,
      "end": 195
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InjectionConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 225
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 231
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 226,
            "end": 231
          }
        ],
        "start": 225,
        "end": 232
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 233,
        "end": 235
      },
      "declare": false,
      "start": 196,
      "end": 235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InjectionKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 253
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 259
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 259
          }
        ],
        "start": 253,
        "end": 260
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSSymbolKeyword",
            "start": 263,
            "end": 269
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InjectionConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 291
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 297
                  },
                  "typeArguments": null,
                  "start": 292,
                  "end": 297
                }
              ],
              "start": 291,
              "end": 298
            },
            "start": 272,
            "end": 298
          }
        ],
        "start": 263,
        "end": 298
      },
      "declare": false,
      "start": 236,
      "end": 299
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inject",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 324
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 330
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 325,
            "end": 330
          }
        ],
        "start": 324,
        "end": 331
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectionKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 349
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 355
                        },
                        "typeArguments": null,
                        "start": 350,
                        "end": 355
                      }
                    ],
                    "start": 349,
                    "end": 356
                  },
                  "start": 337,
                  "end": 356
                },
                {
                  "type": "TSStringKeyword",
                  "start": 359,
                  "end": 365
                }
              ],
              "start": 337,
              "end": 365
            },
            "start": 335,
            "end": 365
          },
          "start": 332,
          "end": 365
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fallback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 382
              },
              "typeArguments": null,
              "start": 377,
              "end": 382
            },
            "start": 375,
            "end": 382
          },
          "start": 367,
          "end": 382
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Value",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 390
          },
          "typeArguments": null,
          "start": 385,
          "end": 390
        },
        "start": 383,
        "end": 390
      },
      "body": null,
      "expression": false,
      "start": 301,
      "end": 391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ref",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 412
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 418
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 421,
              "end": 424
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 413,
            "end": 424
          }
        ],
        "start": 412,
        "end": 425
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reference",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 438
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 444
                    },
                    "typeArguments": null,
                    "start": 439,
                    "end": 444
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 447,
                    "end": 456
                  }
                ],
                "start": 439,
                "end": 456
              }
            ],
            "start": 438,
            "end": 457
          },
          "start": 429,
          "end": 457
        },
        "start": 427,
        "end": 457
      },
      "body": null,
      "expression": false,
      "start": 392,
      "end": 458
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
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectionKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 490
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "visibleIds",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 493,
                            "end": 503
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComputedReference",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 505,
                                "end": 522
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSUnknownKeyword",
                                    "start": 523,
                                    "end": 530
                                  }
                                ],
                                "start": 522,
                                "end": 531
                              },
                              "start": 505,
                              "end": 531
                            },
                            "start": 503,
                            "end": 531
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 493,
                          "end": 531
                        }
                      ],
                      "start": 491,
                      "end": 533
                    }
                  ],
                  "start": 490,
                  "end": 534
                },
                "start": 478,
                "end": 534
              },
              "start": 476,
              "end": 534
            },
            "start": 473,
            "end": 534
          },
          "init": null,
          "definite": false,
          "start": 473,
          "end": 534
        }
      ],
      "declare": true,
      "start": 459,
      "end": 535
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
            "name": "visibleIds",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 553
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "inject",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 562
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 566
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "visibleIds",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 580
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 582,
                          "end": 585
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 582,
                        "end": 587
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 570,
                      "end": 587
                    }
                  ],
                  "start": 568,
                  "end": 589
                }
              ],
              "optional": false,
              "start": 556,
              "end": 590
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "visibleIds",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 601
            },
            "optional": false,
            "computed": false,
            "start": 556,
            "end": 601
          },
          "definite": false,
          "start": 543,
          "end": 601
        }
      ],
      "declare": false,
      "start": 537,
      "end": 602
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 602
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
    "value": "Reference",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Value",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "ComputedReference",
    "start": 94,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Reference",
    "start": 127,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 150,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "effect",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 185,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 196,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "InjectionConstraint",
    "start": 206,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "InjectionKey",
    "start": 241,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "InjectionConstraint",
    "start": 272,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 301,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "inject",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "InjectionKey",
    "start": 337,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 350,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "fallback",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 392,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 400,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Reference",
    "start": 429,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 447,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 459,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "InjectionKey",
    "start": 478,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "visibleIds",
    "start": 493,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "ComputedReference",
    "start": 505,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 523,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 537,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "visibleIds",
    "start": 543,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "inject",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "visibleIds",
    "start": 570,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "visibleIds",
    "start": 591,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  }
]
```

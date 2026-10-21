__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              },
              "start": 21,
              "end": 30
            },
            "start": 18,
            "end": 30
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 39,
                  "end": 48
                },
                "start": 36,
                "end": 48
              },
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "$$typeof",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 54,
                    "end": 79
                  }
                ],
                "start": 52,
                "end": 81
              }
            ],
            "start": 35,
            "end": 81
          }
        ],
        "start": 17,
        "end": 82
      },
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RouteComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 103
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 115
            },
            "typeArguments": null,
            "start": 106,
            "end": 115
          },
          {
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
                  "name": "preload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 127
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 143
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 144,
                              "end": 148
                            }
                          ],
                          "start": 143,
                          "end": 149
                        },
                        "start": 136,
                        "end": 149
                      },
                      "start": 133,
                      "end": 149
                    },
                    "start": 130,
                    "end": 149
                  },
                  "start": 128,
                  "end": 149
                },
                "accessibility": null,
                "static": false,
                "start": 120,
                "end": 149
              }
            ],
            "start": 118,
            "end": 151
          }
        ],
        "start": 106,
        "end": 151
      },
      "declare": false,
      "start": 84,
      "end": 152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createRoute",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 181
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
              "name": "Search",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 188
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 191,
              "end": 193
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 193
          }
        ],
        "start": 181,
        "end": 194
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
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
                    "name": "component",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 215
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RouteComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 232
                      },
                      "typeArguments": null,
                      "start": 218,
                      "end": 232
                    },
                    "start": 216,
                    "end": 232
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 206,
                  "end": 233
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "validateSearch",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 248
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "search",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 260,
                              "end": 267
                            },
                            "start": 258,
                            "end": 267
                          },
                          "start": 252,
                          "end": 267
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Search",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 278
                          },
                          "typeArguments": null,
                          "start": 272,
                          "end": 278
                        },
                        "start": 269,
                        "end": 278
                      },
                      "start": 251,
                      "end": 278
                    },
                    "start": 249,
                    "end": 278
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 234,
                  "end": 278
                }
              ],
              "start": 204,
              "end": 280
            },
            "start": 202,
            "end": 280
          },
          "start": 195,
          "end": 280
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "useSearch",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 294
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Search",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 304
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 304
                },
                "start": 296,
                "end": 304
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 285,
              "end": 304
            }
          ],
          "start": 283,
          "end": 306
        },
        "start": 281,
        "end": 306
      },
      "body": null,
      "expression": false,
      "start": 153,
      "end": 307
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
            "name": "schema",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 337
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "search",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 346,
                            "end": 353
                          },
                          "start": 344,
                          "end": 353
                        },
                        "start": 338,
                        "end": 353
                      }
                    ],
                    "returnType": {
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
                              "name": "page",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 358,
                              "end": 362
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 364,
                                "end": 370
                              },
                              "start": 362,
                              "end": 370
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 358,
                            "end": 370
                          }
                        ],
                        "start": 356,
                        "end": 372
                      },
                      "start": 354,
                      "end": 372
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 332,
                    "end": 372
                  }
                ],
                "start": 330,
                "end": 374
              },
              "start": 328,
              "end": 374
            },
            "start": 322,
            "end": 374
          },
          "init": null,
          "definite": false,
          "start": 322,
          "end": 374
        }
      ],
      "declare": true,
      "start": 308,
      "end": 375
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
            "name": "route",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 387
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createRoute",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 401
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 413
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 421,
                        "end": 422
                      },
                      "id": null,
                      "generator": false,
                      "start": 415,
                      "end": 422
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 404,
                    "end": 422
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "validateSearch",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 438
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "search",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 446
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
                            "name": "schema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 456
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 462
                          },
                          "optional": false,
                          "computed": false,
                          "start": 450,
                          "end": 462
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "search",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 469
                          }
                        ],
                        "optional": false,
                        "start": 450,
                        "end": 470
                      },
                      "id": null,
                      "generator": false,
                      "start": 440,
                      "end": 470
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 424,
                    "end": 470
                  }
                ],
                "start": 402,
                "end": 472
              }
            ],
            "optional": false,
            "start": 390,
            "end": 473
          },
          "definite": false,
          "start": 382,
          "end": 473
        }
      ],
      "declare": false,
      "start": 376,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "route",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 480
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "useSearch",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 490
            },
            "optional": false,
            "computed": false,
            "start": 475,
            "end": 490
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 475,
          "end": 492
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "page",
          "optional": false,
          "typeAnnotation": null,
          "start": 493,
          "end": 497
        },
        "optional": false,
        "computed": false,
        "start": 475,
        "end": 497
      },
      "directive": null,
      "start": 475,
      "end": 498
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 498
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 21,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "$$typeof",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 84,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "RouteComponent",
    "start": 89,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 106,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "preload",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 144,
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
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 153,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "createRoute",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Search",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 193,
    "end": 194
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
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "RouteComponent",
    "start": 218,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "validateSearch",
    "start": 234,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "search",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 260,
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
    "value": "=>",
    "start": 269,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Search",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "useSearch",
    "start": 285,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Search",
    "start": 298,
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
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 308,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "search",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 346,
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
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 364,
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
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 376,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "createRoute",
    "start": 390,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 404,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "validateSearch",
    "start": 424,
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
    "value": "search",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 457,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "search",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "useSearch",
    "start": 481,
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
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "page",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  }
]
```

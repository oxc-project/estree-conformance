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
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "typeArguments": null,
              "start": 26,
              "end": 27
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "typeArguments": null,
                  "start": 32,
                  "end": 33
                },
                "start": 32,
                "end": 35
              },
              "start": 29,
              "end": 35
            }
          ],
          "start": 25,
          "end": 36
        },
        "start": 16,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bindAll",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
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
              "name": "TTarget",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 74
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 94
              },
              "typeArguments": null,
              "start": 83,
              "end": 94
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 94
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 104
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 118
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTarget",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 132
                          },
                          "typeArguments": null,
                          "start": 125,
                          "end": 132
                        },
                        "start": 119,
                        "end": 132
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "on",
                              "cooked": "on"
                            },
                            "tail": false,
                            "start": 135,
                            "end": 140
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 143,
                            "end": 145
                          }
                        ],
                        "types": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 140,
                            "end": 143
                          }
                        ],
                        "start": 135,
                        "end": 145
                      }
                    ],
                    "start": 119,
                    "end": 145
                  }
                ],
                "start": 118,
                "end": 146
              },
              "start": 113,
              "end": 146
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 146
          }
        ],
        "start": 63,
        "end": 148
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 167
              },
              "typeArguments": null,
              "start": 160,
              "end": 167
            },
            "start": 158,
            "end": 167
          },
          "start": 152,
          "end": 167
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bindings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 205
                  },
                  "typeArguments": null,
                  "start": 199,
                  "end": 205
                },
                "start": 193,
                "end": 205
              },
              "nameType": null,
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 220
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTypes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 222,
                          "end": 228
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 230
                          },
                          "typeArguments": null,
                          "start": 229,
                          "end": 230
                        },
                        "start": 222,
                        "end": 231
                      },
                      "start": 220,
                      "end": 231
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 216,
                    "end": 232
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 247
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Parameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 263,
                                    "end": 273
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Extract",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 274,
                                          "end": 281
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSIndexedAccessType",
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TTarget",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 282,
                                                  "end": 289
                                                },
                                                "typeArguments": null,
                                                "start": 282,
                                                "end": 289
                                              },
                                              "indexType": {
                                                "type": "TSIndexedAccessType",
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "TTypes",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 290,
                                                    "end": 296
                                                  },
                                                  "typeArguments": null,
                                                  "start": 290,
                                                  "end": 296
                                                },
                                                "indexType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "K",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 297,
                                                    "end": 298
                                                  },
                                                  "typeArguments": null,
                                                  "start": 297,
                                                  "end": 298
                                                },
                                                "start": 290,
                                                "end": 299
                                              },
                                              "start": 282,
                                              "end": 300
                                            },
                                            {
                                              "type": "TSFunctionType",
                                              "typeParameters": null,
                                              "params": [
                                                {
                                                  "type": "RestElement",
                                                  "decorators": [],
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "args",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 306,
                                                    "end": 310
                                                  },
                                                  "optional": false,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "typeAnnotation": {
                                                      "type": "TSArrayType",
                                                      "elementType": {
                                                        "type": "TSAnyKeyword",
                                                        "start": 312,
                                                        "end": 315
                                                      },
                                                      "start": 312,
                                                      "end": 317
                                                    },
                                                    "start": 310,
                                                    "end": 317
                                                  },
                                                  "value": null,
                                                  "start": 303,
                                                  "end": 317
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "start": 322,
                                                  "end": 325
                                                },
                                                "start": 319,
                                                "end": 325
                                              },
                                              "start": 302,
                                              "end": 325
                                            }
                                          ],
                                          "start": 281,
                                          "end": 326
                                        },
                                        "start": 274,
                                        "end": 326
                                      }
                                    ],
                                    "start": 273,
                                    "end": 327
                                  },
                                  "start": 263,
                                  "end": 327
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 328,
                                    "end": 329
                                  },
                                  "start": 328,
                                  "end": 329
                                },
                                "start": 263,
                                "end": 330
                              },
                              "start": 261,
                              "end": 330
                            },
                            "start": 259,
                            "end": 330
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 342,
                            "end": 346
                          },
                          "start": 339,
                          "end": 346
                        },
                        "start": 249,
                        "end": 346
                      },
                      "start": 247,
                      "end": 346
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 239,
                    "end": 347
                  }
                ],
                "start": 208,
                "end": 353
              },
              "optional": false,
              "readonly": null,
              "start": 181,
              "end": 358
            },
            "start": 179,
            "end": 358
          },
          "start": 171,
          "end": 358
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        },
        "start": 360,
        "end": 366
      },
      "body": null,
      "expression": false,
      "start": 39,
      "end": 367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bindAll",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 376
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 377,
              "end": 379
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLButtonElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 400
              },
              "typeArguments": null,
              "start": 383,
              "end": 400
            },
            "start": 377,
            "end": 400
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 416
                    },
                    "value": {
                      "type": "Literal",
                      "value": "onclick",
                      "raw": "\"onclick\"",
                      "start": 418,
                      "end": 427
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 412,
                    "end": 427
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 441
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 449
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 454,
                        "end": 456
                      },
                      "id": null,
                      "generator": false,
                      "start": 443,
                      "end": 456
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 433,
                    "end": 456
                  }
                ],
                "start": 406,
                "end": 461
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 475
                    },
                    "value": {
                      "type": "Literal",
                      "value": "onkeydown",
                      "raw": "\"onkeydown\"",
                      "start": 477,
                      "end": 488
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 471,
                    "end": 488
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 502
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 505,
                          "end": 510
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 515,
                        "end": 517
                      },
                      "id": null,
                      "generator": false,
                      "start": 504,
                      "end": 517
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 494,
                    "end": 517
                  }
                ],
                "start": 465,
                "end": 522
              }
            ],
            "start": 402,
            "end": 525
          }
        ],
        "optional": false,
        "start": 369,
        "end": 526
      },
      "directive": null,
      "start": 369,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 527
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
    "value": "Tuple",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 16,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 29,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "bindAll",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "TTarget",
    "start": 67,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 75,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "EventTarget",
    "start": 83,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "TTypes",
    "start": 98,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "TTarget",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 133,
    "end": 134
  },
  {
    "type": "Template",
    "value": "`on${",
    "start": 135,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 140,
    "end": 143
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "TTarget",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "bindings",
    "start": 171,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "TTypes",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "TTypes",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 239,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 263,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "TTarget",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "TTypes",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
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
    "value": "any",
    "start": 322,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 339,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "bindAll",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 380,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "HTMLButtonElement",
    "start": 383,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"onclick\"",
    "start": 418,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 433,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "String",
    "value": "\"onkeydown\"",
    "start": 477,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 494,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  }
]
```

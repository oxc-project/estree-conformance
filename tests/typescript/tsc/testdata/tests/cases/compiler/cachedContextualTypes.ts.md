__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 53
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
              "name": "Ctor",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 75,
                    "end": 79
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 81,
                        "end": 84
                      },
                      "start": 81,
                      "end": 86
                    },
                    "start": 79,
                    "end": 86
                  },
                  "value": null,
                  "start": 72,
                  "end": 86
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                },
                "start": 88,
                "end": 94
              },
              "start": 67,
              "end": 94
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 54,
            "end": 94
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InstanceType",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 118
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 119,
                    "end": 123
                  }
                ],
                "start": 118,
                "end": 124
              },
              "start": 106,
              "end": 124
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 124
          }
        ],
        "start": 53,
        "end": 125
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ctor",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "typeArguments": null,
              "start": 132,
              "end": 136
            },
            "start": 130,
            "end": 136
          },
          "start": 126,
          "end": 136
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 145
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConstructorParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 168
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 173
                    },
                    "typeArguments": null,
                    "start": 169,
                    "end": 173
                  }
                ],
                "start": 168,
                "end": 174
              },
              "start": 147,
              "end": 174
            },
            "start": 145,
            "end": 174
          },
          "value": null,
          "start": 138,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
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
      "body": null,
      "expression": false,
      "start": 22,
      "end": 179
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IMenuWorkbenchToolBarOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 226
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
                "name": "toolbarOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 247
              },
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 262
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 268,
                              "end": 274
                            },
                            "start": 266,
                            "end": 274
                          },
                          "start": 263,
                          "end": 274
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 277,
                          "end": 283
                        },
                        "start": 275,
                        "end": 283
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 259,
                      "end": 283
                    }
                  ],
                  "start": 249,
                  "end": 289
                },
                "start": 247,
                "end": 289
              },
              "accessibility": null,
              "static": false,
              "start": 233,
              "end": 290
            }
          ],
          "start": 227,
          "end": 292
        },
        "declare": false,
        "start": 188,
        "end": 292
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 181,
      "end": 292
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MenuWorkbenchToolBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 320
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 338
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
                  "name": "options",
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
                            "name": "IMenuWorkbenchToolBarOptions",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 385
                          },
                          "typeArguments": null,
                          "start": 357,
                          "end": 385
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 388,
                          "end": 397
                        }
                      ],
                      "start": 357,
                      "end": 397
                    },
                    "start": 355,
                    "end": 397
                  },
                  "start": 348,
                  "end": 397
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 405,
                "end": 408
              },
              "expression": false,
              "start": 338,
              "end": 408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 408
          }
        ],
        "start": 321,
        "end": 410
      },
      "abstract": false,
      "declare": false,
      "start": 294,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 426
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MenuWorkbenchToolBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 447
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
                  "name": "toolbarOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 455,
                  "end": 469
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 484
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
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 485,
                            "end": 488
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 499,
                                "end": 502
                              },
                              "start": 492,
                              "end": 503
                            }
                          ],
                          "start": 490,
                          "end": 505
                        },
                        "expression": false,
                        "start": 484,
                        "end": 505
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 481,
                      "end": 505
                    }
                  ],
                  "start": 471,
                  "end": 511
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 455,
                "end": 511
              }
            ],
            "start": 449,
            "end": 513
          }
        ],
        "optional": false,
        "start": 412,
        "end": 514
      },
      "directive": null,
      "start": 412,
      "end": 515
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 515
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 39,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 54,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 59,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
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
    "value": "R",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 98,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 106,
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
    "value": "Ctor",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
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
    "value": "ctor",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 147,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
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
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 181,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "IMenuWorkbenchToolBarOptions",
    "start": 198,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "toolbarOptions",
    "start": 233,
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
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "MenuWorkbenchToolBar",
    "start": 300,
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
    "value": "constructor",
    "start": 327,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 348,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "IMenuWorkbenchToolBarOptions",
    "start": 357,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 388,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 412,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "MenuWorkbenchToolBar",
    "start": 427,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "toolbarOptions",
    "start": 455,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 492,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
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
  }
]
```

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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
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
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
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
                  "start": 26,
                  "end": 27
                },
                "typeArguments": null,
                "start": 26,
                "end": 27
              },
              "start": 24,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 28
          }
        ],
        "start": 17,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 53
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 76,
                  "end": 80
                },
                "start": 76,
                "end": 80
              },
              "start": 74,
              "end": 80
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 80
          }
        ],
        "start": 54,
        "end": 82
      },
      "declare": false,
      "start": 32,
      "end": 82
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoaderProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 110
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 118
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 127,
              "end": 129
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 129
          }
        ],
        "start": 110,
        "end": 130
      },
      "extends": [],
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
              "name": "asyncLoad",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 155
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
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 166
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 167,
                            "end": 174
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 174
                        }
                      ],
                      "start": 166,
                      "end": 175
                    },
                    "start": 163,
                    "end": 175
                  },
                  "start": 160,
                  "end": 175
                },
                "start": 157,
                "end": 175
              },
              "start": 155,
              "end": 175
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 198
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
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 216
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 217,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 217,
                              "end": 224
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ErrorResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 237
                              },
                              "typeArguments": null,
                              "start": 226,
                              "end": 237
                            }
                          ],
                          "start": 216,
                          "end": 238
                        },
                        "start": 209,
                        "end": 238
                      },
                      "start": 207,
                      "end": 238
                    },
                    "start": 201,
                    "end": 238
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  },
                  "start": 240,
                  "end": 249
                },
                "start": 200,
                "end": 249
              },
              "start": 198,
              "end": 249
            },
            "accessibility": null,
            "static": false,
            "start": 181,
            "end": 250
          }
        ],
        "start": 131,
        "end": 252
      },
      "declare": false,
      "start": 84,
      "end": 252
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoader",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 271
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 279
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 288,
              "end": 290
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 272,
            "end": 290
          }
        ],
        "start": 271,
        "end": 291
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
              "start": 298,
              "end": 309
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "start": 310,
                  "end": 323
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 334,
                      "end": 337
                    },
                    "start": 332,
                    "end": 337
                  },
                  "start": 325,
                  "end": 337
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 309,
              "end": 339
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 339
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
              "start": 344,
              "end": 355
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsyncLoaderProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 379
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 380,
                              "end": 387
                            },
                            "typeArguments": null,
                            "start": 380,
                            "end": 387
                          }
                        ],
                        "start": 379,
                        "end": 388
                      },
                      "start": 363,
                      "end": 388
                    },
                    "start": 361,
                    "end": 388
                  },
                  "start": 356,
                  "end": 388
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 355,
              "end": 390
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 390
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
              "start": 395,
              "end": 406
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 414
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 416,
                        "end": 419
                      },
                      "start": 416,
                      "end": 421
                    },
                    "start": 414,
                    "end": 421
                  },
                  "value": null,
                  "start": 407,
                  "end": 421
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 423,
                "end": 425
              },
              "expression": false,
              "start": 406,
              "end": 425
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 395,
            "end": 425
          }
        ],
        "start": 292,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 442
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 449
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
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
                          "name": "success",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 459
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 461,
                              "end": 465
                            },
                            "start": 461,
                            "end": 465
                          },
                          "start": 459,
                          "end": 465
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 452,
                        "end": 465
                      }
                    ],
                    "start": 450,
                    "end": 467
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 470,
                    "end": 481
                  }
                ],
                "start": 450,
                "end": 481
              }
            ],
            "start": 449,
            "end": 482
          },
          "start": 446,
          "end": 482
        },
        "start": 444,
        "end": 482
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
                "start": 496,
                "end": 500
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 504,
                "end": 507
              },
              "start": 496,
              "end": 507
            },
            "start": 489,
            "end": 508
          }
        ],
        "start": 483,
        "end": 510
      },
      "expression": false,
      "start": 429,
      "end": 510
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AsyncLoader",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 527
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
                  "name": "asyncLoad",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 543
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "load",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 545,
                  "end": 549
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 534,
                "end": 549
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 563
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
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 571
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "success",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 589
                      },
                      "optional": false,
                      "computed": false,
                      "start": 575,
                      "end": 589
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 593,
                      "end": 596
                    },
                    "start": 575,
                    "end": 596
                  },
                  "id": null,
                  "generator": false,
                  "start": 565,
                  "end": 596
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 555,
                "end": 596
              }
            ],
            "start": 528,
            "end": 599
          }
        ],
        "start": 512,
        "end": 600
      },
      "directive": null,
      "start": 512,
      "end": 601
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 621
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
    "value": "Box",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "ErrorResult",
    "start": 42,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "AsyncLoaderProps",
    "start": 94,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 111,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 137,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "asyncLoad",
    "start": 146,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
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
    "value": "=>",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 181,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 190,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "ErrorResult",
    "start": 226,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 240,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "class",
    "start": 254,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "AsyncLoader",
    "start": 260,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 272,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 298,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 344,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "AsyncLoaderProps",
    "start": 363,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 395,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 452,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "ErrorResult",
    "start": 470,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 489,
    "end": 495
  },
  {
    "type": "Null",
    "value": "null",
    "start": 496,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "AsyncLoader",
    "start": 516,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "asyncLoad",
    "start": 534,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 555,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 572,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 582,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 590,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  }
]
```

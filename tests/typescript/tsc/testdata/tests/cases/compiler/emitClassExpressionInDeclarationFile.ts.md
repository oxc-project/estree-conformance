__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "simpleExample",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 24
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
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 53
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
                        "start": 56,
                        "end": 59
                      },
                      "expression": false,
                      "start": 53,
                      "end": 59
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 39,
                    "end": 59
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 68
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
                        "start": 71,
                        "end": 74
                      },
                      "expression": false,
                      "start": 68,
                      "end": 74
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 64,
                    "end": 74
                  }
                ],
                "start": 33,
                "end": 76
              },
              "abstract": false,
              "declare": false,
              "start": 27,
              "end": 76
            },
            "definite": false,
            "start": 11,
            "end": 76
          }
        ],
        "declare": false,
        "start": 7,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "circularReference",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 105
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
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
                      "name": "getTags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 136
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
                          "name": "c",
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
                                "start": 140,
                                "end": 141
                              },
                              "typeArguments": null,
                              "start": 140,
                              "end": 141
                            },
                            "start": 138,
                            "end": 141
                          },
                          "start": 137,
                          "end": 141
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 145
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 145
                        },
                        "start": 142,
                        "end": 145
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 155,
                              "end": 156
                            },
                            "start": 148,
                            "end": 156
                          }
                        ],
                        "start": 146,
                        "end": 158
                      },
                      "expression": false,
                      "start": 136,
                      "end": 158
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 122,
                    "end": 158
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tags",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 167
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
                          "name": "c",
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
                                "start": 171,
                                "end": 172
                              },
                              "typeArguments": null,
                              "start": 171,
                              "end": 172
                            },
                            "start": 169,
                            "end": 172
                          },
                          "start": 168,
                          "end": 172
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 175,
                            "end": 176
                          },
                          "typeArguments": null,
                          "start": 175,
                          "end": 176
                        },
                        "start": 173,
                        "end": 176
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "start": 179,
                            "end": 187
                          }
                        ],
                        "start": 177,
                        "end": 189
                      },
                      "expression": false,
                      "start": 167,
                      "end": 189
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 163,
                    "end": 189
                  }
                ],
                "start": 116,
                "end": 191
              },
              "abstract": false,
              "declare": false,
              "start": 108,
              "end": 191
            },
            "definite": false,
            "start": 88,
            "end": 191
          }
        ],
        "declare": false,
        "start": 84,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooItem",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 234
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 244
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 248,
                    "end": 252
                  },
                  "start": 246,
                  "end": 252
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 253,
                  "end": 256
                },
                "expression": false,
                "start": 244,
                "end": 256
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 241,
              "end": 256
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 265
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 261,
              "end": 275
            }
          ],
          "start": 235,
          "end": 277
        },
        "abstract": false,
        "declare": false,
        "start": 221,
        "end": 277
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 214,
      "end": 277
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 302
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
                "start": 303,
                "end": 304
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 303,
              "end": 304
            }
          ],
          "start": 302,
          "end": 305
        },
        "typeAnnotation": {
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
                "start": 315,
                "end": 319
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 321,
                    "end": 324
                  },
                  "start": 321,
                  "end": 326
                },
                "start": 319,
                "end": 326
              },
              "value": null,
              "start": 312,
              "end": 326
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "typeArguments": null,
              "start": 331,
              "end": 332
            },
            "start": 328,
            "end": 332
          },
          "start": 308,
          "end": 332
        },
        "declare": false,
        "start": 286,
        "end": 333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 279,
      "end": 333
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithTags",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 358
        },
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
                "start": 359,
                "end": 360
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 380
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 388
                      },
                      "typeArguments": null,
                      "start": 381,
                      "end": 388
                    }
                  ],
                  "start": 380,
                  "end": 389
                },
                "start": 369,
                "end": 389
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 359,
              "end": 389
            }
          ],
          "start": 358,
          "end": 390
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
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
                  "start": 397,
                  "end": 398
                },
                "typeArguments": null,
                "start": 397,
                "end": 398
              },
              "start": 395,
              "end": 398
            },
            "start": 391,
            "end": 398
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 431
                },
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
                        "name": "getTags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 456
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 460,
                            "end": 464
                          },
                          "start": 458,
                          "end": 464
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 465,
                          "end": 468
                        },
                        "expression": false,
                        "start": 456,
                        "end": 468
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 442,
                      "end": 468
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 481
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 485,
                            "end": 489
                          },
                          "start": 483,
                          "end": 489
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 490,
                          "end": 493
                        },
                        "expression": false,
                        "start": 481,
                        "end": 493
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 477,
                      "end": 493
                    }
                  ],
                  "start": 432,
                  "end": 499
                },
                "abstract": false,
                "declare": false,
                "start": 413,
                "end": 499
              },
              "start": 406,
              "end": 499
            }
          ],
          "start": 400,
          "end": 501
        },
        "expression": false,
        "start": 341,
        "end": 501
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 334,
      "end": 501
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 520
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithTags",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 537
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "FooItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 545
            }
          ],
          "optional": false,
          "start": 529,
          "end": 546
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 547,
          "end": 549
        },
        "abstract": false,
        "declare": false,
        "start": 510,
        "end": 549
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 503,
      "end": 549
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 561
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 572
            },
            "typeArguments": null,
            "arguments": [],
            "start": 564,
            "end": 574
          },
          "definite": false,
          "start": 557,
          "end": 574
        }
      ],
      "declare": false,
      "start": 551,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 581
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getTags",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 589
          },
          "optional": false,
          "computed": false,
          "start": 577,
          "end": 589
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 577,
        "end": 591
      },
      "directive": null,
      "start": 577,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 596
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tags",
            "optional": false,
            "typeAnnotation": null,
            "start": 597,
            "end": 601
          },
          "optional": false,
          "computed": false,
          "start": 592,
          "end": 601
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 592,
        "end": 603
      },
      "directive": null,
      "start": 592,
      "end": 604
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 604
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "simpleExample",
    "start": 11,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "getTags",
    "start": 46,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "circularReference",
    "start": 88,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "getTags",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
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
    "value": "C",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 214,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "FooItem",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 265,
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
    "value": ";",
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
    "type": "Keyword",
    "value": "export",
    "start": 279,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 286,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 291,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 334,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 341,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "WithTags",
    "start": 350,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 361,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 369,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "FooItem",
    "start": 381,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 406,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 413,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 419,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 442,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "getTags",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "tags",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 503,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 510,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 516,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 521,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "WithTags",
    "start": 529,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "FooItem",
    "start": 538,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 551,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 577,
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
    "value": "getTags",
    "start": 582,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "tags",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  }
]
```

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
        "name": "Readonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "typeArguments": null,
            "start": 41,
            "end": 42
          },
          "start": 35,
          "end": 42
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "typeArguments": null,
            "start": 45,
            "end": 46
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "typeArguments": null,
            "start": 47,
            "end": 48
          },
          "start": 45,
          "end": 49
        },
        "optional": false,
        "readonly": true,
        "start": 19,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 75
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 84
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      },
                      "start": 84,
                      "end": 92
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 80,
                    "end": 93
                  }
                ],
                "start": 78,
                "end": 95
              },
              "start": 76,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 96
          }
        ],
        "start": 63,
        "end": 98
      },
      "declare": false,
      "start": 51,
      "end": 98
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "typeArguments": null,
              "start": 121,
              "end": 122
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 122
          }
        ],
        "start": 110,
        "end": 123
      },
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
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 147
                      },
                      "typeArguments": null,
                      "start": 146,
                      "end": 147
                    }
                  ],
                  "start": 145,
                  "end": 148
                },
                "start": 137,
                "end": 148
              },
              "start": 135,
              "end": 148
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 149
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 169,
                              "end": 173
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "attrs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 174,
                              "end": 179
                            },
                            "optional": false,
                            "computed": false,
                            "start": 169,
                            "end": 179
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 186
                          },
                          "optional": false,
                          "computed": false,
                          "start": 169,
                          "end": 186
                        },
                        "start": 169,
                        "end": 187
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 192
                      },
                      "optional": false,
                      "computed": false,
                      "start": 169,
                      "end": 192
                    },
                    "directive": null,
                    "start": 169,
                    "end": 193
                  }
                ],
                "start": 159,
                "end": 199
              },
              "expression": false,
              "start": 156,
              "end": 199
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 199
          }
        ],
        "start": 124,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 201
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 216
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 226
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 223,
            "end": 236
          }
        ],
        "start": 217,
        "end": 238
      },
      "declare": false,
      "start": 203,
      "end": 238
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 254
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 268
              },
              "typeArguments": null,
              "start": 265,
              "end": 268
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 274
              },
              "typeArguments": null,
              "start": 271,
              "end": 274
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 274
          }
        ],
        "start": 254,
        "end": 275
      },
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
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 302
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 303,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 303,
                      "end": 304
                    }
                  ],
                  "start": 302,
                  "end": 305
                },
                "start": 294,
                "end": 305
              },
              "start": 292,
              "end": 305
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 282,
            "end": 306
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 315
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
                  "type": "TSNumberKeyword",
                  "start": 319,
                  "end": 325
                },
                "start": 317,
                "end": 325
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
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
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 347
                              },
                              "value": {
                                "type": "AssignmentPattern",
                                "decorators": [],
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 344,
                                  "end": 347
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42",
                                  "start": 350,
                                  "end": 352
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 352
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 344,
                              "end": 352
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 342,
                          "end": 354
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 357,
                            "end": 361
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 362,
                            "end": 372
                          },
                          "optional": false,
                          "computed": false,
                          "start": 357,
                          "end": 372
                        },
                        "definite": false,
                        "start": 342,
                        "end": 372
                      }
                    ],
                    "declare": false,
                    "start": 336,
                    "end": 373
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 392
                    },
                    "start": 382,
                    "end": 393
                  }
                ],
                "start": 326,
                "end": 399
              },
              "expression": false,
              "start": 315,
              "end": 399
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 312,
            "end": 399
          }
        ],
        "start": 276,
        "end": 401
      },
      "abstract": false,
      "declare": false,
      "start": 240,
      "end": 401
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 414
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
              "start": 415,
              "end": 416
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 426
              },
              "typeArguments": null,
              "start": 425,
              "end": 426
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 415,
            "end": 426
          }
        ],
        "start": 414,
        "end": 427
      },
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
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 439
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 449
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
                        "start": 450,
                        "end": 451
                      },
                      "typeArguments": null,
                      "start": 450,
                      "end": 451
                    }
                  ],
                  "start": 449,
                  "end": 452
                },
                "start": 441,
                "end": 452
              },
              "start": 439,
              "end": 452
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 434,
            "end": 453
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 480,
                            "end": 484
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "attrs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 485,
                            "end": 490
                          },
                          "optional": false,
                          "computed": false,
                          "start": 480,
                          "end": 490
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 491,
                          "end": 497
                        },
                        "optional": false,
                        "computed": false,
                        "start": 480,
                        "end": 497
                      },
                      "start": 480,
                      "end": 498
                    },
                    "start": 473,
                    "end": 499
                  }
                ],
                "start": 463,
                "end": 597
              },
              "expression": false,
              "start": 460,
              "end": 597
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 459,
            "end": 597
          }
        ],
        "start": 428,
        "end": 599
      },
      "abstract": false,
      "declare": false,
      "start": 403,
      "end": 599
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 599
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
    "value": "Readonly",
    "start": 5,
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
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 20,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 32,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
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
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 106,
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
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 137,
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
    "value": "T",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 188,
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
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 203,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 240,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "FooClass",
    "start": 246,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 257,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "properties",
    "start": 282,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 294,
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
    "value": "P",
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
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 362,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 382,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 409,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 417,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 441,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 473,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  }
]
```

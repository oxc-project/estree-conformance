__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
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
              "name": "TEntityClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 25
          }
        ],
        "start": 12,
        "end": 26
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
              "start": 34,
              "end": 45
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
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entity",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEntityClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 75
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 75
                      },
                      "start": 61,
                      "end": 75
                    },
                    "start": 54,
                    "end": 75
                  },
                  "readonly": false,
                  "static": false,
                  "start": 46,
                  "end": 75
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "settings",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SettingsInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 112
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEntityClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 113,
                                "end": 125
                              },
                              "typeArguments": null,
                              "start": 113,
                              "end": 125
                            }
                          ],
                          "start": 112,
                          "end": 126
                        },
                        "start": 95,
                        "end": 126
                      },
                      "start": 93,
                      "end": 126
                    },
                    "start": 84,
                    "end": 126
                  },
                  "readonly": false,
                  "static": false,
                  "start": 77,
                  "end": 126
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 128,
                "end": 136
              },
              "expression": false,
              "start": 45,
              "end": 136
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 136
          }
        ],
        "start": 28,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 170
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValueClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 182
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 171,
              "end": 182
            }
          ],
          "start": 170,
          "end": 183
        },
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
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
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
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValueClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 203,
                            "end": 214
                          },
                          "typeArguments": null,
                          "start": 203,
                          "end": 214
                        },
                        "start": 201,
                        "end": 214
                      },
                      "start": 198,
                      "end": 214
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 219,
                      "end": 222
                    },
                    "start": 216,
                    "end": 222
                  },
                  "start": 197,
                  "end": 222
                },
                "start": 195,
                "end": 222
              },
              "accessibility": null,
              "static": false,
              "start": 190,
              "end": 223
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 233
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 236,
                  "end": 242
                },
                "start": 234,
                "end": 242
              },
              "accessibility": null,
              "static": false,
              "start": 228,
              "end": 243
            }
          ],
          "start": 184,
          "end": 245
        },
        "declare": false,
        "start": 146,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 139,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SettingsInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 280
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 287
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 281,
              "end": 287
            }
          ],
          "start": 280,
          "end": 288
        },
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
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 301
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
                      "name": "row",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 310,
                            "end": 316
                          },
                          "typeArguments": null,
                          "start": 310,
                          "end": 316
                        },
                        "start": 308,
                        "end": 316
                      },
                      "start": 305,
                      "end": 316
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ValueInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 335
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 336,
                                "end": 342
                              },
                              "typeArguments": null,
                              "start": 336,
                              "end": 342
                            }
                          ],
                          "start": 335,
                          "end": 343
                        },
                        "start": 321,
                        "end": 343
                      },
                      "start": 321,
                      "end": 345
                    },
                    "start": 318,
                    "end": 345
                  },
                  "start": 304,
                  "end": 345
                },
                "start": 302,
                "end": 345
              },
              "accessibility": null,
              "static": false,
              "start": 295,
              "end": 346
            }
          ],
          "start": 289,
          "end": 348
        },
        "declare": false,
        "start": 253,
        "end": 348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 246,
      "end": 348
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 368
      },
      "typeParameters": null,
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
              "name": "theName",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 382
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "myClass",
              "raw": "'myClass'",
              "start": 385,
              "end": 394
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 375,
            "end": 395
          }
        ],
        "start": 369,
        "end": 397
      },
      "abstract": false,
      "declare": false,
      "start": 349,
      "end": 397
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
            "name": "thisGetsTheFalseError",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 424
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 437
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 455
                },
                "typeArguments": null,
                "arguments": [],
                "start": 438,
                "end": 457
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
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 471
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
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 474
                        }
                      ],
                      "returnType": null,
                      "body": {
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 502,
                                  "end": 507
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 509,
                                    "end": 510
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 511,
                                    "end": 518
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 509,
                                  "end": 518
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 502,
                                "end": 518
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 532,
                                  "end": 536
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 538,
                                      "end": 539
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "start": 543,
                                    "end": 591
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 538,
                                  "end": 591
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 532,
                                "end": 591
                              }
                            ],
                            "start": 488,
                            "end": 601
                          }
                        ],
                        "start": 478,
                        "end": 607
                      },
                      "id": null,
                      "generator": false,
                      "start": 473,
                      "end": 607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 465,
                    "end": 607
                  }
                ],
                "start": 459,
                "end": 609
              }
            ],
            "start": 427,
            "end": 610
          },
          "definite": false,
          "start": 403,
          "end": 610
        }
      ],
      "declare": false,
      "start": 399,
      "end": 611
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
            "name": "thisIsOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 625
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassA",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 638
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConcreteClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 652
                  },
                  "typeArguments": null,
                  "start": 639,
                  "end": 652
                }
              ],
              "start": 638,
              "end": 653
            },
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcreteClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 671
                },
                "typeArguments": null,
                "arguments": [],
                "start": 654,
                "end": 673
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
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 687
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
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 689,
                          "end": 690
                        }
                      ],
                      "returnType": null,
                      "body": {
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 718,
                                  "end": 723
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 725,
                                    "end": 726
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "theName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 727,
                                    "end": 734
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 725,
                                  "end": 734
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 718,
                                "end": 734
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 748,
                                  "end": 752
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 754,
                                      "end": 755
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj",
                                    "raw": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
                                    "start": 759,
                                    "end": 807
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 754,
                                  "end": 807
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 748,
                                "end": 807
                              }
                            ],
                            "start": 704,
                            "end": 817
                          }
                        ],
                        "start": 694,
                        "end": 823
                      },
                      "id": null,
                      "generator": false,
                      "start": 689,
                      "end": 823
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 681,
                    "end": 823
                  }
                ],
                "start": 675,
                "end": 825
              }
            ],
            "start": 628,
            "end": 826
          },
          "definite": false,
          "start": 617,
          "end": 826
        }
      ],
      "declare": false,
      "start": 613,
      "end": 827
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 827
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 6,
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
    "value": "TEntityClass",
    "start": 13,
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
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 34,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "entity",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "TEntityClass",
    "start": 63,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "SettingsInterface",
    "start": 95,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "TEntityClass",
    "start": 113,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 146,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "ValueInterface",
    "start": 156,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "TValueClass",
    "start": 171,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "TValueClass",
    "start": 203,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 216,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 246,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 253,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "SettingsInterface",
    "start": 263,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "TClass",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "TClass",
    "start": 310,
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
    "value": "=>",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "ValueInterface",
    "start": 321,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "TClass",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "ConcreteClass",
    "start": 355,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "theName",
    "start": 375,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "String",
    "value": "'myClass'",
    "start": 385,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "thisGetsTheFalseError",
    "start": 403,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "ConcreteClass",
    "start": 442,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "theName",
    "start": 511,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 540,
    "end": 542
  },
  {
    "type": "String",
    "value": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
    "start": 543,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "thisIsOk",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "ClassA",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "ConcreteClass",
    "start": 639,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "ConcreteClass",
    "start": 658,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "theName",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 756,
    "end": 758
  },
  {
    "type": "String",
    "value": "'asdfkjhgfdfghjkjhgfdfghjklkjhgfdfghjklkjhgfghj'",
    "start": 759,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  }
]
```

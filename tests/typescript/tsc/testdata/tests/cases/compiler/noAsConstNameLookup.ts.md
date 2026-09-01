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
        "name": "Store",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 33
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 41,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 38,
            "end": 44
          }
        ],
        "start": 36,
        "end": 46
      },
      "declare": false,
      "start": 23,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cleaner",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 66
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Store",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeArguments": null,
                  "start": 80,
                  "end": 85
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 70,
                "end": 85
              }
            ],
            "start": 69,
            "end": 86
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "runner",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FeatureRunner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 108
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 109,
                        "end": 110
                      }
                    ],
                    "start": 108,
                    "end": 111
                  },
                  "start": 95,
                  "end": 111
                },
                "start": 93,
                "end": 111
              },
              "start": 87,
              "end": 111
            }
          ],
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
                "start": 116,
                "end": 123
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  }
                ],
                "start": 123,
                "end": 128
              },
              "start": 116,
              "end": 128
            },
            "start": 113,
            "end": 128
          },
          "start": 69,
          "end": 128
        },
        "declare": false,
        "start": 54,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 128
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FeatureRunner",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 156
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 172
                },
                "typeArguments": null,
                "start": 167,
                "end": 172
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 157,
              "end": 172
            }
          ],
          "start": 156,
          "end": 173
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
                "name": "cleaners",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 205
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cleaner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 214
                  },
                  "start": 207,
                  "end": 216
                },
                "start": 205,
                "end": 216
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 219,
                "end": 221
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "private",
              "start": 180,
              "end": 221
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "runFeature",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 243
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
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
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 254
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 255,
                          "end": 258
                        }
                      ],
                      "start": 254,
                      "end": 259
                    },
                    "start": 247,
                    "end": 259
                  },
                  "start": 245,
                  "end": 259
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "objectWhichShouldBeConst",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 276,
                            "end": 300
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 317,
                                    "end": 322
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 324,
                                    "end": 326
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 317,
                                  "end": 326
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "settings",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 340,
                                    "end": 348
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 350,
                                    "end": 352
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 340,
                                  "end": 352
                                }
                              ],
                              "start": 303,
                              "end": 363
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 367,
                                "end": 372
                              },
                              "typeArguments": null,
                              "start": 367,
                              "end": 372
                            },
                            "start": 303,
                            "end": 372
                          },
                          "definite": false,
                          "start": 276,
                          "end": 372
                        }
                      ],
                      "declare": false,
                      "start": 270,
                      "end": 373
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objectWhichShouldBeConst",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 413
                      },
                      "start": 382,
                      "end": 413
                    }
                  ],
                  "start": 260,
                  "end": 419
                },
                "expression": false,
                "start": 243,
                "end": 419
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 227,
              "end": 419
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 434
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
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
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 438,
                      "end": 445
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 446,
                          "end": 449
                        }
                      ],
                      "start": 445,
                      "end": 450
                    },
                    "start": 438,
                    "end": 450
                  },
                  "start": 436,
                  "end": 450
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 467,
                            "end": 473
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 476,
                            "end": 478
                          },
                          "definite": false,
                          "start": 467,
                          "end": 478
                        }
                      ],
                      "declare": false,
                      "start": 461,
                      "end": 478
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 487,
                              "end": 491
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cleaners",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 492,
                              "end": 500
                            },
                            "optional": false,
                            "computed": false,
                            "start": 487,
                            "end": 500
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "forEach",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 508
                          },
                          "optional": false,
                          "computed": false,
                          "start": 487,
                          "end": 508
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
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 509,
                                "end": 510
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 514,
                                "end": 515
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 516,
                                  "end": 520
                                }
                              ],
                              "optional": false,
                              "start": 514,
                              "end": 521
                            },
                            "id": null,
                            "generator": false,
                            "start": 509,
                            "end": 521
                          }
                        ],
                        "optional": false,
                        "start": 487,
                        "end": 522
                      },
                      "directive": null,
                      "start": 487,
                      "end": 522
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 544
                      },
                      "start": 531,
                      "end": 544
                    }
                  ],
                  "start": 451,
                  "end": 550
                },
                "expression": false,
                "start": 434,
                "end": 550
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 425,
              "end": 550
            }
          ],
          "start": 174,
          "end": 552
        },
        "abstract": false,
        "declare": false,
        "start": 137,
        "end": 552
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 130,
      "end": 552
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 567,
          "end": 568
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
                "start": 569,
                "end": 570
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 569,
              "end": 570
            }
          ],
          "start": 568,
          "end": 571
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
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 579
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
                    "start": 583,
                    "end": 587
                  },
                  "start": 581,
                  "end": 587
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 602,
                            "end": 605
                          },
                          "init": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 608,
                              "end": 609
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 613,
                                "end": 618
                              },
                              "typeArguments": null,
                              "start": 613,
                              "end": 618
                            },
                            "start": 608,
                            "end": 618
                          },
                          "definite": false,
                          "start": 602,
                          "end": 618
                        }
                      ],
                      "declare": false,
                      "start": 598,
                      "end": 619
                    }
                  ],
                  "start": 588,
                  "end": 625
                },
                "expression": false,
                "start": 579,
                "end": 625
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 578,
              "end": 625
            }
          ],
          "start": 572,
          "end": 627
        },
        "abstract": false,
        "declare": false,
        "start": 561,
        "end": 627
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 554,
      "end": 627
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 633
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 634,
                  "end": 640
                }
              ],
              "start": 633,
              "end": 641
            },
            "arguments": [],
            "start": 628,
            "end": 643
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 628,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 628,
        "end": 647
      },
      "directive": null,
      "start": 628,
      "end": 648
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 23,
  "end": 648
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Cleaner",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "runner",
    "start": 87,
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
    "value": "FeatureRunner",
    "start": 95,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 130,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "FeatureRunner",
    "start": 143,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 159,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 180,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 188,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "cleaners",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Cleaner",
    "start": 207,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "runFeature",
    "start": 233,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 247,
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
    "value": "any",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 270,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "objectWhichShouldBeConst",
    "start": 276,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 340,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 364,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 367,
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
    "value": "objectWhichShouldBeConst",
    "start": 389,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 438,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 461,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "cleaners",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 501,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 511,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 531,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 554,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 561,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 583,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 610,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "C",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  }
]
```

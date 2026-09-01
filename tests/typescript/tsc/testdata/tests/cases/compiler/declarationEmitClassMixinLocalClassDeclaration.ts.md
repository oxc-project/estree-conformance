__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnyFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 30
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 36
            }
          ],
          "start": 23,
          "end": 37
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 49
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 51,
                    "end": 54
                  },
                  "start": 51,
                  "end": 56
                },
                "start": 49,
                "end": 56
              },
              "value": null,
              "start": 41,
              "end": 56
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "typeArguments": null,
              "start": 61,
              "end": 67
            },
            "start": 58,
            "end": 67
          },
          "start": 40,
          "end": 67
        },
        "declare": false,
        "start": 7,
        "end": 67
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 67
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnyConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 95
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 104
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 113,
                "end": 119
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 122,
                "end": 128
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 96,
              "end": 128
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 136
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 145,
                "end": 151
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 154,
                "end": 160
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 130,
              "end": 160
            }
          ],
          "start": 95,
          "end": 161
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
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
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 182
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 184,
                        "end": 187
                      },
                      "start": 184,
                      "end": 189
                    },
                    "start": 182,
                    "end": 189
                  },
                  "value": null,
                  "start": 174,
                  "end": 189
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 202
                  },
                  "typeArguments": null,
                  "start": 194,
                  "end": 202
                },
                "start": 191,
                "end": 202
              },
              "start": 169,
              "end": 202
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 212
              },
              "typeArguments": null,
              "start": 206,
              "end": 212
            }
          ],
          "start": 168,
          "end": 212
        },
        "declare": false,
        "start": 76,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 69,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixinHelperFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 235
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 263
                },
                "typeArguments": null,
                "start": 249,
                "end": 263
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 239,
              "end": 263
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 266
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 265,
              "end": 266
            }
          ],
          "start": 238,
          "end": 267
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "required",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 280
                    },
                    "typeArguments": null,
                    "start": 279,
                    "end": 280
                  }
                ],
                "start": 278,
                "end": 281
              },
              "start": 276,
              "end": 281
            },
            "start": 268,
            "end": 281
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
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
                  "start": 288,
                  "end": 289
                },
                "typeArguments": null,
                "start": 288,
                "end": 289
              },
              "start": 286,
              "end": 289
            },
            "start": 283,
            "end": 289
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "typeArguments": null,
              "start": 294,
              "end": 295
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 315
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 323
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 322,
                      "end": 323
                    },
                    "start": 316,
                    "end": 323
                  }
                ],
                "start": 315,
                "end": 324
              },
              "start": 304,
              "end": 324
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 328
              },
              "typeArguments": null,
              "start": 327,
              "end": 328
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 331,
              "end": 336
            },
            "start": 294,
            "end": 336
          },
          "start": 291,
          "end": 336
        },
        "start": 238,
        "end": 336
      },
      "declare": false,
      "start": 215,
      "end": 336
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MixinHelperFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 374
                  },
                  "typeArguments": null,
                  "start": 359,
                  "end": 374
                },
                "start": 357,
                "end": 374
              },
              "start": 352,
              "end": 374
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 377,
                "end": 381
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 385,
                "end": 388
              },
              "start": 377,
              "end": 388
            },
            "definite": false,
            "start": 352,
            "end": 388
          }
        ],
        "declare": false,
        "start": 346,
        "end": 388
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 388
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 408
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 409,
          "end": 411
        },
        "abstract": false,
        "declare": false,
        "start": 398,
        "end": 411
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 391,
      "end": 411
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "XmlElement2",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 438
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 452
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 463
                }
              ],
              "start": 458,
              "end": 464
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AnyConstructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 491
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 492,
                              "end": 496
                            },
                            "typeArguments": null,
                            "start": 492,
                            "end": 496
                          },
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 505,
                              "end": 509
                            },
                            "typeArguments": null,
                            "start": 498,
                            "end": 509
                          }
                        ],
                        "start": 491,
                        "end": 510
                      },
                      "start": 477,
                      "end": 510
                    },
                    "start": 475,
                    "end": 510
                  },
                  "start": 471,
                  "end": 510
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XmlElement2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 542
                    },
                    "typeParameters": null,
                    "superClass": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 555
                    },
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
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 570,
                            "end": 573
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 575,
                              "end": 581
                            },
                            "start": 573,
                            "end": 581
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 584,
                            "end": 585
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 570,
                          "end": 585
                        }
                      ],
                      "start": 556,
                      "end": 595
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 525,
                    "end": 595
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XmlElement2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 622
                    },
                    "start": 604,
                    "end": 623
                  }
                ],
                "start": 515,
                "end": 629
              },
              "id": null,
              "generator": false,
              "start": 470,
              "end": 629
            }
          ],
          "optional": false,
          "start": 447,
          "end": 630
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 631,
          "end": 634
        },
        "abstract": false,
        "declare": false,
        "start": 421,
        "end": 634
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 414,
      "end": 634
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 634
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "AnyFunction",
    "start": 12,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 61,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 76,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "AnyConstructor",
    "start": 81,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 96,
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
    "value": "object",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 177,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 191,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 194,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 206,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "MixinHelperFunc",
    "start": 220,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "AnyConstructor",
    "start": 249,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 291,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 296,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "AnyFunction",
    "start": 304,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 331,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 352,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "MixinHelperFunc",
    "start": 359,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Null",
    "value": "null",
    "start": 377,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 382,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 385,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 391,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 398,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 414,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 421,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "XmlElement2",
    "start": 427,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 439,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "base",
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
    "type": "Identifier",
    "value": "AnyConstructor",
    "start": 477,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 498,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
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
    "type": "Keyword",
    "value": "class",
    "start": 525,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "XmlElement2",
    "start": 531,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 543,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 604,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "XmlElement2",
    "start": 611,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 633,
    "end": 634
  }
]
```

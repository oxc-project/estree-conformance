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
        "name": "RelationFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 32,
                "end": 33
              },
              "start": 30,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 34
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 40,
                  "end": 41
                },
                "start": 40,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 44
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 50,
                "end": 53
              },
              "start": 48,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 54
          }
        ],
        "start": 25,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Name",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelationFields",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 89
          },
          "typeArguments": null,
          "start": 75,
          "end": 89
        },
        "start": 69,
        "end": 89
      },
      "declare": false,
      "start": 57,
      "end": 90
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldA",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 103
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "RF",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 106
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RelationFields",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 129
              },
              "typeArguments": null,
              "start": 115,
              "end": 129
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 129
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Name",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 145
              },
              "typeArguments": null,
              "start": 141,
              "end": 145
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 145
          }
        ],
        "start": 103,
        "end": 146
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RF",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 151
            },
            "typeArguments": null,
            "start": 149,
            "end": 151
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "typeArguments": null,
            "start": 152,
            "end": 153
          },
          "start": 149,
          "end": 154
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeArguments": null,
            "start": 163,
            "end": 164
          },
          "start": 163,
          "end": 166
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RF",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 173
              },
              "typeArguments": null,
              "start": 171,
              "end": 173
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "typeArguments": null,
              "start": 174,
              "end": 175
            },
            "start": 171,
            "end": 176
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 177,
              "end": 178
            },
            "start": 177,
            "end": 178
          },
          "start": 171,
          "end": 179
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 184,
          "end": 189
        },
        "start": 149,
        "end": 189
      },
      "declare": false,
      "start": 91,
      "end": 190
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "typeArguments": null,
                "start": 207,
                "end": 208
              },
              "start": 205,
              "end": 208
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
            "start": 204,
            "end": 209
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 216
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 216
                },
                "start": 215,
                "end": 218
              },
              "start": 213,
              "end": 218
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
            "start": 212,
            "end": 219
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "typeArguments": null,
                  "start": 225,
                  "end": 226
                },
                "start": 225,
                "end": 228
              },
              "start": 223,
              "end": 228
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
            "start": 222,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "whereRelated",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 245
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "RF",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 317
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RelationFields",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 340
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 340
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RelationFields",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 357
                      },
                      "typeArguments": null,
                      "start": 343,
                      "end": 357
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 315,
                    "end": 357
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 363,
                      "end": 364
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 377
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 384
                      },
                      "typeArguments": null,
                      "start": 380,
                      "end": 384
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 363,
                    "end": 384
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 392
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 402
                      },
                      "typeArguments": null,
                      "start": 401,
                      "end": 402
                    },
                    "default": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 405,
                            "end": 407
                          },
                          "typeArguments": null,
                          "start": 405,
                          "end": 407
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 409
                          },
                          "typeArguments": null,
                          "start": 408,
                          "end": 409
                        },
                        "start": 405,
                        "end": 410
                      },
                      "extendsType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 419,
                            "end": 420
                          },
                          "typeArguments": null,
                          "start": 419,
                          "end": 420
                        },
                        "start": 419,
                        "end": 422
                      },
                      "trueType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 425,
                              "end": 427
                            },
                            "typeArguments": null,
                            "start": 425,
                            "end": 427
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 428,
                              "end": 429
                            },
                            "typeArguments": null,
                            "start": 428,
                            "end": 429
                          },
                          "start": 425,
                          "end": 430
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 431,
                            "end": 432
                          },
                          "start": 431,
                          "end": 432
                        },
                        "start": 425,
                        "end": 433
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 436,
                        "end": 441
                      },
                      "start": 405,
                      "end": 441
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 390,
                    "end": 441
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 449
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 459
                      },
                      "typeArguments": null,
                      "start": 458,
                      "end": 459
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ShouldA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 462,
                        "end": 469
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 470,
                              "end": 472
                            },
                            "typeArguments": null,
                            "start": 470,
                            "end": 472
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 474,
                              "end": 475
                            },
                            "typeArguments": null,
                            "start": 474,
                            "end": 475
                          }
                        ],
                        "start": 469,
                        "end": 476
                      },
                      "start": 462,
                      "end": 476
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 447,
                    "end": 476
                  }
                ],
                "start": 245,
                "end": 480
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 484,
                  "end": 490
                },
                "start": 482,
                "end": 490
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 504,
                      "end": 505
                    },
                    "start": 497,
                    "end": 506
                  }
                ],
                "start": 491,
                "end": 510
              },
              "expression": false,
              "start": 245,
              "end": 510
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 233,
            "end": 510
          }
        ],
        "start": 200,
        "end": 512
      },
      "abstract": false,
      "declare": false,
      "start": 192,
      "end": 512
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 512
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
    "value": "RelationFields",
    "start": 10,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "RelationFields",
    "start": 75,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 91,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "ShouldA",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 104,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 107,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "RelationFields",
    "start": 115,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 133,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 141,
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
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 155,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
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
    "value": "A",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "whereRelated",
    "start": 233,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 315,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 318,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "RelationFields",
    "start": 326,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "RelationFields",
    "start": 343,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 365,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 373,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 390,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 393,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 430,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 447,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 450,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "ShouldA",
    "start": 462,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "RF",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 497,
    "end": 503
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  }
]
```

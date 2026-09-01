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
        "name": "IObserver",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 36,
                    "end": 37
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 36,
                  "end": 37
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TChange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 46
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 39,
                  "end": 46
                }
              ],
              "start": 35,
              "end": 47
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IObservable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 71
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
                            "start": 72,
                            "end": 73
                          },
                          "typeArguments": null,
                          "start": 72,
                          "end": 73
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TChange",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 75,
                            "end": 82
                          },
                          "typeArguments": null,
                          "start": 75,
                          "end": 82
                        }
                      ],
                      "start": 71,
                      "end": 83
                    },
                    "start": 60,
                    "end": 83
                  },
                  "start": 58,
                  "end": 83
                },
                "start": 48,
                "end": 83
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "change",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 93,
                    "end": 100
                  },
                  "start": 91,
                  "end": 100
                },
                "start": 85,
                "end": 100
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 103,
                "end": 107
              },
              "start": 101,
              "end": 107
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 108
          }
        ],
        "start": 20,
        "end": 110
      },
      "declare": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 133
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
              "start": 134,
              "end": 135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 144
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 147,
              "end": 154
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 154
          }
        ],
        "start": 133,
        "end": 155
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              "start": 164,
              "end": 167
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 159,
            "end": 168
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 186
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TChange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 195
                },
                "typeArguments": null,
                "start": 188,
                "end": 195
              },
              "start": 186,
              "end": 195
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 196
          }
        ],
        "start": 156,
        "end": 198
      },
      "declare": false,
      "start": 112,
      "end": 198
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IReader",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 224
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readObservable",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 242
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 243,
                      "end": 244
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 243,
                    "end": 244
                  }
                ],
                "start": 242,
                "end": 245
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "observable",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IObservable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 269
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
                              "start": 270,
                              "end": 271
                            },
                            "typeArguments": null,
                            "start": 270,
                            "end": 271
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 273,
                            "end": 276
                          }
                        ],
                        "start": 269,
                        "end": 277
                      },
                      "start": 258,
                      "end": 277
                    },
                    "start": 256,
                    "end": 277
                  },
                  "start": 246,
                  "end": 277
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
                    "start": 280,
                    "end": 281
                  },
                  "typeArguments": null,
                  "start": 280,
                  "end": 281
                },
                "start": 278,
                "end": 281
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 228,
              "end": 282
            }
          ],
          "start": 225,
          "end": 284
        },
        "declare": false,
        "start": 207,
        "end": 284
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 200,
      "end": 284
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 328
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
                "start": 329,
                "end": 330
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 329,
              "end": 330
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 339
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 332,
              "end": 339
            }
          ],
          "start": 328,
          "end": 340
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "IObservable",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 363
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
                    "start": 364,
                    "end": 365
                  },
                  "typeArguments": null,
                  "start": 364,
                  "end": 365
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TChange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 374
                  },
                  "typeArguments": null,
                  "start": 367,
                  "end": 374
                }
              ],
              "start": 363,
              "end": 375
            },
            "start": 352,
            "end": 375
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 390
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 401
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 401
                  },
                  "start": 392,
                  "end": 401
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 411,
                          "end": 415
                        },
                        "start": 411,
                        "end": 416
                      },
                      "start": 404,
                      "end": 417
                    }
                  ],
                  "start": 402,
                  "end": 419
                },
                "expression": false,
                "start": 390,
                "end": 419
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 379,
              "end": 419
            },
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 440
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 445
                    },
                    "typeArguments": null,
                    "start": 444,
                    "end": 445
                  },
                  "start": 442,
                  "end": 445
                },
                "body": null,
                "expression": false,
                "start": 440,
                "end": 446
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 421,
              "end": 446
            }
          ],
          "start": 376,
          "end": 448
        },
        "abstract": true,
        "declare": false,
        "start": 293,
        "end": 448
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 286,
      "end": 448
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 486
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
                "start": 487,
                "end": 488
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 487,
              "end": 488
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 497
              },
              "constraint": null,
              "default": {
                "type": "TSVoidKeyword",
                "start": 500,
                "end": 504
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 490,
              "end": 504
            }
          ],
          "start": 486,
          "end": 505
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 534
        },
        "superTypeArguments": {
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
                "start": 535,
                "end": 536
              },
              "typeArguments": null,
              "start": 535,
              "end": 536
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 545
              },
              "typeArguments": null,
              "start": 538,
              "end": 545
            }
          ],
          "start": 534,
          "end": 546
        },
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
                "name": "observers",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 578
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 588
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IObserver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 598
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 598
                    }
                  ],
                  "start": 588,
                  "end": 599
                },
                "arguments": [],
                "start": 581,
                "end": 601
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "protected",
              "start": 550,
              "end": 602
            }
          ],
          "start": 547,
          "end": 604
        },
        "abstract": true,
        "declare": false,
        "start": 457,
        "end": 604
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 450,
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
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IObserver",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "handleChange",
    "start": 23,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "observable",
    "start": 48,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "change",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 112,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 122,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 200,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 207,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "IReader",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "readObservable",
    "start": 228,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "observable",
    "start": 246,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 258,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 273,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 286,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 293,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "ConvenientObservable",
    "start": 308,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 341,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "IObservable",
    "start": 352,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 383,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 394,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 404,
    "end": 410
  },
  {
    "type": "Null",
    "value": "null",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 421,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 428,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 450,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 457,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 466,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "BaseObservable",
    "start": 472,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
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
    "value": "TChange",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 506,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "ConvenientObservable",
    "start": 514,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "TChange",
    "start": 538,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "protected",
    "start": 550,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 560,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "observers",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "IObserver",
    "start": 589,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  }
]
```

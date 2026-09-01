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
        "name": "LocaleData",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 24
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            {
              "type": "TSNeverKeyword",
              "start": 33,
              "end": 38
            }
          ],
          "start": 24,
          "end": 39
        },
        "start": 18,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConvertLocaleConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 64
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
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 85
              },
              "typeArguments": null,
              "start": 75,
              "end": 85
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 98
              },
              "typeArguments": null,
              "start": 88,
              "end": 98
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 98
          }
        ],
        "start": 64,
        "end": 99
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 108
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 112,
              "end": 118
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "typeArguments": null,
              "start": 122,
              "end": 123
            }
          ],
          "start": 108,
          "end": 125
        },
        "start": 102,
        "end": 125
      },
      "declare": false,
      "start": 40,
      "end": 126
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocaleConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 165
              },
              "typeArguments": null,
              "start": 155,
              "end": 165
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 178
              },
              "typeArguments": null,
              "start": 168,
              "end": 178
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 178
          }
        ],
        "start": 144,
        "end": 179
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 188
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 204
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
                      "start": 205,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 206
                  }
                ],
                "start": 204,
                "end": 207
              },
              "start": 197,
              "end": 207
            }
          ],
          "start": 188,
          "end": 208
        },
        "start": 182,
        "end": 208
      },
      "declare": false,
      "start": 127,
      "end": 209
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetLocalesOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 245
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
                "start": 246,
                "end": 247
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LocaleData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 266
                },
                "typeArguments": null,
                "start": 256,
                "end": 266
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 246,
              "end": 266
            }
          ],
          "start": 245,
          "end": 267
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
                "name": "app",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 277
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 279,
                  "end": 286
                },
                "start": 277,
                "end": 286
              },
              "accessibility": null,
              "static": false,
              "start": 274,
              "end": 287
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 299
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 320
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
                          "start": 321,
                          "end": 322
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 322
                      }
                    ],
                    "start": 320,
                    "end": 323
                  },
                  "start": 301,
                  "end": 323
                },
                "start": 299,
                "end": 323
              },
              "accessibility": null,
              "static": false,
              "start": 292,
              "end": 324
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
              },
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
                        "name": "LocaleConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 350
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
                              "start": 351,
                              "end": 352
                            },
                            "typeArguments": null,
                            "start": 351,
                            "end": 352
                          }
                        ],
                        "start": 350,
                        "end": 353
                      },
                      "start": 338,
                      "end": 353
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 356,
                      "end": 365
                    }
                  ],
                  "start": 338,
                  "end": 365
                },
                "start": 336,
                "end": 365
              },
              "accessibility": null,
              "static": false,
              "start": 329,
              "end": 366
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 375
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 378,
                  "end": 384
                },
                "start": 376,
                "end": 384
              },
              "accessibility": null,
              "static": false,
              "start": 371,
              "end": 385
            }
          ],
          "start": 268,
          "end": 387
        },
        "declare": false,
        "start": 218,
        "end": 387
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 211,
      "end": 387
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
              "name": "getLocales",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 412
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 416,
                      "end": 417
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LocaleData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 436
                      },
                      "typeArguments": null,
                      "start": 426,
                      "end": 436
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 416,
                    "end": 436
                  }
                ],
                "start": 415,
                "end": 437
              },
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 447
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 447
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 444,
                      "end": 447
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 457
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 457
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 453,
                      "end": 457
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 470
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultLocalesConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 463,
                      "end": 492
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 504
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "userLocalesConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 506,
                          "end": 523
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 526,
                          "end": 528
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 528
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 498,
                      "end": 528
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GetLocalesOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 550
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
                              "start": 551,
                              "end": 552
                            },
                            "typeArguments": null,
                            "start": 551,
                            "end": 552
                          }
                        ],
                        "start": 550,
                        "end": 553
                      },
                      "start": 533,
                      "end": 553
                    },
                    "start": 531,
                    "end": 553
                  },
                  "start": 438,
                  "end": 553
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 575
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
                          "start": 576,
                          "end": 577
                        },
                        "typeArguments": null,
                        "start": 576,
                        "end": 577
                      }
                    ],
                    "start": 575,
                    "end": 578
                  },
                  "start": 556,
                  "end": 578
                },
                "start": 554,
                "end": 578
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultLocalesConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 615
                    },
                    "start": 588,
                    "end": 616
                  }
                ],
                "start": 582,
                "end": 618
              },
              "id": null,
              "generator": false,
              "start": 415,
              "end": 618
            },
            "definite": false,
            "start": 402,
            "end": 618
          }
        ],
        "declare": false,
        "start": 396,
        "end": 619
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 389,
      "end": 619
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 619
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
    "value": "LocaleData",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 40,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ConvertLocaleConfig",
    "start": 45,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "LocaleData",
    "start": 75,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "LocaleData",
    "start": 88,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 102,
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
    "value": "string",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "LocaleConfig",
    "start": 132,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 147,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "LocaleData",
    "start": 155,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "LocaleData",
    "start": 168,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "export",
    "start": 211,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 218,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "GetLocalesOptions",
    "start": 228,
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
    "value": "T",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 248,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "LocaleData",
    "start": 256,
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
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 279,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "ConvertLocaleConfig",
    "start": 301,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "LocaleConfig",
    "start": 338,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 356,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 389,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 396,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "getLocales",
    "start": 402,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 418,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "LocaleData",
    "start": 426,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "defaultLocalesConfig",
    "start": 472,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "userLocalesConfig",
    "start": 506,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "GetLocalesOptions",
    "start": 533,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "ConvertLocaleConfig",
    "start": 556,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 588,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "defaultLocalesConfig",
    "start": 595,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  }
]
```

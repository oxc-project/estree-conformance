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
          "name": "SelectorMap",
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 40
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 53,
                            "end": 59
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 61,
                                "end": 68
                              },
                              "start": 61,
                              "end": 70
                            },
                            "start": 59,
                            "end": 70
                          },
                          "value": null,
                          "start": 50,
                          "end": 70
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 75,
                          "end": 82
                        },
                        "start": 72,
                        "end": 82
                      },
                      "start": 49,
                      "end": 82
                    }
                  ],
                  "start": 40,
                  "end": 83
                },
                "start": 34,
                "end": 83
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 83
            }
          ],
          "start": 23,
          "end": 84
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
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
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 101,
            "end": 108
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
                "start": 111,
                "end": 112
              },
              "typeArguments": null,
              "start": 111,
              "end": 112
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
              },
              "typeArguments": null,
              "start": 113,
              "end": 116
            },
            "start": 111,
            "end": 117
          },
          "optional": false,
          "readonly": null,
          "start": 87,
          "end": 120
        },
        "declare": false,
        "start": 7,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
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
    "value": "SelectorMap",
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
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 26,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "unknown",
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
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 94,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  }
]
```
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
          "name": "SelectorMap",
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 40
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 53,
                            "end": 59
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 61,
                                "end": 68
                              },
                              "start": 61,
                              "end": 70
                            },
                            "start": 59,
                            "end": 70
                          },
                          "value": null,
                          "start": 50,
                          "end": 70
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 75,
                          "end": 82
                        },
                        "start": 72,
                        "end": 82
                      },
                      "start": 49,
                      "end": 82
                    }
                  ],
                  "start": 40,
                  "end": 83
                },
                "start": 34,
                "end": 83
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 83
            }
          ],
          "start": 23,
          "end": 84
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
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
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 101,
            "end": 108
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
                "start": 111,
                "end": 112
              },
              "typeArguments": null,
              "start": 111,
              "end": 112
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
              },
              "typeArguments": null,
              "start": 113,
              "end": 116
            },
            "start": 111,
            "end": 117
          },
          "optional": false,
          "readonly": null,
          "start": 87,
          "end": 120
        },
        "declare": false,
        "start": 7,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 121
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
              "name": "value2",
              "optional": false,
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
                        "name": "sliceSelectors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 172
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                  "name": "FuncMap",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 175,
                                  "end": 182
                                },
                                "constraint": {
                                  "type": "TSImportType",
                                  "source": {
                                    "type": "Literal",
                                    "value": "./types",
                                    "raw": "'./types'",
                                    "start": 198,
                                    "end": 207
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 209,
                                    "end": 220
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 221,
                                          "end": 228
                                        },
                                        "typeArguments": null,
                                        "start": 221,
                                        "end": 228
                                      }
                                    ],
                                    "start": 220,
                                    "end": 229
                                  },
                                  "start": 191,
                                  "end": 229
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 175,
                                "end": 229
                              }
                            ],
                            "start": 174,
                            "end": 230
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 249,
                                    "end": 256
                                  },
                                  "typeArguments": null,
                                  "start": 249,
                                  "end": 256
                                },
                                "start": 247,
                                "end": 256
                              },
                              "start": 231,
                              "end": 256
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSMappedType",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 264,
                                "end": 265
                              },
                              "constraint": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 275,
                                    "end": 282
                                  },
                                  "typeArguments": null,
                                  "start": 275,
                                  "end": 282
                                },
                                "start": 269,
                                "end": 282
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 285,
                                  "end": 295
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSIndexedAccessType",
                                      "objectType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 296,
                                          "end": 303
                                        },
                                        "typeArguments": null,
                                        "start": 296,
                                        "end": 303
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 304,
                                          "end": 305
                                        },
                                        "typeArguments": null,
                                        "start": 304,
                                        "end": 305
                                      },
                                      "start": 296,
                                      "end": 306
                                    }
                                  ],
                                  "start": 295,
                                  "end": 307
                                },
                                "start": 285,
                                "end": 307
                              },
                              "optional": false,
                              "readonly": null,
                              "start": 261,
                              "end": 309
                            },
                            "start": 258,
                            "end": 309
                          },
                          "start": 174,
                          "end": 309
                        },
                        "start": 172,
                        "end": 309
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 158,
                      "end": 310
                    }
                  ],
                  "start": 152,
                  "end": 312
                },
                "start": 150,
                "end": 312
              },
              "start": 144,
              "end": 312
            },
            "init": null,
            "definite": false,
            "start": 144,
            "end": 312
          }
        ],
        "declare": true,
        "start": 130,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 123,
      "end": 313
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
              "name": "value3",
              "optional": false,
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
                        "name": "sliceSelectors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 364
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                  "name": "FuncMap",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 367,
                                  "end": 374
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 383,
                                    "end": 394
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 395,
                                          "end": 402
                                        },
                                        "typeArguments": null,
                                        "start": 395,
                                        "end": 402
                                      }
                                    ],
                                    "start": 394,
                                    "end": 403
                                  },
                                  "start": 383,
                                  "end": 403
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 367,
                                "end": 403
                              }
                            ],
                            "start": 366,
                            "end": 404
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 423,
                                    "end": 430
                                  },
                                  "typeArguments": null,
                                  "start": 423,
                                  "end": 430
                                },
                                "start": 421,
                                "end": 430
                              },
                              "start": 405,
                              "end": 430
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSMappedType",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 438,
                                "end": 439
                              },
                              "constraint": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 449,
                                    "end": 456
                                  },
                                  "typeArguments": null,
                                  "start": 449,
                                  "end": 456
                                },
                                "start": 443,
                                "end": 456
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 459,
                                  "end": 469
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSIndexedAccessType",
                                      "objectType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 470,
                                          "end": 477
                                        },
                                        "typeArguments": null,
                                        "start": 470,
                                        "end": 477
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 478,
                                          "end": 479
                                        },
                                        "typeArguments": null,
                                        "start": 478,
                                        "end": 479
                                      },
                                      "start": 470,
                                      "end": 480
                                    }
                                  ],
                                  "start": 469,
                                  "end": 481
                                },
                                "start": 459,
                                "end": 481
                              },
                              "optional": false,
                              "readonly": null,
                              "start": 435,
                              "end": 483
                            },
                            "start": 432,
                            "end": 483
                          },
                          "start": 366,
                          "end": 483
                        },
                        "start": 364,
                        "end": 483
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 350,
                      "end": 484
                    }
                  ],
                  "start": 344,
                  "end": 486
                },
                "start": 342,
                "end": 486
              },
              "start": 336,
              "end": 486
            },
            "init": null,
            "definite": false,
            "start": 336,
            "end": 486
          }
        ],
        "declare": true,
        "start": 322,
        "end": 487
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 315,
      "end": 487
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 488
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
    "value": "SelectorMap",
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
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 26,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "unknown",
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
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 94,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 123,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "sliceSelectors",
    "start": 158,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 175,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "String",
    "value": "'./types'",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "SelectorMap",
    "start": 209,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "selectorsBySlice",
    "start": 231,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 269,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 285,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 296,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 315,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 322,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "sliceSelectors",
    "start": 350,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 367,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 375,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "SelectorMap",
    "start": 383,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "selectorsBySlice",
    "start": 405,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "FuncMap",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 459,
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
    "value": "FuncMap",
    "start": 470,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  }
]
```

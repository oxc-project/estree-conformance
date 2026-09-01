__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 40
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
                      "start": 44,
                      "end": 45
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 54
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 55,
                            "end": 61
                          },
                          {
                            "type": "TSNeverKeyword",
                            "start": 63,
                            "end": 68
                          }
                        ],
                        "start": 54,
                        "end": 69
                      },
                      "start": 48,
                      "end": 69
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 44,
                    "end": 69
                  }
                ],
                "start": 43,
                "end": 70
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Required",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 105
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
                                  "start": 106,
                                  "end": 107
                                },
                                "typeArguments": null,
                                "start": 106,
                                "end": 107
                              }
                            ],
                            "start": 105,
                            "end": 108
                          },
                          "start": 97,
                          "end": 108
                        },
                        "start": 91,
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
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 114
                          },
                          "typeArguments": null,
                          "start": 113,
                          "end": 114
                        },
                        "start": 111,
                        "end": 115
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 79,
                      "end": 118
                    },
                    "start": 77,
                    "end": 118
                  },
                  "start": 71,
                  "end": 118
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 123,
                "end": 125
              },
              "id": null,
              "generator": false,
              "start": 43,
              "end": 125
            },
            "definite": false,
            "start": 35,
            "end": 125
          }
        ],
        "declare": false,
        "start": 29,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 148
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
                "start": 149,
                "end": 150
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 159
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 160,
                      "end": 166
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 168,
                      "end": 173
                    }
                  ],
                  "start": 159,
                  "end": 174
                },
                "start": 153,
                "end": 174
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 149,
              "end": 174
            }
          ],
          "start": 148,
          "end": 175
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "schema",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 210
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
                            "start": 211,
                            "end": 212
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 212
                        }
                      ],
                      "start": 210,
                      "end": 213
                    },
                    "start": 202,
                    "end": 213
                  },
                  "start": 196,
                  "end": 213
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
                      "start": 216,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 216,
                    "end": 217
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 219
                    },
                    "typeArguments": null,
                    "start": 218,
                    "end": 219
                  },
                  "start": 216,
                  "end": 220
                },
                "optional": false,
                "readonly": null,
                "start": 184,
                "end": 223
              },
              "start": 182,
              "end": 223
            },
            "start": 176,
            "end": 223
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 225,
          "end": 227
        },
        "expression": false,
        "start": 134,
        "end": 227
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 127,
      "end": 227
    },
    {
      "type": "EmptyStatement",
      "start": 227,
      "end": 228
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 228
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "K",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 134,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
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
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 193,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 202,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  }
]
```

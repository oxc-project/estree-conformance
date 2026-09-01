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
        "name": "MatchArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 49
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
              "start": 50,
              "end": 51
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 50,
            "end": 51
          }
        ],
        "start": 49,
        "end": 52
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 63
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
              "start": 73,
              "end": 74
            },
            "typeArguments": null,
            "start": 73,
            "end": 74
          },
          "start": 67,
          "end": 74
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
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeArguments": null,
            "start": 79,
            "end": 80
          },
          "start": 77,
          "end": 81
        },
        "optional": false,
        "readonly": null,
        "start": 55,
        "end": 84
      },
      "declare": false,
      "start": 30,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SinonSpyCallApi",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 112
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 118
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              },
              "start": 127,
              "end": 132
            },
            "default": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              },
              "start": 135,
              "end": 140
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 140
          }
        ],
        "start": 112,
        "end": 141
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
              "name": "calledWith",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 158
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                  "start": 162,
                  "end": 166
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 175
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MatchArguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 190
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TArgs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 196
                                },
                                "typeArguments": null,
                                "start": 191,
                                "end": 196
                              }
                            ],
                            "start": 190,
                            "end": 197
                          },
                          "start": 176,
                          "end": 197
                        }
                      ],
                      "start": 175,
                      "end": 198
                    },
                    "start": 168,
                    "end": 198
                  },
                  "start": 166,
                  "end": 198
                },
                "value": null,
                "start": 159,
                "end": 198
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 201,
                "end": 208
              },
              "start": 199,
              "end": 208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 148,
            "end": 209
          }
        ],
        "start": 142,
        "end": 211
      },
      "declare": false,
      "start": 87,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 211
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "MatchArguments",
    "start": 35,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "SinonSpyCallApi",
    "start": 97,
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
    "value": "TArgs",
    "start": 113,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 119,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "calledWith",
    "start": 148,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "MatchArguments",
    "start": 176,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "TArgs",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterManager",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 26
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
                "name": "_filterProviders",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 57
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 66
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFilterProvider",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 68,
                            "end": 83
                          },
                          "typeArguments": null,
                          "start": 68,
                          "end": 83
                        },
                        "start": 66,
                        "end": 83
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 61,
                      "end": 84
                    }
                  ],
                  "start": 59,
                  "end": 86
                },
                "start": 57,
                "end": 86
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 33,
              "end": 87
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_filterProviders2",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 117
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 129,
                              "end": 135
                            },
                            "start": 127,
                            "end": 135
                          },
                          "start": 122,
                          "end": 135
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFilterProvider",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 138,
                            "end": 153
                          },
                          "typeArguments": null,
                          "start": 138,
                          "end": 153
                        },
                        "start": 136,
                        "end": 153
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 121,
                      "end": 154
                    }
                  ],
                  "start": 119,
                  "end": 156
                },
                "start": 117,
                "end": 156
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 92,
              "end": 157
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_filterProviders3",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 187
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 199,
                              "end": 205
                            },
                            "start": 197,
                            "end": 205
                          },
                          "start": 192,
                          "end": 205
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFilterProvider",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 223
                          },
                          "typeArguments": null,
                          "start": 208,
                          "end": 223
                        },
                        "start": 206,
                        "end": 223
                      },
                      "start": 191,
                      "end": 224
                    }
                  ],
                  "start": 189,
                  "end": 226
                },
                "start": 187,
                "end": 226
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 162,
              "end": 227
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_filterProviders4",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 257
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
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 267,
                          "end": 273
                        },
                        "start": 265,
                        "end": 273
                      },
                      "start": 260,
                      "end": 273
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFilterProvider",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 293
                      },
                      "typeArguments": null,
                      "start": 278,
                      "end": 293
                    },
                    "start": 275,
                    "end": 293
                  },
                  "start": 259,
                  "end": 293
                },
                "start": 257,
                "end": 293
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 232,
              "end": 294
            }
          ],
          "start": 27,
          "end": 296
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 296
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IFilterProvider",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 329
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 330,
          "end": 333
        },
        "declare": false,
        "start": 304,
        "end": 333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 297,
      "end": 333
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 333
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
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "FilterManager",
    "start": 13,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 33,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "_filterProviders",
    "start": 41,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "IFilterProvider",
    "start": 68,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 92,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "_filterProviders2",
    "start": 100,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "IFilterProvider",
    "start": 138,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "_filterProviders3",
    "start": 170,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "IFilterProvider",
    "start": 208,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 232,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "_filterProviders4",
    "start": 240,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 275,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "IFilterProvider",
    "start": 278,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 297,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 304,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "IFilterProvider",
    "start": 314,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  }
]
```

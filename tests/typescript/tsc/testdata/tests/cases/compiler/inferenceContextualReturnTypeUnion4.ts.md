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
          "name": "Storage",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 86
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 105
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 107
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 116,
                        "end": 122
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 106,
                      "end": 122
                    }
                  ],
                  "start": 105,
                  "end": 123
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 128
                        },
                        "typeArguments": null,
                        "start": 127,
                        "end": 128
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 138
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
                                "start": 139,
                                "end": 140
                              },
                              "typeArguments": null,
                              "start": 139,
                              "end": 140
                            }
                          ],
                          "start": 138,
                          "end": 141
                        },
                        "start": 131,
                        "end": 141
                      }
                    ],
                    "start": 127,
                    "end": 141
                  },
                  "start": 125,
                  "end": 141
                },
                "body": null,
                "expression": false,
                "start": 105,
                "end": 142
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 93,
              "end": 142
            }
          ],
          "start": 87,
          "end": 144
        },
        "abstract": true,
        "declare": false,
        "start": 64,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 144
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyncStorage",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 179
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Storage",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 195
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 223
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 225
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 234,
                        "end": 240
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 224,
                      "end": 240
                    }
                  ],
                  "start": 223,
                  "end": 241
                },
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
                      "start": 245,
                      "end": 246
                    },
                    "typeArguments": null,
                    "start": 245,
                    "end": 246
                  },
                  "start": 243,
                  "end": 246
                },
                "body": null,
                "expression": false,
                "start": 223,
                "end": 247
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 202,
              "end": 247
            }
          ],
          "start": 196,
          "end": 249
        },
        "abstract": true,
        "declare": false,
        "start": 153,
        "end": 249
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 249
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ASyncStorage",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 285
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Storage",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 301
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 329
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 340,
                        "end": 346
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 330,
                      "end": 346
                    }
                  ],
                  "start": 329,
                  "end": 347
                },
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
                      "start": 351,
                      "end": 358
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
                            "start": 359,
                            "end": 360
                          },
                          "typeArguments": null,
                          "start": 359,
                          "end": 360
                        }
                      ],
                      "start": 358,
                      "end": 361
                    },
                    "start": 351,
                    "end": 361
                  },
                  "start": 349,
                  "end": 361
                },
                "body": null,
                "expression": false,
                "start": 329,
                "end": 362
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": true,
              "optional": false,
              "accessibility": null,
              "start": 308,
              "end": 362
            }
          ],
          "start": 302,
          "end": 364
        },
        "abstract": true,
        "declare": false,
        "start": 258,
        "end": 364
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 251,
      "end": 364
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 364
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 64,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Storage",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 102,
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
    "type": "Keyword",
    "value": "extends",
    "start": 108,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 153,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "SyncStorage",
    "start": 168,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 180,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Storage",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 202,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 211,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 226,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 251,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 258,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 267,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "ASyncStorage",
    "start": 273,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Storage",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 308,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 317,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 332,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  }
]
```

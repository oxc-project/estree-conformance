__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 132
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 134
                        },
                        "constraint": null,
                        "default": {
                          "type": "TSAnyKeyword",
                          "start": 137,
                          "end": 140
                        },
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 133,
                        "end": 140
                      }
                    ],
                    "start": 132,
                    "end": 141
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 164
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "JSX",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 174,
                                  "end": 177
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IntrinsicElements",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 195
                                },
                                "start": 174,
                                "end": 195
                              },
                              "typeArguments": null,
                              "start": 174,
                              "end": 195
                            },
                            "start": 168,
                            "end": 195
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 198,
                                "end": 199
                              },
                              "typeArguments": null,
                              "start": 198,
                              "end": 199
                            },
                            "extendsType": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 208,
                                    "end": 211
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 212,
                                    "end": 229
                                  },
                                  "start": 208,
                                  "end": 229
                                },
                                "typeArguments": null,
                                "start": 208,
                                "end": 229
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "start": 230,
                                "end": 231
                              },
                              "start": 208,
                              "end": 232
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 243,
                                "end": 244
                              },
                              "typeArguments": null,
                              "start": 243,
                              "end": 244
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 255,
                              "end": 260
                            },
                            "start": 198,
                            "end": 260
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 152,
                          "end": 269
                        },
                        "indexType": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "JSX",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 276,
                                "end": 279
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IntrinsicElements",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 280,
                                "end": 297
                              },
                              "start": 276,
                              "end": 297
                            },
                            "typeArguments": null,
                            "start": 276,
                            "end": 297
                          },
                          "start": 270,
                          "end": 297
                        },
                        "start": 152,
                        "end": 298
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "React",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 307,
                            "end": 312
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComponentType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 313,
                            "end": 326
                          },
                          "start": 307,
                          "end": 326
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 327,
                                "end": 328
                              },
                              "typeArguments": null,
                              "start": 327,
                              "end": 328
                            }
                          ],
                          "start": 326,
                          "end": 329
                        },
                        "start": 307,
                        "end": 329
                      }
                    ],
                    "start": 150,
                    "end": 329
                  },
                  "declare": false,
                  "start": 116,
                  "end": 330
                }
              ],
              "start": 110,
              "end": 334
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 96,
            "end": 334
          }
        ],
        "start": 92,
        "end": 336
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 77,
      "end": 336
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 395,
                "end": 398
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 394,
              "end": 401
            },
            "children": [],
            "closingElement": null,
            "start": 394,
            "end": 401
          },
          "definite": false,
          "start": 390,
          "end": 401
        }
      ],
      "declare": false,
      "start": 386,
      "end": 402
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 496
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ruhroh",
                "start": 500,
                "end": 506
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 499,
              "end": 509
            },
            "children": [],
            "closingElement": null,
            "start": 499,
            "end": 509
          },
          "definite": false,
          "start": 495,
          "end": 509
        }
      ],
      "declare": false,
      "start": 491,
      "end": 510
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 510
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 96,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 116,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 137,
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
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 165,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 178,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 212,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 270,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 280,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 313,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "JSXIdentifier",
    "value": "ruhroh",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  }
]
```

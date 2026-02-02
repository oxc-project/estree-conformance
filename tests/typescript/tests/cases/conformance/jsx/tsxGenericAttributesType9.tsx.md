__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeP",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 98
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 99,
              "end": 100
            }
          ],
          "start": 98,
          "end": 101
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 113
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 128
                  },
                  "start": 108,
                  "end": 128
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
                        "start": 129,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 130
                    }
                  ],
                  "start": 128,
                  "end": 131
                },
                "start": 108,
                "end": 131
              },
              "start": 106,
              "end": 131
            },
            "start": 102,
            "end": 131
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 162
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PureComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 176
                  },
                  "optional": false,
                  "computed": false,
                  "start": 157,
                  "end": 176
                },
                "superTypeArguments": {
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
                        "start": 177,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 178
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 180,
                      "end": 184
                    }
                  ],
                  "start": 176,
                  "end": 185
                },
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "render",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 203
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "JSX",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 207,
                                "end": 210
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 211,
                                "end": 218
                              },
                              "start": 207,
                              "end": 218
                            },
                            "typeArguments": null,
                            "start": 207,
                            "end": 218
                          },
                          "start": 205,
                          "end": 218
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "Ctor",
                                    "start": 238,
                                    "end": 242
                                  },
                                  "typeArguments": null,
                                  "attributes": [
                                    {
                                      "type": "JSXSpreadAttribute",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 247,
                                          "end": 251
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "props",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 252,
                                          "end": 257
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 247,
                                        "end": 257
                                      },
                                      "start": 243,
                                      "end": 259
                                    }
                                  ],
                                  "selfClosing": true,
                                  "start": 237,
                                  "end": 262
                                },
                                "children": [],
                                "closingElement": null,
                                "start": 237,
                                "end": 262
                              },
                              "start": 224,
                              "end": 268
                            }
                          ],
                          "start": 219,
                          "end": 272
                        },
                        "expression": false,
                        "start": 203,
                        "end": 272
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 190,
                      "end": 272
                    }
                  ],
                  "start": 186,
                  "end": 275
                },
                "abstract": false,
                "declare": false,
                "start": 143,
                "end": 275
              },
              "start": 136,
              "end": 276
            }
          ],
          "start": 133,
          "end": 278
        },
        "expression": false,
        "start": 84,
        "end": 278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 279
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "makeP",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 114,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 149,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "PureComponent",
    "start": 163,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "JSX",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 211,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "JSXIdentifier",
    "value": "Ctor",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 244,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  }
]
```

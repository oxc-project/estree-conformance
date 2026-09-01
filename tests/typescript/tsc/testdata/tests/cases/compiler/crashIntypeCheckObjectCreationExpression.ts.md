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
          "name": "BuildWorkspaceService",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 34
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
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
                "name": "injectRequestService",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 68
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
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 71
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 69,
                      "end": 71
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 75
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 73,
                      "end": 75
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 79
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 77,
                      "end": 79
                    }
                  ],
                  "start": 68,
                  "end": 80
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 92
                        },
                        "typeArguments": null,
                        "start": 90,
                        "end": 92
                      },
                      "start": 88,
                      "end": 92
                    },
                    "start": 81,
                    "end": 92
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "injectBuildService",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 127
                          },
                          "optional": false,
                          "computed": false,
                          "start": 104,
                          "end": 127
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 128,
                              "end": 134
                            }
                          ],
                          "start": 127,
                          "end": 135
                        },
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 141
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "service",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 142,
                                "end": 149
                              }
                            ],
                            "start": 136,
                            "end": 150
                          }
                        ],
                        "optional": false,
                        "start": 104,
                        "end": 151
                      },
                      "directive": null,
                      "start": 104,
                      "end": 152
                    }
                  ],
                  "start": 94,
                  "end": 158
                },
                "expression": false,
                "start": 68,
                "end": 158
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 41,
              "end": 158
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "injectBuildService",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 188
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
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 191
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 189,
                      "end": 191
                    }
                  ],
                  "start": 188,
                  "end": 192
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 202,
                          "end": 204
                        },
                        "typeArguments": null,
                        "start": 202,
                        "end": 204
                      },
                      "start": 200,
                      "end": 204
                    },
                    "start": 193,
                    "end": 204
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 206,
                  "end": 213
                },
                "expression": false,
                "start": 188,
                "end": 213
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 163,
              "end": 213
            }
          ],
          "start": 35,
          "end": 215
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 215
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
    "value": "BuildWorkspaceService",
    "start": 13,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "injectRequestService",
    "start": 48,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "service",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "injectBuildService",
    "start": 109,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "service",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 163,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "injectBuildService",
    "start": 170,
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
    "value": "P0",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "service",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 202,
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
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  }
]
```

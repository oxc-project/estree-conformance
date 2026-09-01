__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "importKind": "value",
          "start": 9,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Configurable",
        "raw": "\"./Configurable\"",
        "start": 29,
        "end": 45
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HiddenClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 71
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 72,
          "end": 74
        },
        "abstract": false,
        "declare": false,
        "start": 54,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 47,
      "end": 74
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActualClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 100
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 121
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "HiddenClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 133
            }
          ],
          "optional": false,
          "start": 109,
          "end": 134
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 135,
          "end": 137
        },
        "abstract": false,
        "declare": false,
        "start": 83,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 137
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Configurable",
    "start": 9,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "\"./Configurable\"",
    "start": 29,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "HiddenClass",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "ActualClass",
    "start": 89,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Configurable",
    "start": 109,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "HiddenClass",
    "start": 122,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
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
          "name": "Constructor",
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
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 25
            }
          ],
          "start": 23,
          "end": 26
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                    "start": 42,
                    "end": 46
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 48,
                        "end": 51
                      },
                      "start": 48,
                      "end": 53
                    },
                    "start": 46,
                    "end": 53
                  },
                  "value": null,
                  "start": 39,
                  "end": 53
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
                    "start": 56,
                    "end": 57
                  },
                  "typeArguments": null,
                  "start": 56,
                  "end": 57
                },
                "start": 54,
                "end": 57
              },
              "start": 35,
              "end": 58
            }
          ],
          "start": 29,
          "end": 60
        },
        "declare": false,
        "start": 7,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Configurable",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 89
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
                "start": 90,
                "end": 91
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 111
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 112,
                      "end": 114
                    }
                  ],
                  "start": 111,
                  "end": 115
                },
                "start": 100,
                "end": 115
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 90,
              "end": 115
            }
          ],
          "start": 89,
          "end": 116
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 124
                },
                "typeArguments": null,
                "start": 123,
                "end": 124
              },
              "start": 121,
              "end": 124
            },
            "start": 117,
            "end": 124
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
              "start": 127,
              "end": 128
            },
            "typeArguments": null,
            "start": 127,
            "end": 128
          },
          "start": 125,
          "end": 128
        },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 160
                },
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
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 183
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
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
                              "start": 187,
                              "end": 191
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 193,
                                  "end": 196
                                },
                                "start": 193,
                                "end": 198
                              },
                              "start": 191,
                              "end": 198
                            },
                            "value": null,
                            "start": 184,
                            "end": 198
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
                                  "type": "Super",
                                  "start": 214,
                                  "end": 219
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 223,
                                      "end": 227
                                    },
                                    "start": 220,
                                    "end": 227
                                  }
                                ],
                                "optional": false,
                                "start": 214,
                                "end": 228
                              },
                              "directive": null,
                              "start": 214,
                              "end": 229
                            }
                          ],
                          "start": 200,
                          "end": 239
                        },
                        "expression": false,
                        "start": 183,
                        "end": 239
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 172,
                      "end": 239
                    }
                  ],
                  "start": 161,
                  "end": 246
                },
                "abstract": false,
                "declare": false,
                "start": 142,
                "end": 246
              },
              "start": 135,
              "end": 247
            }
          ],
          "start": 129,
          "end": 249
        },
        "expression": false,
        "start": 68,
        "end": 249
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 249
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 249
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
    "value": "Constructor",
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
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 61,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Configurable",
    "start": 77,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 92,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 100,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 135,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 142,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 148,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 172,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
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
  }
]
```

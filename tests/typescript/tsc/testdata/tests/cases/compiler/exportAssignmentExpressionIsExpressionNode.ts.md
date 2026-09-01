__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eslintPluginImportX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./lib/index.js",
                    "raw": "\"./lib/index.js\"",
                    "start": 49,
                    "end": 65
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null,
                  "start": 42,
                  "end": 66
                },
                "typeArguments": null,
                "start": 35,
                "end": 66
              },
              "start": 33,
              "end": 66
            },
            "start": 14,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 66
        }
      ],
      "declare": true,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "eslintPluginImportX",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 96
      },
      "start": 68,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "eslintPluginImportX",
    "start": 14,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 35,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"./lib/index.js\"",
    "start": 49,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "eslintPluginImportX",
    "start": 77,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PluginConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parser",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 45,
                    "end": 49
                  }
                ],
                "start": 36,
                "end": 49
              },
              "start": 34,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 50
          }
        ],
        "start": 23,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
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
                      "type": "Literal",
                      "value": "stage-0",
                      "raw": "'stage-0'",
                      "start": 82,
                      "end": 91
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PluginConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 105
                        },
                        "typeArguments": null,
                        "start": 93,
                        "end": 105
                      },
                      "start": 91,
                      "end": 105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 82,
                    "end": 106
                  }
                ],
                "start": 76,
                "end": 108
              },
              "start": 74,
              "end": 108
            },
            "start": 67,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 108
        }
      ],
      "declare": true,
      "start": 53,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_default",
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
                      "name": "configs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 147
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
                              "type": "Literal",
                              "value": "stage-0",
                              "raw": "'stage-0'",
                              "start": 159,
                              "end": 168
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PluginConfig",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 170,
                                  "end": 182
                                },
                                "typeArguments": null,
                                "start": 170,
                                "end": 182
                              },
                              "start": 168,
                              "end": 182
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 159,
                            "end": 183
                          }
                        ],
                        "start": 149,
                        "end": 189
                      },
                      "start": 147,
                      "end": 189
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 140,
                    "end": 190
                  }
                ],
                "start": 134,
                "end": 192
              },
              "start": 132,
              "end": 192
            },
            "start": 124,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 192
        }
      ],
      "declare": true,
      "start": 110,
      "end": 193
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 217
      },
      "exportKind": "value",
      "start": 194,
      "end": 218
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 235
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 235
          },
          "exportKind": "value",
          "start": 228,
          "end": 235
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 219,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 239
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "PluginConfig",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "parser",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 43,
    "end": 44
  },
  {
    "type": "Null",
    "value": "null",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "configs",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "'stage-0'",
    "start": 82,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "PluginConfig",
    "start": 93,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 110,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "configs",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "String",
    "value": "'stage-0'",
    "start": 159,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "PluginConfig",
    "start": 170,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 194,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 201,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "configs",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  }
]
```
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
            "name": "pluginImportX",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "start": 7,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "eslint-plugin-import-x",
        "raw": "'eslint-plugin-import-x'",
        "start": 31,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugin",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 73
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "configs",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    {
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
                            "name": "parser",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 105,
                            "end": 111
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 113,
                                  "end": 119
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 122,
                                  "end": 126
                                }
                              ],
                              "start": 113,
                              "end": 126
                            },
                            "start": 111,
                            "end": 126
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 105,
                          "end": 126
                        }
                      ],
                      "start": 103,
                      "end": 128
                    }
                  ],
                  "start": 94,
                  "end": 129
                },
                "start": 88,
                "end": 129
              },
              "start": 86,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 129
          }
        ],
        "start": 74,
        "end": 131
      },
      "declare": false,
      "start": 57,
      "end": 131
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Plugin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 148
                },
                "typeArguments": null,
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "start": 139,
            "end": 148
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "pluginImportX",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 164
          },
          "definite": false,
          "start": 139,
          "end": 164
        }
      ],
      "declare": false,
      "start": 133,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 165
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "pluginImportX",
    "start": 12,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 26,
    "end": 30
  },
  {
    "type": "String",
    "value": "'eslint-plugin-import-x'",
    "start": 31,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "configs",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "parser",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Null",
    "value": "null",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "pluginImportX",
    "start": 151,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  }
]
```

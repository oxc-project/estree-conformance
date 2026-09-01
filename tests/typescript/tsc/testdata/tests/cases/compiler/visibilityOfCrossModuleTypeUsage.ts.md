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
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 45
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./visibilityOfCrossModuleTypeUsage_fs",
          "raw": "'./visibilityOfCrossModuleTypeUsage_fs'",
          "start": 56,
          "end": 95
        },
        "start": 48,
        "end": 96
      },
      "importKind": "value",
      "start": 36,
      "end": 97
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 111
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./visibilityOfCrossModuleTypeUsage_server",
          "raw": "'./visibilityOfCrossModuleTypeUsage_server'",
          "start": 122,
          "end": 165
        },
        "start": 114,
        "end": 166
      },
      "importKind": "value",
      "start": 98,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConfiguration",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 200
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "workspace",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 216
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "server",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 224
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWorkspace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 235
                    },
                    "start": 218,
                    "end": 235
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 235
                },
                "start": 216,
                "end": 235
              },
              "accessibility": null,
              "static": false,
              "start": 207,
              "end": 236
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "server",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 247
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "server",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 256
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IServer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 264
                    },
                    "start": 250,
                    "end": 264
                  },
                  "typeArguments": null,
                  "start": 250,
                  "end": 264
                },
                "start": 248,
                "end": 264
              },
              "accessibility": null,
              "static": false,
              "start": 241,
              "end": 265
            }
          ],
          "start": 201,
          "end": 267
        },
        "declare": false,
        "start": 176,
        "end": 267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 169,
      "end": 267
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 268
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 43,
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
    "value": "require",
    "start": 48,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "'./visibilityOfCrossModuleTypeUsage_fs'",
    "start": 56,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 98,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "'./visibilityOfCrossModuleTypeUsage_server'",
    "start": 122,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "IConfiguration",
    "start": 186,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "workspace",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "IWorkspace",
    "start": 225,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "IServer",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
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
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IServer",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 24
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 25,
          "end": 28
        },
        "declare": false,
        "start": 7,
        "end": 28
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IWorkspace",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 57
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toAbsolutePath",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 78
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IServer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 94
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 94
                    },
                    "start": 85,
                    "end": 94
                  },
                  "start": 79,
                  "end": 94
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "workspaceRelativePath",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 120,
                      "end": 126
                    },
                    "start": 118,
                    "end": 126
                  },
                  "start": 96,
                  "end": 126
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                "start": 127,
                "end": 135
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 64,
              "end": 136
            }
          ],
          "start": 58,
          "end": 138
        },
        "declare": false,
        "start": 37,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "IServer",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 37,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "IWorkspace",
    "start": 47,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "toAbsolutePath",
    "start": 64,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "IServer",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "workspaceRelativePath",
    "start": 96,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
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
    "value": "string",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  }
]
```
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
        "name": "commands",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./visibilityOfCrossModuleTypeUsage_commands",
          "raw": "'./visibilityOfCrossModuleTypeUsage_commands'",
          "start": 26,
          "end": 71
        },
        "start": 18,
        "end": 72
      },
      "importKind": "value",
      "start": 0,
      "end": 73
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "configuration",
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
                  "name": "commands",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 110
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IConfiguration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 125
                },
                "start": 102,
                "end": 125
              },
              "typeArguments": null,
              "start": 102,
              "end": 125
            },
            "start": 100,
            "end": 125
          },
          "start": 87,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "absoluteWorkspacePath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 158
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configuration",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 174
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "workspace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 184
                      },
                      "optional": false,
                      "computed": false,
                      "start": 161,
                      "end": 184
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toAbsolutePath",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 199
                    },
                    "optional": false,
                    "computed": false,
                    "start": 161,
                    "end": 199
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "configuration",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 213
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "server",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 200,
                      "end": 220
                    }
                  ],
                  "optional": false,
                  "start": 161,
                  "end": 221
                },
                "definite": false,
                "start": 137,
                "end": 221
              }
            ],
            "declare": false,
            "start": 133,
            "end": 222
          }
        ],
        "start": 127,
        "end": 224
      },
      "expression": false,
      "start": 74,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 224
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
    "type": "Identifier",
    "value": "commands",
    "start": 7,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "'./visibilityOfCrossModuleTypeUsage_commands'",
    "start": 26,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 74,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "configuration",
    "start": 87,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "commands",
    "start": 102,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "IConfiguration",
    "start": 111,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "absoluteWorkspacePath",
    "start": 137,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "configuration",
    "start": 161,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "workspace",
    "start": 175,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "toAbsolutePath",
    "start": 185,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "configuration",
    "start": 200,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  }
]
```

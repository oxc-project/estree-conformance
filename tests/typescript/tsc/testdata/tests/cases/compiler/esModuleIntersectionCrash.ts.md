__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "modObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "start": 0,
      "end": 16
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
            "name": "modObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 39,
                        "end": 45
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 47
                      },
                      "start": 39,
                      "end": 47
                    },
                    "typeArguments": null,
                    "start": 39,
                    "end": 47
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 56
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 58
                      },
                      "start": 50,
                      "end": 58
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 58
                  }
                ],
                "start": 39,
                "end": 58
              },
              "start": 37,
              "end": 58
            },
            "start": 31,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 58
        }
      ],
      "declare": true,
      "start": 17,
      "end": 59
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "modObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 109,
                      "end": 113
                    },
                    "start": 107,
                    "end": 113
                  },
                  "start": 105,
                  "end": 114
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    },
                    "start": 116,
                    "end": 124
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 115,
                  "end": 125
                }
              ],
              "start": 103,
              "end": 127
            },
            "declare": false,
            "start": 91,
            "end": 127
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 150,
                          "end": 156
                        },
                        "start": 148,
                        "end": 156
                      },
                      "start": 147,
                      "end": 156
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 159,
                      "end": 163
                    },
                    "start": 157,
                    "end": 163
                  },
                  "start": 146,
                  "end": 164
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 165,
                  "end": 175
                }
              ],
              "start": 144,
              "end": 177
            },
            "declare": false,
            "start": 132,
            "end": 177
          }
        ],
        "start": 85,
        "end": 179
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 60,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 179
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
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "modObj",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 17,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "modObj",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "modObj",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "modObj",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "modObj",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 91,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 132,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 165,
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
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod",
        "raw": "\"./mod\"",
        "start": 21,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 33
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 35
        },
        "optional": false,
        "computed": false,
        "start": 30,
        "end": 35
      },
      "directive": null,
      "start": 30,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 40
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "optional": false,
        "computed": false,
        "start": 37,
        "end": 42
      },
      "directive": null,
      "start": 37,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
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
    "value": "mod",
    "start": 12,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./mod\"",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./account",
        "raw": "\"./account\"",
        "start": 14,
        "end": 25
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"./account\"",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
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
          "name": "Account",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 24
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
                "name": "myAccNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 39
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "accessibility": null,
              "static": false,
              "start": 31,
              "end": 48
            }
          ],
          "start": 25,
          "end": 50
        },
        "declare": false,
        "start": 7,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Account2",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 69
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
              "name": "myAccNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 93
          }
        ],
        "start": 70,
        "end": 95
      },
      "declare": false,
      "start": 51,
      "end": 95
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
            "name": "Account2",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 113
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 120
          },
          "exportKind": "value",
          "start": 105,
          "end": 120
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 96,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 124
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
    "value": "Account",
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
    "type": "Identifier",
    "value": "myAccNum",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 51,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Account2",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "myAccNum",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 96,
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
    "value": "Account2",
    "start": 105,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Account",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 38
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
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 57
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    },
                    "start": 57,
                    "end": 65
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 49,
                  "end": 66
                }
              ],
              "start": 39,
              "end": 72
            },
            "declare": false,
            "start": 21,
            "end": 72
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
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
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 109
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    },
                    "start": 109,
                    "end": 117
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 101,
                  "end": 118
                }
              ],
              "start": 91,
              "end": 124
            },
            "declare": false,
            "start": 77,
            "end": 124
          }
        ],
        "start": 15,
        "end": 126
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 126
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 144
          },
          "start": 134,
          "end": 144
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./model",
        "raw": "\"./model\"",
        "start": 150,
        "end": 159
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 127,
      "end": 160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 178
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "account",
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
                          "name": "model",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 196
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Account",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 204
                        },
                        "start": 191,
                        "end": 204
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 204
                    },
                    "start": 189,
                    "end": 204
                  },
                  "start": 182,
                  "end": 204
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "acc2",
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
                          "name": "model",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 217
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Acc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 221
                        },
                        "start": 212,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 212,
                      "end": 221
                    },
                    "start": 210,
                    "end": 221
                  },
                  "start": 206,
                  "end": 221
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 226,
                "end": 228
              },
              "id": null,
              "generator": false,
              "start": 181,
              "end": 228
            },
            "definite": false,
            "start": 174,
            "end": 228
          }
        ],
        "declare": false,
        "start": 168,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
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
    "type": "Identifier",
    "value": "global",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 101,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 136,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 145,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"./model\"",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "account",
    "start": 182,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "acc2",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  }
]
```

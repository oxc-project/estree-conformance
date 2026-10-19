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
            "name": "reader",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FileSystemDirectoryReader",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 47
                },
                "typeArguments": null,
                "start": 22,
                "end": 47
              },
              "start": 20,
              "end": 47
            },
            "start": 14,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 47
        }
      ],
      "declare": true,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "reader",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 55
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 67
          },
          "optional": false,
          "computed": false,
          "start": 49,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 75
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 93
              },
              "optional": false,
              "computed": false,
              "start": 79,
              "end": 93
            },
            "id": null,
            "generator": false,
            "start": 68,
            "end": 93
          }
        ],
        "optional": false,
        "start": 49,
        "end": 94
      },
      "directive": null,
      "start": 49,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "reader",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readEntries",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 114
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FileSystemEntry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 146
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 146
                    },
                    "start": 131,
                    "end": 148
                  },
                  "start": 129,
                  "end": 148
                },
                "start": 122,
                "end": 148
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 153,
              "end": 155
            },
            "id": null,
            "generator": false,
            "start": 115,
            "end": 155
          }
        ],
        "optional": false,
        "start": 96,
        "end": 156
      },
      "directive": null,
      "start": 96,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 169
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FileSystemEntry",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 194
                  },
                  "typeArguments": null,
                  "start": 179,
                  "end": 194
                },
                "start": 179,
                "end": 196
              },
              "start": 170,
              "end": 196
            }
          ],
          "start": 169,
          "end": 197
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 205
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reader",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readEntries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 227
                },
                "optional": false,
                "computed": false,
                "start": 209,
                "end": 227
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                }
              ],
              "optional": false,
              "start": 209,
              "end": 236
            },
            "id": null,
            "generator": false,
            "start": 198,
            "end": 236
          }
        ],
        "start": 158,
        "end": 237
      },
      "directive": null,
      "start": 158,
      "end": 238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 238
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
    "value": "reader",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "FileSystemDirectoryReader",
    "start": 22,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "reader",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "readEntries",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "reader",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "readEntries",
    "start": 103,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "FileSystemEntry",
    "start": 131,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "new",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "FileSystemEntry",
    "start": 179,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
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
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 206,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "reader",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "readEntries",
    "start": 216,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
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

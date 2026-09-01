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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 32
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 33,
                "end": 36
              },
              "abstract": false,
              "declare": false,
              "start": 24,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 36
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 55
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
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 55,
                "end": 58
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 59,
                "end": 62
              },
              "abstract": false,
              "declare": false,
              "start": 47,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 62
          }
        ],
        "start": 12,
        "end": 64
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 97
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 110
                },
                "optional": false,
                "computed": false,
                "start": 106,
                "end": 110
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 111,
                "end": 114
              },
              "abstract": false,
              "declare": false,
              "start": 89,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 82,
            "end": 114
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 133
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
                      "start": 134,
                      "end": 135
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 134,
                    "end": 135
                  }
                ],
                "start": 133,
                "end": 136
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 149
                },
                "optional": false,
                "computed": false,
                "start": 145,
                "end": 149
              },
              "superTypeArguments": {
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
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  }
                ],
                "start": 149,
                "end": 152
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 153,
                "end": 156
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 156
          }
        ],
        "start": 77,
        "end": 158
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 65,
      "end": 158
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 176
              },
              "optional": false,
              "computed": false,
              "start": 172,
              "end": 176
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 177,
                  "end": 183
                }
              ],
              "start": 176,
              "end": 184
            },
            "arguments": [],
            "start": 168,
            "end": 186
          },
          "definite": false,
          "start": 164,
          "end": 186
        }
      ],
      "declare": false,
      "start": 160,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D1",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 216
              },
              "optional": false,
              "computed": false,
              "start": 212,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [],
            "start": 208,
            "end": 218
          },
          "definite": false,
          "start": 204,
          "end": 218
        }
      ],
      "declare": false,
      "start": 200,
      "end": 219
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 238
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 249
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 249
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ],
              "start": 249,
              "end": 257
            },
            "arguments": [],
            "start": 241,
            "end": 259
          },
          "definite": false,
          "start": 236,
          "end": 259
        }
      ],
      "declare": false,
      "start": 232,
      "end": 260
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 276
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 287
              },
              "optional": false,
              "computed": false,
              "start": 283,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [],
            "start": 279,
            "end": 289
          },
          "definite": false,
          "start": 274,
          "end": 289
        }
      ],
      "declare": false,
      "start": 270,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 311
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 17,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 24,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 40,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 65,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 95,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 98,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
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
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 174,
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
    "value": "number",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 212,
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
    "value": "D1",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  }
]
```

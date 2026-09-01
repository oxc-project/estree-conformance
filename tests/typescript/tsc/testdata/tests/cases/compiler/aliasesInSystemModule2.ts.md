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
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "importKind": "value",
          "start": 8,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 20,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 37
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "alias",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 45
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 51
        },
        "start": 40,
        "end": 51
      },
      "importKind": "value",
      "start": 27,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 71
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 79
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 85
          },
          "start": 74,
          "end": 85
        },
        "importKind": "value",
        "start": 60,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 86
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 105
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 111
              },
              "optional": false,
              "computed": false,
              "start": 100,
              "end": 111
            },
            "typeArguments": null,
            "arguments": [],
            "start": 96,
            "end": 113
          },
          "definite": false,
          "start": 92,
          "end": 113
        }
      ],
      "declare": false,
      "start": 88,
      "end": 114
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeArguments": null,
            "arguments": [],
            "start": 123,
            "end": 132
          },
          "definite": false,
          "start": 119,
          "end": 132
        }
      ],
      "declare": false,
      "start": 115,
      "end": 133
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls2",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "typeArguments": null,
            "arguments": [],
            "start": 142,
            "end": 152
          },
          "definite": false,
          "start": 138,
          "end": 152
        }
      ],
      "declare": false,
      "start": 134,
      "end": 153
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 166
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 188
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 196
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 202
                },
                "start": 191,
                "end": 202
              },
              "importKind": "value",
              "start": 178,
              "end": 203
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 171,
            "end": 203
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 223
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 229
                    },
                    "optional": false,
                    "computed": false,
                    "start": 218,
                    "end": 229
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 214,
                  "end": 231
                },
                "definite": false,
                "start": 210,
                "end": 231
              }
            ],
            "declare": false,
            "start": 206,
            "end": 232
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 250
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 243,
                  "end": 252
                },
                "definite": false,
                "start": 239,
                "end": 252
              }
            ],
            "declare": false,
            "start": 235,
            "end": 253
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cls2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 273
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 265,
                  "end": 275
                },
                "definite": false,
                "start": 261,
                "end": 275
              }
            ],
            "declare": false,
            "start": 257,
            "end": 276
          }
        ],
        "start": 167,
        "end": 278
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 155,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 278
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
    "value": "alias",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 27,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 40,
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
    "value": "Class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 96,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 155,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "alias",
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
    "value": "Class",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 214,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
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

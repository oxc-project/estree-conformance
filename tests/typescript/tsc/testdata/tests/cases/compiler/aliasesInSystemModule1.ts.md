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
        "name": "alias",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "foo",
          "raw": "'foo'",
          "start": 23,
          "end": 28
        },
        "start": 15,
        "end": 29
      },
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "alias",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 49
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 55
        },
        "start": 44,
        "end": 55
      },
      "importKind": "value",
      "start": 31,
      "end": 56
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
          "start": 71,
          "end": 75
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 83
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 89
          },
          "start": 78,
          "end": 89
        },
        "importKind": "value",
        "start": 64,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 90
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
            "start": 96,
            "end": 97
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
                "start": 104,
                "end": 109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 115
              },
              "optional": false,
              "computed": false,
              "start": 104,
              "end": 115
            },
            "typeArguments": null,
            "arguments": [],
            "start": 100,
            "end": 117
          },
          "definite": false,
          "start": 96,
          "end": 117
        }
      ],
      "declare": false,
      "start": 92,
      "end": 118
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
            "start": 123,
            "end": 124
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [],
            "start": 127,
            "end": 136
          },
          "definite": false,
          "start": 123,
          "end": 136
        }
      ],
      "declare": false,
      "start": 119,
      "end": 137
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
            "start": 142,
            "end": 143
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls2",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [],
            "start": 146,
            "end": 156
          },
          "definite": false,
          "start": 142,
          "end": 156
        }
      ],
      "declare": false,
      "start": 138,
      "end": 157
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
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
                "start": 189,
                "end": 192
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 200
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 206
                },
                "start": 195,
                "end": 206
              },
              "importKind": "value",
              "start": 182,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 175,
            "end": 207
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
                  "start": 214,
                  "end": 215
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
                      "start": 222,
                      "end": 227
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 233
                    },
                    "optional": false,
                    "computed": false,
                    "start": 222,
                    "end": 233
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 218,
                  "end": 235
                },
                "definite": false,
                "start": 214,
                "end": 235
              }
            ],
            "declare": false,
            "start": 210,
            "end": 236
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
                  "start": 243,
                  "end": 244
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 254
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 247,
                  "end": 256
                },
                "definite": false,
                "start": 243,
                "end": 256
              }
            ],
            "declare": false,
            "start": 239,
            "end": 257
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
                  "start": 265,
                  "end": 266
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cls2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 277
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 269,
                  "end": 279
                },
                "definite": false,
                "start": 265,
                "end": 279
              }
            ],
            "declare": false,
            "start": 261,
            "end": 280
          }
        ],
        "start": 171,
        "end": 282
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 159,
      "end": 282
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 285
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
    "value": "alias",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "namespace",
    "start": 159,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 175,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 182,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "alias",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "cls2",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  }
]
```

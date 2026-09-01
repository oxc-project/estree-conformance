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
            "name": "Unresolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 76
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 76
          },
          "importKind": "value",
          "start": 66,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 84,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 57,
      "end": 90
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
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
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
                  "name": "type",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 120,
                      "end": 130
                    },
                    "start": 118,
                    "end": 130
                  },
                  "start": 113,
                  "end": 130
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 133,
                  "end": 137
                },
                "start": 131,
                "end": 137
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 141,
                "end": 143
              },
              "id": null,
              "generator": false,
              "start": 112,
              "end": 143
            },
            "definite": false,
            "start": 105,
            "end": 143
          }
        ],
        "declare": false,
        "start": 99,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 144
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
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 162
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
                  "name": "type",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Unresolved",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 183
                          },
                          "typeArguments": null,
                          "start": 173,
                          "end": 183
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 186,
                          "end": 195
                        }
                      ],
                      "start": 173,
                      "end": 195
                    },
                    "start": 171,
                    "end": 195
                  },
                  "start": 166,
                  "end": 195
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 198,
                  "end": 202
                },
                "start": 196,
                "end": 202
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 206,
                "end": 208
              },
              "id": null,
              "generator": false,
              "start": 165,
              "end": 208
            },
            "definite": false,
            "start": 158,
            "end": 208
          }
        ],
        "declare": false,
        "start": 152,
        "end": 209
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 145,
      "end": 209
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
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 227
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 247
                    },
                    "start": 235,
                    "end": 247
                  },
                  "start": 231,
                  "end": 247
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                },
                "start": 248,
                "end": 254
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 258,
                "end": 260
              },
              "id": null,
              "generator": false,
              "start": 230,
              "end": 260
            },
            "definite": false,
            "start": 223,
            "end": 260
          }
        ],
        "declare": false,
        "start": 217,
        "end": 261
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 261
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 261
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Unresolved",
    "start": 66,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"foo\"",
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
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 113,
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
    "value": "Unresolved",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 145,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Unresolved",
    "start": 173,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
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
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Unresolved",
    "start": 237,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  }
]
```

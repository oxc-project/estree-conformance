__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
      },
      "start": 0,
      "end": 22
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 40,
              "end": 41
            },
            "definite": false,
            "start": 36,
            "end": 41
          }
        ],
        "declare": false,
        "start": 30,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 23,
      "end": 42
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
              "name": "conflict",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 64
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 67,
              "end": 68
            },
            "definite": false,
            "start": 56,
            "end": 68
          }
        ],
        "declare": false,
        "start": 50,
        "end": 69
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 43,
      "end": 69
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
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
    "value": "as",
    "start": 7,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 10,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "conflict",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 42
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 85
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 88,
                          "end": 89
                        },
                        "definite": false,
                        "start": 84,
                        "end": 89
                      }
                    ],
                    "declare": false,
                    "start": 78,
                    "end": 90
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 71,
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
                          "name": "conflict",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 120
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 123,
                          "end": 124
                        },
                        "definite": false,
                        "start": 112,
                        "end": 124
                      }
                    ],
                    "declare": false,
                    "start": 106,
                    "end": 125
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 99,
                  "end": 125
                }
              ],
              "start": 61,
              "end": 131
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 49,
            "end": 131
          }
        ],
        "start": 43,
        "end": 133
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 28,
      "end": 133
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 150,
        "end": 155
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 179,
                    "end": 180
                  },
                  "definite": false,
                  "start": 175,
                  "end": 180
                }
              ],
              "declare": false,
              "start": 169,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 162,
            "end": 181
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
                    "name": "conflict",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 207
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 210,
                    "end": 211
                  },
                  "definite": false,
                  "start": 199,
                  "end": 211
                }
              ],
              "declare": false,
              "start": 193,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 186,
            "end": 212
          }
        ],
        "start": 156,
        "end": 214
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 135,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "optional": false,
              "computed": false,
              "start": 216,
              "end": 219
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 225
            },
            "start": 216,
            "end": 225
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "optional": false,
            "computed": false,
            "start": 228,
            "end": 231
          },
          "start": 216,
          "end": 231
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "conflict",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 244
        },
        "start": 216,
        "end": 244
      },
      "directive": null,
      "start": 216,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 248
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 250
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 253,
              "end": 257
            },
            "start": 246,
            "end": 257
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 262
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 264
          },
          "start": 246,
          "end": 264
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "conflict",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 278
          },
          "optional": false,
          "computed": false,
          "start": 267,
          "end": 278
        },
        "start": 246,
        "end": 278
      },
      "directive": null,
      "start": 246,
      "end": 279
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 279
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
    "value": "a2",
    "start": 12,
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
    "value": "\"./a\"",
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
    "type": "Identifier",
    "value": "declare",
    "start": 28,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 49,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 88,
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
    "start": 99,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "conflict",
    "start": 112,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 123,
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
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 143,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 186,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "conflict",
    "start": 199,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 216,
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
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 222,
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
    "value": "y",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "conflict",
    "start": 236,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "conflict",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  }
]
```

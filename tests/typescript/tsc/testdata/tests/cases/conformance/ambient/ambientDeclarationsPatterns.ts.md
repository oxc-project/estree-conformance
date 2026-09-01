__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo*baz",
        "raw": "\"foo*baz\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 50
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "start": 51,
                  "end": 60
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 63,
                  "end": 67
                },
                "start": 61,
                "end": 67
              },
              "body": null,
              "expression": false,
              "start": 38,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 31,
            "end": 68
          }
        ],
        "start": 25,
        "end": 70
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo*baz",
        "raw": "\"foo*baz\"",
        "start": 114,
        "end": 123
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      },
                      "start": 146,
                      "end": 154
                    },
                    "start": 143,
                    "end": 154
                  },
                  "init": null,
                  "definite": false,
                  "start": 143,
                  "end": 154
                }
              ],
              "declare": false,
              "start": 137,
              "end": 155
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 130,
            "end": 155
          }
        ],
        "start": 124,
        "end": 157
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 99,
      "end": 157
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foos*",
        "raw": "\"foos*\"",
        "start": 197,
        "end": 204
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
                    "name": "foos",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 230,
                        "end": 236
                      },
                      "start": 228,
                      "end": 236
                    },
                    "start": 224,
                    "end": 236
                  },
                  "init": null,
                  "definite": false,
                  "start": 224,
                  "end": 236
                }
              ],
              "declare": false,
              "start": 218,
              "end": 237
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 211,
            "end": 237
          }
        ],
        "start": 205,
        "end": 239
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 182,
      "end": 239
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "*!text",
        "raw": "\"*!text\"",
        "start": 256,
        "end": 264
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    },
                    "start": 278,
                    "end": 286
                  },
                  "start": 277,
                  "end": 286
                },
                "init": null,
                "definite": false,
                "start": 277,
                "end": 286
              }
            ],
            "declare": false,
            "start": 271,
            "end": 287
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "exportKind": "value",
            "start": 292,
            "end": 309
          }
        ],
        "start": 265,
        "end": 311
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 241,
      "end": 311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 312
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
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"foo*baz\"",
    "start": 15,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 38,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 107,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"foo*baz\"",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 130,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 182,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 190,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"foos*\"",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 211,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 218,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 249,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"*!text\"",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 292,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 53
          },
          "importKind": "value",
          "start": 50,
          "end": 53
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "importKind": "value",
          "start": 55,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foobarbaz",
        "raw": "\"foobarbaz\"",
        "start": 65,
        "end": 76
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 81
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 85
          }
        ],
        "optional": false,
        "start": 78,
        "end": 86
      },
      "directive": null,
      "start": 78,
      "end": 87
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 101
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 101
          },
          "importKind": "value",
          "start": 97,
          "end": 101
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foosball",
        "raw": "\"foosball\"",
        "start": 108,
        "end": 118
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 89,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 123
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 128
          }
        ],
        "optional": false,
        "start": 120,
        "end": 129
      },
      "directive": null,
      "start": 120,
      "end": 130
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fileText",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 180
          },
          "start": 172,
          "end": 180
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file!text",
        "raw": "\"./file!text\"",
        "start": 186,
        "end": 199
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 165,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fileText",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 213
          }
        ],
        "optional": false,
        "start": 201,
        "end": 214
      },
      "directive": null,
      "start": 201,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 215
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"foobarbaz\"",
    "start": 65,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 103,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"foosball\"",
    "start": 108,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "foos",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 165,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "fileText",
    "start": 172,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 181,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"./file!text\"",
    "start": 186,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "fileText",
    "start": 205,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  }
]
```

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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "importKind": "value",
          "start": 27,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../index.js",
        "raw": "\"../index.js\"",
        "start": 35,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 49
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 60
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "../index.js",
          "raw": "\"../index.js\"",
          "start": 71,
          "end": 84
        },
        "start": 63,
        "end": 85
      },
      "importKind": "value",
      "start": 50,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 102
          },
          "importKind": "value",
          "start": 95,
          "end": 102
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 109,
        "end": 121
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 122
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index.js",
          "raw": "\"./index.js\"",
          "start": 145,
          "end": 157
        },
        "start": 137,
        "end": 158
      },
      "importKind": "value",
      "start": 123,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "mod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "../index.js",
                        "raw": "\"../index.js\"",
                        "start": 219,
                        "end": 232
                      },
                      "options": null,
                      "phase": null,
                      "start": 211,
                      "end": 233
                    },
                    "start": 205,
                    "end": 233
                  },
                  "definite": false,
                  "start": 198,
                  "end": 233
                }
              ],
              "declare": false,
              "start": 192,
              "end": 234
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
                    "name": "mod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 249
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./index.js",
                        "raw": "\"./index.js\"",
                        "start": 266,
                        "end": 278
                      },
                      "options": null,
                      "phase": null,
                      "start": 258,
                      "end": 279
                    },
                    "start": 252,
                    "end": 279
                  },
                  "definite": false,
                  "start": 245,
                  "end": 279
                }
              ],
              "declare": false,
              "start": 239,
              "end": 280
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 286
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 285,
                "end": 288
              },
              "directive": null,
              "start": 285,
              "end": 289
            }
          ],
          "start": 186,
          "end": 291
        },
        "expression": false,
        "start": 167,
        "end": 291
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 160,
      "end": 291
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 291
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 30,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"../index.js\"",
    "start": 35,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 50,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"../index.js\"",
    "start": 71,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
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
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "_f",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 109,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 123,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "mod2",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 145,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 160,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 167,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 173,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "mod3",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 205,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "String",
    "value": "\"../index.js\"",
    "start": 219,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "mod4",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 252,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 266,
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
    "type": "Identifier",
    "value": "h",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_h",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "importKind": "value",
          "start": 27,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 41,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index.js",
          "raw": "\"./index.js\"",
          "start": 76,
          "end": 88
        },
        "start": 68,
        "end": 89
      },
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "importKind": "value",
          "start": 99,
          "end": 100
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\"",
        "start": 107,
        "end": 129
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 130
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 142
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/index.js",
          "raw": "\"./subfolder/index.js\"",
          "start": 153,
          "end": 175
        },
        "start": 145,
        "end": 176
      },
      "importKind": "value",
      "start": 131,
      "end": 177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "mod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 220
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./index.js",
                        "raw": "\"./index.js\"",
                        "start": 237,
                        "end": 249
                      },
                      "options": null,
                      "phase": null,
                      "start": 229,
                      "end": 250
                    },
                    "start": 223,
                    "end": 250
                  },
                  "definite": false,
                  "start": 216,
                  "end": 250
                }
              ],
              "declare": false,
              "start": 210,
              "end": 251
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
                    "name": "mod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 266
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./subfolder/index.js",
                        "raw": "\"./subfolder/index.js\"",
                        "start": 283,
                        "end": 305
                      },
                      "options": null,
                      "phase": null,
                      "start": 275,
                      "end": 306
                    },
                    "start": 269,
                    "end": 306
                  },
                  "definite": false,
                  "start": 262,
                  "end": 306
                }
              ],
              "declare": false,
              "start": 256,
              "end": 307
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 312,
                "end": 315
              },
              "directive": null,
              "start": 312,
              "end": 316
            }
          ],
          "start": 204,
          "end": 318
        },
        "expression": false,
        "start": 185,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 318
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 318
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 29,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "_h",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 41,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 76,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 102,
    "end": 106
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 107,
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
    "start": 131,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "mod2",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 145,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 153,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 178,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 185,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 191,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "mod3",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 223,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 237,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "mod4",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 269,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"./subfolder/index.js\"",
    "start": 283,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  }
]
```

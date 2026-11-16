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
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "start": 18,
              "end": 26
            },
            "start": 14,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 26
        }
      ],
      "declare": true,
      "start": 0,
      "end": 27
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
              "name": "dynamic",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 48
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 62
              },
              "options": null,
              "phase": null,
              "start": 51,
              "end": 63
            },
            "definite": false,
            "start": 41,
            "end": 63
          }
        ],
        "declare": false,
        "start": 35,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 64
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
              "name": "template",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 86
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "./",
                      "cooked": "./"
                    },
                    "tail": false,
                    "start": 96,
                    "end": 101
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".toml",
                      "cooked": ".toml"
                    },
                    "tail": true,
                    "start": 105,
                    "end": 112
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 105
                  }
                ],
                "start": 96,
                "end": 112
              },
              "options": null,
              "phase": null,
              "start": 89,
              "end": 113
            },
            "definite": false,
            "start": 78,
            "end": 113
          }
        ],
        "declare": false,
        "start": 72,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 114
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
              "name": "parenthesized",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 141
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./data.toml",
                "raw": "\"./data.toml\"",
                "start": 152,
                "end": 165
              },
              "options": null,
              "phase": null,
              "start": 144,
              "end": 167
            },
            "definite": false,
            "start": 128,
            "end": 167
          }
        ],
        "declare": false,
        "start": 122,
        "end": 168
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 115,
      "end": 168
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
              "name": "literal",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 189
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./data.toml",
                "raw": "\"./data.toml\"",
                "start": 199,
                "end": 212
              },
              "options": null,
              "phase": null,
              "start": 192,
              "end": 213
            },
            "definite": false,
            "start": 182,
            "end": 213
          }
        ],
        "declare": false,
        "start": 176,
        "end": 214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 169,
      "end": 214
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
              "name": "literalTemplate",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 243
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "./data.toml",
                      "cooked": "./data.toml"
                    },
                    "tail": true,
                    "start": 253,
                    "end": 266
                  }
                ],
                "expressions": [],
                "start": 253,
                "end": 266
              },
              "options": null,
              "phase": null,
              "start": 246,
              "end": 267
            },
            "definite": false,
            "start": 228,
            "end": 267
          }
        ],
        "declare": false,
        "start": 222,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 215,
      "end": 268
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 293
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 300,
              "end": 306
            },
            "start": 298,
            "end": 306
          },
          "start": 294,
          "end": 306
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 309,
          "end": 316
        },
        "start": 307,
        "end": 316
      },
      "body": null,
      "expression": false,
      "start": 269,
      "end": 317
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
              "name": "tsRequire",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 340
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 350
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 355
                }
              ],
              "optional": false,
              "start": 343,
              "end": 356
            },
            "definite": false,
            "start": 331,
            "end": 356
          }
        ],
        "declare": false,
        "start": 325,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 318,
      "end": 357
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 358
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
    "value": "path",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "dynamic",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "template",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Template",
    "value": "`./${",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 101,
    "end": 105
  },
  {
    "type": "Template",
    "value": "}.toml`",
    "start": 105,
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
    "value": "export",
    "start": 115,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "parenthesized",
    "start": 128,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 144,
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
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"./data.toml\"",
    "start": 152,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 176,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 182,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "String",
    "value": "\"./data.toml\"",
    "start": 199,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 215,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "literalTemplate",
    "start": 228,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Template",
    "value": "`./data.toml`",
    "start": 253,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 269,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 309,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 318,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 325,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "tsRequire",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  }
]
```
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
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "init": {
            "type": "Literal",
            "value": "./data.toml",
            "raw": "\"./data.toml\"",
            "start": 35,
            "end": 48
          },
          "definite": false,
          "start": 28,
          "end": 48
        }
      ],
      "declare": false,
      "start": 22,
      "end": 49
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
              "name": "dynamic",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 70
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 84
              },
              "options": null,
              "phase": null,
              "start": 73,
              "end": 85
            },
            "definite": false,
            "start": 63,
            "end": 85
          }
        ],
        "declare": false,
        "start": 57,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 86
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
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 108
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 118
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 123
                }
              ],
              "optional": false,
              "start": 111,
              "end": 124
            },
            "definite": false,
            "start": 100,
            "end": 124
          }
        ],
        "declare": false,
        "start": 94,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 125
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
              "name": "template",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 147
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 157
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "./",
                        "cooked": "./"
                      },
                      "tail": false,
                      "start": 158,
                      "end": 163
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".toml",
                        "cooked": ".toml"
                      },
                      "tail": true,
                      "start": 167,
                      "end": 174
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "path",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 167
                    }
                  ],
                  "start": 158,
                  "end": 174
                }
              ],
              "optional": false,
              "start": 150,
              "end": 175
            },
            "definite": false,
            "start": 139,
            "end": 175
          }
        ],
        "declare": false,
        "start": 133,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 126,
      "end": 176
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
              "name": "literal",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 197
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 207
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./data.toml",
                  "raw": "\"./data.toml\"",
                  "start": 208,
                  "end": 221
                }
              ],
              "optional": false,
              "start": 200,
              "end": 222
            },
            "definite": false,
            "start": 190,
            "end": 222
          }
        ],
        "declare": false,
        "start": 184,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 177,
      "end": 223
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
              "name": "literalTemplate",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 252
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 262
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "./data.toml",
                        "cooked": "./data.toml"
                      },
                      "tail": true,
                      "start": 263,
                      "end": 276
                    }
                  ],
                  "expressions": [],
                  "start": 263,
                  "end": 276
                }
              ],
              "optional": false,
              "start": 255,
              "end": 277
            },
            "definite": false,
            "start": 237,
            "end": 277
          }
        ],
        "declare": false,
        "start": 231,
        "end": 278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 278
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
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"./data.toml\"",
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
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "dynamic",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 80,
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
    "value": "export",
    "start": 87,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "template",
    "start": 139,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Template",
    "value": "`./${",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 163,
    "end": 167
  },
  {
    "type": "Template",
    "value": "}.toml`",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 177,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"./data.toml\"",
    "start": 208,
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
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 224,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "literalTemplate",
    "start": 237,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Template",
    "value": "`./data.toml`",
    "start": 263,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "start": 29,
            "end": 37
          },
          "start": 25,
          "end": 37
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 40,
          "end": 47
        },
        "start": 38,
        "end": 47
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 48
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 48
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  }
]
```

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
          "name": "specifier",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 25,
          "end": 42
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 45,
          "end": 48
        },
        "start": 43,
        "end": 48
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "value": "specifier",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
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
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./target.ts",
        "raw": "\"./target.ts\"",
        "start": 21,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
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
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "exportKind": "value",
          "start": 45,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./target.ts",
        "raw": "\"./target.ts\"",
        "start": 57,
        "end": 70
      },
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./target.ts",
          "raw": "\"./target.ts\"",
          "start": 80,
          "end": 93
        },
        "options": null,
        "phase": null,
        "start": 73,
        "end": 94
      },
      "directive": null,
      "start": 73,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "./target.ts",
                "cooked": "./target.ts"
              },
              "tail": true,
              "start": 103,
              "end": 116
            }
          ],
          "expressions": [],
          "start": 103,
          "end": 116
        },
        "options": null,
        "phase": null,
        "start": 96,
        "end": 117
      },
      "directive": null,
      "start": 96,
      "end": 118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 130
        },
        "options": null,
        "phase": null,
        "start": 119,
        "end": 131
      },
      "directive": null,
      "start": 119,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 140,
              "end": 145
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 149,
              "end": 151
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "path",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 149
            }
          ],
          "start": 140,
          "end": 151
        },
        "options": null,
        "phase": null,
        "start": 133,
        "end": 152
      },
      "directive": null,
      "start": 133,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./target.ts",
              "raw": "\"./target.ts\"",
              "start": 168,
              "end": 181
            },
            "options": null,
            "phase": null,
            "start": 161,
            "end": 182
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 186,
            "end": 189
          },
          "start": 161,
          "end": 189
        },
        "options": null,
        "phase": null,
        "start": 154,
        "end": 190
      },
      "directive": null,
      "start": 154,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 199
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 204
          }
        ],
        "optional": false,
        "start": 192,
        "end": 205
      },
      "directive": null,
      "start": 192,
      "end": 206
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 207
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
    "value": "path",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 21,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
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
    "value": "path",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 52,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 57,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
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
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 80,
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
    "type": "Keyword",
    "value": "import",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Template",
    "value": "`./target.ts`",
    "start": 103,
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
    "value": "import",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 126,
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
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Template",
    "value": "`./${",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 145,
    "end": 149
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 149,
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
    "type": "Keyword",
    "value": "import",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 168,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 183,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 18
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./target.ts",
            "raw": "\"./target.ts\"",
            "start": 19,
            "end": 32
          }
        ],
        "optional": false,
        "start": 11,
        "end": 33
      },
      "directive": null,
      "start": 11,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 42
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "./target.ts",
                  "cooked": "./target.ts"
                },
                "tail": true,
                "start": 43,
                "end": 56
              }
            ],
            "expressions": [],
            "start": 43,
            "end": 56
          }
        ],
        "optional": false,
        "start": 35,
        "end": 57
      },
      "directive": null,
      "start": 35,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 66
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "./",
              "raw": "\"./\"",
              "start": 67,
              "end": 71
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "target.ts",
              "raw": "\"target.ts\"",
              "start": 74,
              "end": 85
            },
            "start": 67,
            "end": 85
          }
        ],
        "optional": false,
        "start": 59,
        "end": 86
      },
      "directive": null,
      "start": 59,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 103
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./target.ts",
                  "raw": "\"./target.ts\"",
                  "start": 104,
                  "end": 117
                }
              ],
              "optional": false,
              "start": 96,
              "end": 118
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "path",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 123
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 123
          }
        ],
        "optional": false,
        "start": 88,
        "end": 124
      },
      "directive": null,
      "start": 88,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./target.ts",
          "raw": "\"./target.ts\"",
          "start": 133,
          "end": 146
        },
        "options": null,
        "phase": null,
        "start": 126,
        "end": 147
      },
      "directive": null,
      "start": 126,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 163
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./target.ts",
                "raw": "\"./target.ts\"",
                "start": 164,
                "end": 177
              }
            ],
            "optional": false,
            "start": 156,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 156,
          "end": 183
        },
        "options": null,
        "phase": null,
        "start": 149,
        "end": 184
      },
      "directive": null,
      "start": 149,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 186
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 19,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Template",
    "value": "`./target.ts`",
    "start": 43,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"target.ts\"",
    "start": 74,
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
    "type": "Identifier",
    "value": "require",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 104,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "value": "import",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 133,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 164,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
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
              "start": 13,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": "./target.ts",
              "raw": "\"./target.ts\"",
              "start": 20,
              "end": 33
            },
            "definite": false,
            "start": 13,
            "end": 33
          }
        ],
        "declare": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 20,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  }
]
```

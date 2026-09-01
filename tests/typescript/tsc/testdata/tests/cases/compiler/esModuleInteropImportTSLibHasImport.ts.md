__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "tslib",
        "raw": "\"tslib\"",
        "start": 15,
        "end": 22
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
                    "name": "__exportStar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 52,
                        "end": 55
                      },
                      "start": 50,
                      "end": 55
                    },
                    "start": 38,
                    "end": 55
                  },
                  "init": null,
                  "definite": false,
                  "start": 38,
                  "end": 55
                }
              ],
              "declare": false,
              "start": 32,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 56
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
                    "name": "__importDefault",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 87,
                        "end": 90
                      },
                      "start": 85,
                      "end": 90
                    },
                    "start": 70,
                    "end": 90
                  },
                  "init": null,
                  "definite": false,
                  "start": 70,
                  "end": 90
                }
              ],
              "declare": false,
              "start": 64,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 91
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
                    "name": "__importStar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 119,
                        "end": 122
                      },
                      "start": 117,
                      "end": 122
                    },
                    "start": 105,
                    "end": 122
                  },
                  "init": null,
                  "definite": false,
                  "start": 105,
                  "end": 122
                }
              ],
              "declare": false,
              "start": 99,
              "end": 123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 123
          }
        ],
        "start": 23,
        "end": 125
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 125
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 125
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
    "value": "\"tslib\"",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "__exportStar",
    "start": 38,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
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
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "__importDefault",
    "start": 70,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
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
    "value": "__importStar",
    "start": 105,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
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
              "name": "username",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 21
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "username",
                "raw": "'username'",
                "start": 30,
                "end": 40
              },
              "id": null,
              "generator": false,
              "start": 24,
              "end": 40
            },
            "definite": false,
            "start": 13,
            "end": 40
          }
        ],
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
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
    "value": "username",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 27,
    "end": 29
  },
  {
    "type": "String",
    "value": "'username'",
    "start": 30,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./username",
        "raw": "'./username'",
        "start": 14,
        "end": 26
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "'./username'",
    "start": 14,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
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
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 18,
                "end": 31
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "Hello, ",
                      "cooked": "Hello, "
                    },
                    "tail": false,
                    "start": 42,
                    "end": 52
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "!",
                      "cooked": "!"
                    },
                    "tail": true,
                    "start": 56,
                    "end": 59
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 56
                  }
                ],
                "start": 42,
                "end": 59
              },
              "prefix": true,
              "start": 36,
              "end": 60
            },
            "id": null,
            "generator": false,
            "start": 17,
            "end": 60
          },
          "definite": false,
          "start": 6,
          "end": 60
        }
      ],
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 86
      },
      "exportKind": "value",
      "start": 63,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 87
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 33,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Template",
    "value": "`Hello, ${",
    "start": 42,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 52,
    "end": 56
  },
  {
    "type": "Template",
    "value": "}!`",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./hello",
        "raw": "\"./hello\"",
        "start": 21,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "username",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 49
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "username",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 49
          },
          "importKind": "value",
          "start": 41,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./utils",
        "raw": "'./utils'",
        "start": 57,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "sayHello",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "username",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 86
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 78,
            "end": 88
          }
        ],
        "optional": false,
        "start": 69,
        "end": 89
      },
      "directive": null,
      "start": 69,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
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
    "value": "sayHello",
    "start": 7,
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
    "value": "\"./hello\"",
    "start": 21,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "username",
    "start": 41,
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
    "value": "'./utils'",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 69,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "username",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
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
  }
]
```

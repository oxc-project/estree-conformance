__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "async",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 21
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 22,
                "end": 23
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 22,
              "end": 23
            }
          ],
          "start": 21,
          "end": 24
        },
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 34,
                  "end": 37
                },
                "start": 34,
                "end": 39
              },
              "start": 32,
              "end": 39
            },
            "value": null,
            "start": 25,
            "end": 39
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 42,
            "end": 45
          },
          "start": 40,
          "end": 45
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 46,
          "end": 49
        },
        "expression": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "await",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 71
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 79
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 81,
                  "end": 84
                },
                "start": 81,
                "end": 86
              },
              "start": 79,
              "end": 86
            },
            "value": null,
            "start": 72,
            "end": 86
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 89,
            "end": 92
          },
          "start": 87,
          "end": 92
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 93,
          "end": 96
        },
        "expression": false,
        "start": 57,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
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
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
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
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "importKind": "value",
          "start": 16,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./asyncawait",
        "raw": "'./asyncawait'",
        "start": 29,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "async",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 77
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 85
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 93
                    },
                    "optional": false,
                    "computed": false,
                    "start": 78,
                    "end": 93
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 94,
                      "end": 95
                    }
                  ],
                  "optional": false,
                  "start": 78,
                  "end": 96
                }
              ],
              "optional": false,
              "start": 72,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 97
          }
        ],
        "optional": false,
        "start": 60,
        "end": 98
      },
      "exportKind": "value",
      "start": 45,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 100
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
    "value": "async",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "'./asyncawait'",
    "start": 29,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 45,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 52,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 72,
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
    "value": "Promise",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": true,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 36,
                "end": 37
              },
              "start": 29,
              "end": 38
            }
          ],
          "start": 27,
          "end": 40
        },
        "id": null,
        "generator": false,
        "start": 15,
        "end": 40
      },
      "exportKind": "value",
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 29,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "importKind": "value",
          "start": 16,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./asyncawait",
        "raw": "'./asyncawait'",
        "start": 29,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "async",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 65
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 66,
              "end": 72
            }
          ],
          "start": 65,
          "end": 73
        },
        "arguments": [],
        "optional": false,
        "start": 60,
        "end": 75
      },
      "exportKind": "value",
      "start": 45,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
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
    "value": "async",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "'./asyncawait'",
    "start": 29,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 45,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 52,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
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
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "importKind": "value",
          "start": 16,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./asyncawait",
        "raw": "'./asyncawait'",
        "start": 29,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "async",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "exportKind": "value",
      "start": 46,
      "end": 67
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
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
    "value": "async",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "'./asyncawait'",
    "start": 29,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 53,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
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
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "importKind": "value",
          "start": 16,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./asyncawait",
        "raw": "'./asyncawait'",
        "start": 29,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "async",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "exportKind": "value",
      "start": 46,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 87
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 90,
          "end": 93
        },
        "expression": false,
        "start": 75,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 93
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
    "value": "async",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "'./asyncawait'",
    "start": 29,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 53,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 61,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 75,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  }
]
```

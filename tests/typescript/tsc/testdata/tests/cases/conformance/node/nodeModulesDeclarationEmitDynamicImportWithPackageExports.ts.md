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
      "start": 19,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
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
      "start": 19,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
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
      "start": 19,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "package/cjs",
                  "raw": "\"package/cjs\"",
                  "start": 49,
                  "end": 62
                },
                "options": null,
                "phase": null,
                "start": 42,
                "end": 63
              },
              "start": 36,
              "end": 63
            },
            "definite": false,
            "start": 32,
            "end": 63
          }
        ],
        "declare": false,
        "start": 26,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "package/mjs",
                  "raw": "\"package/mjs\"",
                  "start": 95,
                  "end": 108
                },
                "options": null,
                "phase": null,
                "start": 88,
                "end": 109
              },
              "start": 82,
              "end": 109
            },
            "definite": false,
            "start": 78,
            "end": 109
          }
        ],
        "declare": false,
        "start": 72,
        "end": 110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 110
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "package",
                  "raw": "\"package\"",
                  "start": 141,
                  "end": 150
                },
                "options": null,
                "phase": null,
                "start": 134,
                "end": 151
              },
              "start": 128,
              "end": 151
            },
            "definite": false,
            "start": 124,
            "end": 151
          }
        ],
        "declare": false,
        "start": 118,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 152
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "inner",
                  "raw": "\"inner\"",
                  "start": 183,
                  "end": 190
                },
                "options": null,
                "phase": null,
                "start": 176,
                "end": 191
              },
              "start": 170,
              "end": 191
            },
            "definite": false,
            "start": 166,
            "end": 191
          }
        ],
        "declare": false,
        "start": 160,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 192
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 49,
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
    "value": "b",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 82,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 95,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 111,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 128,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 170,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "inner/cjs",
                  "raw": "\"inner/cjs\"",
                  "start": 49,
                  "end": 60
                },
                "options": null,
                "phase": null,
                "start": 42,
                "end": 61
              },
              "start": 36,
              "end": 61
            },
            "definite": false,
            "start": 32,
            "end": 61
          }
        ],
        "declare": false,
        "start": 26,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 62
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "inner/mjs",
                  "raw": "\"inner/mjs\"",
                  "start": 93,
                  "end": 104
                },
                "options": null,
                "phase": null,
                "start": 86,
                "end": 105
              },
              "start": 80,
              "end": 105
            },
            "definite": false,
            "start": 76,
            "end": 105
          }
        ],
        "declare": false,
        "start": 70,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 63,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 106
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 49,
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
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 80,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "package/cjs",
                  "raw": "\"package/cjs\"",
                  "start": 49,
                  "end": 62
                },
                "options": null,
                "phase": null,
                "start": 42,
                "end": 63
              },
              "start": 36,
              "end": 63
            },
            "definite": false,
            "start": 32,
            "end": 63
          }
        ],
        "declare": false,
        "start": 26,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "package/mjs",
                  "raw": "\"package/mjs\"",
                  "start": 95,
                  "end": 108
                },
                "options": null,
                "phase": null,
                "start": 88,
                "end": 109
              },
              "start": 82,
              "end": 109
            },
            "definite": false,
            "start": 78,
            "end": 109
          }
        ],
        "declare": false,
        "start": 72,
        "end": 110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 110
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "package",
                  "raw": "\"package\"",
                  "start": 141,
                  "end": 150
                },
                "options": null,
                "phase": null,
                "start": 134,
                "end": 151
              },
              "start": 128,
              "end": 151
            },
            "definite": false,
            "start": 124,
            "end": 151
          }
        ],
        "declare": false,
        "start": 118,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 152
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "inner",
                  "raw": "\"inner\"",
                  "start": 183,
                  "end": 190
                },
                "options": null,
                "phase": null,
                "start": 176,
                "end": 191
              },
              "start": 170,
              "end": 191
            },
            "definite": false,
            "start": 166,
            "end": 191
          }
        ],
        "declare": false,
        "start": 160,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 192
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 49,
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
    "value": "b",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 82,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 95,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 111,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 128,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 170,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "inner/cjs",
                  "raw": "\"inner/cjs\"",
                  "start": 49,
                  "end": 60
                },
                "options": null,
                "phase": null,
                "start": 42,
                "end": 61
              },
              "start": 36,
              "end": 61
            },
            "definite": false,
            "start": 32,
            "end": 61
          }
        ],
        "declare": false,
        "start": 26,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 62
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "inner/mjs",
                  "raw": "\"inner/mjs\"",
                  "start": 93,
                  "end": 104
                },
                "options": null,
                "phase": null,
                "start": 86,
                "end": 105
              },
              "start": 80,
              "end": 105
            },
            "definite": false,
            "start": 76,
            "end": 105
          }
        ],
        "declare": false,
        "start": 70,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 63,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 106
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 49,
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
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 80,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "package/cjs",
                "raw": "\"package/cjs\"",
                "start": 51,
                "end": 64
              },
              "options": null,
              "phase": null,
              "start": 44,
              "end": 65
            },
            "definite": false,
            "start": 40,
            "end": 65
          }
        ],
        "declare": false,
        "start": 34,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
      "end": 66
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "package/mjs",
                "raw": "\"package/mjs\"",
                "start": 91,
                "end": 104
              },
              "options": null,
              "phase": null,
              "start": 84,
              "end": 105
            },
            "definite": false,
            "start": 80,
            "end": 105
          }
        ],
        "declare": false,
        "start": 74,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 106
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "package",
                "raw": "\"package\"",
                "start": 131,
                "end": 140
              },
              "options": null,
              "phase": null,
              "start": 124,
              "end": 141
            },
            "definite": false,
            "start": 120,
            "end": 141
          }
        ],
        "declare": false,
        "start": 114,
        "end": 142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 142
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "inner",
                "raw": "\"inner\"",
                "start": 167,
                "end": 174
              },
              "options": null,
              "phase": null,
              "start": 160,
              "end": 175
            },
            "definite": false,
            "start": 156,
            "end": 175
          }
        ],
        "declare": false,
        "start": 150,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 143,
      "end": 176
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 27,
  "end": 176
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 51,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 91,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 143,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"inner\"",
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "inner/cjs",
                "raw": "\"inner/cjs\"",
                "start": 51,
                "end": 62
              },
              "options": null,
              "phase": null,
              "start": 44,
              "end": 63
            },
            "definite": false,
            "start": 40,
            "end": 63
          }
        ],
        "declare": false,
        "start": 34,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "inner/mjs",
                "raw": "\"inner/mjs\"",
                "start": 89,
                "end": 100
              },
              "options": null,
              "phase": null,
              "start": 82,
              "end": 101
            },
            "definite": false,
            "start": 78,
            "end": 101
          }
        ],
        "declare": false,
        "start": 72,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 65,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 27,
  "end": 102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 51,
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
    "value": "e",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 89,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
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
              "name": "cjsMain",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 42,
              "end": 46
            },
            "definite": false,
            "start": 32,
            "end": 46
          }
        ],
        "declare": false,
        "start": 26,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 47
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "cjsMain",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
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
              "name": "esm",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 38,
              "end": 42
            },
            "definite": false,
            "start": 32,
            "end": 42
          }
        ],
        "declare": false,
        "start": 26,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "esm",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
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
              "name": "cjsNonmain",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 42
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 45,
              "end": 49
            },
            "definite": false,
            "start": 32,
            "end": 49
          }
        ],
        "declare": false,
        "start": 26,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 50
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "cjsNonmain",
    "start": 32,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```

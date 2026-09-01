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
            "name": "moduleB",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2",
        "raw": "\"./file2\"",
        "start": 25,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 56
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            },
            "start": 58,
            "end": 63
          },
          "start": 57,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 66,
          "end": 70
        },
        "start": 64,
        "end": 70
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 84
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 90
            },
            "optional": false,
            "computed": false,
            "start": 77,
            "end": 90
          }
        ],
        "optional": false,
        "start": 73,
        "end": 91
      },
      "directive": null,
      "start": 73,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleC",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 112
            },
            "optional": false,
            "computed": false,
            "start": 97,
            "end": 112
          }
        ],
        "optional": false,
        "start": 93,
        "end": 113
      },
      "directive": null,
      "start": 93,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 126
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleCStar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 138
            },
            "optional": false,
            "computed": false,
            "start": 119,
            "end": 138
          }
        ],
        "optional": false,
        "start": 115,
        "end": 139
      },
      "directive": null,
      "start": 115,
      "end": 140
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 141
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
    "value": "moduleB",
    "start": 12,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"./file2\"",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "moduleB",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "moduleB",
    "start": 97,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "moduleC",
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
    "type": "Identifier",
    "value": "use",
    "start": 115,
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
    "value": "moduleB",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "moduleCStar",
    "start": 127,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
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
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 23
          },
          "start": 7,
          "end": 23
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file3",
        "raw": "\"./file3\"",
        "start": 29,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "importKind": "value",
          "start": 47,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file4",
        "raw": "\"./file4\"",
        "start": 60,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 69
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "start": 77,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file3",
        "raw": "\"./file3\"",
        "start": 90,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 70,
      "end": 99
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 113
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 113
          },
          "importKind": "value",
          "start": 108,
          "end": 113
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file3",
        "raw": "\"./file3\"",
        "start": 120,
        "end": 129
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 100,
      "end": 129
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
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 155
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 155
          },
          "exportKind": "value",
          "start": 144,
          "end": 155
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 168
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 168
          },
          "exportKind": "value",
          "start": 161,
          "end": 168
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 179
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 179
          },
          "exportKind": "value",
          "start": 174,
          "end": 179
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 182
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
    "value": "moduleCStar",
    "start": 12,
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
    "value": "\"./file3\"",
    "start": 29,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 55,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"./file4\"",
    "start": 60,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 70,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "moduleC",
    "start": 77,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 85,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"./file3\"",
    "start": 90,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 115,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"./file3\"",
    "start": 120,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "moduleCStar",
    "start": 144,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "moduleC",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "youpi",
              "raw": "\"youpi\"",
              "start": 19,
              "end": 26
            },
            "definite": false,
            "start": 11,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 48
      },
      "exportKind": "value",
      "start": 28,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"youpi\"",
    "start": 19,
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
    "value": "default",
    "start": 35,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 43,
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": "v",
              "raw": "\"v\"",
              "start": 20,
              "end": 23
            },
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 11,
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
    "value": "\"v\"",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 28
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "fs",
          "raw": "\"fs\"",
          "start": 39,
          "end": 43
        },
        "start": 31,
        "end": 44
      },
      "importKind": "value",
      "start": 19,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 48
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 57
        },
        "optional": false,
        "computed": false,
        "start": 46,
        "end": 57
      },
      "directive": null,
      "start": 46,
      "end": 58
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "fs",
            "raw": "\"fs\"",
            "start": 87,
            "end": 91
          },
          "start": 79,
          "end": 92
        },
        "importKind": "value",
        "start": 66,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 59,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 93
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
    "type": "Identifier",
    "value": "fs",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 59,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "fs2",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 28
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "fs",
          "raw": "\"fs\"",
          "start": 39,
          "end": 43
        },
        "start": 31,
        "end": 44
      },
      "importKind": "value",
      "start": 19,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 48
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 57
        },
        "optional": false,
        "computed": false,
        "start": 46,
        "end": 57
      },
      "directive": null,
      "start": 46,
      "end": 58
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "fs",
            "raw": "\"fs\"",
            "start": 87,
            "end": 91
          },
          "start": 79,
          "end": 92
        },
        "importKind": "value",
        "start": 66,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 59,
      "end": 93
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 93
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
    "type": "Identifier",
    "value": "fs",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 59,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "fs2",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
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
            "name": "__require",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 34
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 37,
            "end": 41
          },
          "definite": false,
          "start": 25,
          "end": 41
        }
      ],
      "declare": false,
      "start": 19,
      "end": 42
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
            "name": "_createRequire",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 63
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 66,
            "end": 70
          },
          "definite": false,
          "start": 49,
          "end": 70
        }
      ],
      "declare": false,
      "start": 43,
      "end": 71
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 81
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "fs",
          "raw": "\"fs\"",
          "start": 92,
          "end": 96
        },
        "start": 84,
        "end": 97
      },
      "importKind": "value",
      "start": 72,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 101
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 110
        },
        "optional": false,
        "computed": false,
        "start": 99,
        "end": 110
      },
      "directive": null,
      "start": 99,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 129
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "fs",
            "raw": "\"fs\"",
            "start": 140,
            "end": 144
          },
          "start": 132,
          "end": 145
        },
        "importKind": "value",
        "start": 119,
        "end": 146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 146
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "__require",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Null",
    "value": "null",
    "start": 37,
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
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "_createRequire",
    "start": 49,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Null",
    "value": "null",
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
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 92,
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
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 102,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 119,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "fs2",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 20
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
    "value": "\"fs\"",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  }
]
```

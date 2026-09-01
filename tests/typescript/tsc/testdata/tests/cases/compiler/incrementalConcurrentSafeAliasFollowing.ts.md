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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "importKind": "value",
          "start": 204,
          "end": 205
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 212,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 196,
      "end": 224
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "exportKind": "value",
          "start": 239,
          "end": 245
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 226,
      "end": 246
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 196,
  "end": 246
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 207,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 212,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 226,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 241,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 6,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "exportKind": "value",
          "start": 26,
          "end": 32
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 13,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 33
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
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 13,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file1.js",
        "raw": "\"./file1.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "c",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file1.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 16,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 43,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 50
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
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 16,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
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
        "value": "./file0.js",
        "raw": "\"./file0.js\"",
        "start": 14,
        "end": 26
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file1.js",
        "raw": "\"./file1.js\"",
        "start": 41,
        "end": 53
      },
      "attributes": [],
      "exportKind": "value",
      "start": 27,
      "end": 53
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file2.js",
        "raw": "\"./file2.js\"",
        "start": 68,
        "end": 80
      },
      "attributes": [],
      "exportKind": "value",
      "start": 54,
      "end": 80
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file3.js",
        "raw": "\"./file3.js\"",
        "start": 95,
        "end": 107
      },
      "attributes": [],
      "exportKind": "value",
      "start": 81,
      "end": 107
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file4.js",
        "raw": "\"./file4.js\"",
        "start": 122,
        "end": 134
      },
      "attributes": [],
      "exportKind": "value",
      "start": 108,
      "end": 134
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file5.js",
        "raw": "\"./file5.js\"",
        "start": 149,
        "end": 161
      },
      "attributes": [],
      "exportKind": "value",
      "start": 135,
      "end": 161
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file6.js",
        "raw": "\"./file6.js\"",
        "start": 176,
        "end": 188
      },
      "attributes": [],
      "exportKind": "value",
      "start": 162,
      "end": 188
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file7.js",
        "raw": "\"./file7.js\"",
        "start": 203,
        "end": 215
      },
      "attributes": [],
      "exportKind": "value",
      "start": 189,
      "end": 215
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file8.js",
        "raw": "\"./file8.js\"",
        "start": 230,
        "end": 242
      },
      "attributes": [],
      "exportKind": "value",
      "start": 216,
      "end": 242
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file9.js",
        "raw": "\"./file9.js\"",
        "start": 257,
        "end": 269
      },
      "attributes": [],
      "exportKind": "value",
      "start": 243,
      "end": 269
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file10.js",
        "raw": "\"./file10.js\"",
        "start": 284,
        "end": 297
      },
      "attributes": [],
      "exportKind": "value",
      "start": 270,
      "end": 297
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file11.js",
        "raw": "\"./file11.js\"",
        "start": 312,
        "end": 325
      },
      "attributes": [],
      "exportKind": "value",
      "start": 298,
      "end": 325
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file12.js",
        "raw": "\"./file12.js\"",
        "start": 340,
        "end": 353
      },
      "attributes": [],
      "exportKind": "value",
      "start": 326,
      "end": 353
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file13.js",
        "raw": "\"./file13.js\"",
        "start": 368,
        "end": 381
      },
      "attributes": [],
      "exportKind": "value",
      "start": 354,
      "end": 381
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file14.js",
        "raw": "\"./file14.js\"",
        "start": 396,
        "end": 409
      },
      "attributes": [],
      "exportKind": "value",
      "start": 382,
      "end": 409
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./file15.js",
        "raw": "\"./file15.js\"",
        "start": 424,
        "end": 437
      },
      "attributes": [],
      "exportKind": "value",
      "start": 410,
      "end": 437
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 437
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
    "value": "\"./file0.js\"",
    "start": 14,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "*",
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
    "value": "\"./file1.js\"",
    "start": 41,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"./file2.js\"",
    "start": 68,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 90,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"./file3.js\"",
    "start": 95,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 117,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"./file4.js\"",
    "start": 122,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 144,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"./file5.js\"",
    "start": 149,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 171,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"./file6.js\"",
    "start": 176,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 198,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"./file7.js\"",
    "start": 203,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 225,
    "end": 229
  },
  {
    "type": "String",
    "value": "\"./file8.js\"",
    "start": 230,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 252,
    "end": 256
  },
  {
    "type": "String",
    "value": "\"./file9.js\"",
    "start": 257,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"./file10.js\"",
    "start": 284,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 307,
    "end": 311
  },
  {
    "type": "String",
    "value": "\"./file11.js\"",
    "start": 312,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 335,
    "end": 339
  },
  {
    "type": "String",
    "value": "\"./file12.js\"",
    "start": 340,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 363,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"./file13.js\"",
    "start": 368,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 391,
    "end": 395
  },
  {
    "type": "String",
    "value": "\"./file14.js\"",
    "start": 396,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 419,
    "end": 423
  },
  {
    "type": "String",
    "value": "\"./file15.js\"",
    "start": 424,
    "end": 437
  }
]
```
